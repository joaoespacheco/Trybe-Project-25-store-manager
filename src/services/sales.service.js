const salesModels = require('../models/sales.models');
const salesProductsModels = require('../models/sales_products.models');
const productsModels = require('../models/products.models');
const validations = require('./validations/validationsInputValues');

const findAll = async () => {
    const products = await salesProductsModels.findAll();
    return { type: null, message: products };
};

const createSale = async (sale) => {
  const error = validations.validateNewSale(sale);
  if (error.type) return error;
  const allProducts = await productsModels.findAll();
  const productsSales = sale.every(({ productId }) => (
    allProducts.some(({ id }) => id === productId)
  ));
  if (!productsSales) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const currentDateId = await salesModels.insert();
  await Promise.all(sale.map(({ productId, quantity }) => (
    salesProductsModels.insert(productId, quantity, currentDateId)
  )));
  const newSale = await salesProductsModels.findById(currentDateId, ['product_id', 'quantity']);
  return {
    type: null,
    message: { id: currentDateId, itemsSold: newSale } };
};

module.exports = {
  findAll,
  createSale,
};
