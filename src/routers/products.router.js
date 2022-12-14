const express = require('express');
const productsController = require('../controllers/products.controller');
const validateNameField = require('../middlewares/validateNameField');

const router = express.Router();

router.get('/', productsController.listAllProducts);

router.get('/search', productsController.searchProduct);

router.get('/:id', productsController.listProductById);

router.post('/', validateNameField, productsController.createProduct);

router.put('/:id', validateNameField, productsController.updateProduct);

router.delete('/:id', productsController.removeProduct);

module.exports = router;