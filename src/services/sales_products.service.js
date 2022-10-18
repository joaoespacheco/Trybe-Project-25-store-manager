const salesModels = require('../models/sales.models');
const salesProductsModels = require('../models/sales_products.models');
const productsModels = require('../models/products.models');
const validations = require('./validations/validationsInputValues');

const findAll = async () => {
  const sales = await salesProductsModels.findAll();
  return { type: null, message: sales };
};

const findById = async (saleId) => {
  const sales = await salesProductsModels.findByIdWithDate(saleId);

  if (sales.length > 0) return { type: null, message: sales };
  return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
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
  const newSale = await salesProductsModels.findByIdAndColumns(currentDateId, [
    'product_id',
    'quantity',
  ]);
  return {
    type: null,
    message: { id: currentDateId, itemsSold: newSale } };
};

module.exports = {
  findAll,
  findById,
  createSale,
};
