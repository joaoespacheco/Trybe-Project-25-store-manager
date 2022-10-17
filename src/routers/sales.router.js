const express = require('express');
const salesController = require('../controllers/sales.controller');
const validateProductIdField = require('../middlewares/validateProductIdField');
const validateQuantityField = require('../middlewares/validateQuantityField');

const router = express.Router();

router.post(
  '/',
  validateProductIdField,
  validateQuantityField,
  salesController.createSale,
);

module.exports = router;