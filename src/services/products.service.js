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
  const error = validations.validateNameProduct(name);
  if (error.type) return error;

  const newProductId = await productsModels.insert({ name });
  const newProduct = await productsModels.findById(newProductId);

  return ({ type: null, message: newProduct });
};

const updateProduct = async (id, name) => {
  const error = validations.validateNameProduct(name);
  if (error.type) return error;
  
  const validateProduct = await productsModels.findById(id);

  if (!validateProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModels.update(id, name);

  const productUpdated = await productsModels.findById(id);
  return { type: null, message: productUpdated };
};

const removeProduct = async (id) => {
  const validateProduct = await productsModels.findById(id);
  if (!validateProduct) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModels.remove(id);
  return { type: null, message: '' };
};

const searchProduct = async (query) => {
  const products = await productsModels.findByName(query);
  console.log(query, products);
  if (products.length === 0) { return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' }; }
  return { type: null, message: products };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  removeProduct,
  searchProduct,
};