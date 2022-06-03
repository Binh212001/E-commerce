const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

router.get('/product', productController.getAllProduct);
router.get('/product/detail', productController.getProductById);
router.get('/product/search', productController.getProductByName);

module.exports = router;
