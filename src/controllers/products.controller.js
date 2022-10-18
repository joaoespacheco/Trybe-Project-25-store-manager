const errorMap = require('../utils/errorMap');
const productsService = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  res.status(200).json(message);
};

const listProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, name);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(200).json(message);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.removeProduct(id);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(204).end();
};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  updateProduct,
  removeProduct,
};
