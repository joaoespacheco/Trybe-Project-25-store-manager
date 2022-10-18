const errorMap = require('../utils/errorMap');
const salesProductsService = require('../services/sales_products.service');

const createSale = async (req, res) => {
  const sale = req.body;
  const { type, message } = await salesProductsService.createSale(sale);
  if (type) return res.status(errorMap.setError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createSale,
};