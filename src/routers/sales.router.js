const express = require('express');
const salesProductsController = require('../controllers/sales_products.controller');
const validateProductIdField = require('../middlewares/validateProductIdField');
const validateQuantityField = require('../middlewares/validateQuantityField');

const router = express.Router();

router.get('/', salesProductsController.listAllSales);

router.get('/:id', salesProductsController.listSalesById);

router.post(
  '/',
  validateProductIdField,
  validateQuantityField,
  salesProductsController.createSale,
);

module.exports = router;