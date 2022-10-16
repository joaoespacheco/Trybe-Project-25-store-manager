const express = require('express');
const productsController = require('../controllers/products.controller');
const validateNameField = require('../middlewares/validateNameField');

const router = express.Router();

router.get('/', productsController.listAllProducts);

router.get('/:id', productsController.listProductById);

router.post('/', validateNameField, productsController.createProduct);

module.exports = router;