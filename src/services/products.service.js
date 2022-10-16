const productsModels = require('../models/products.models');
const validations = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModels.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validations.validateId(productId);
  if (error.type) return error;
  
  const product = await productsModels.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name) => {
  const error = validations.validateNewProduct(name);
  if (error.type) return error;

  const newProductId = await productsModels.insert({ name });
  const newProduct = await productsModels.findById(newProductId);

  return ({ type: null, message: newProduct });
};

module.exports = {
  findAll,
  findById,
  createProduct,
};