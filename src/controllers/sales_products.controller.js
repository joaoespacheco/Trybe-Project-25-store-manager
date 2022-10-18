const errorMap = require('../utils/errorMap');
const salesProductsService = require('../services/sales_products.service');

const listAllSales = async (_req, res) => {
 const { message } = await salesProductsService.findAll();
 res.status(200).json(message);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesProductsService.findById(id);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(200).json(message);
};

const createSale = async (req, res) => {
  const sale = req.body;
  const { type, message } = await salesProductsService.createSale(sale);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createSale,
  listAllSales,
  listSalesById,
};