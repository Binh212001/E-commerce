const express = require('express');
const { addToCart, getProductInCart } = require('../controller/cart');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

//@@@ [POST]
router.post('/product', addToCart);
// @@@@[GET]
router.post('/get', getProductInCart);

//@@@ [UPDATE]

module.exports = router;
