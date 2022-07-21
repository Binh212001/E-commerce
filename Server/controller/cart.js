const Cart = require('../models/cart');

const addToCart = async (req, res) => {
  const { id, productId, qty, total, color } = req.body;
  console.log('🚀 ~ file: cart.js ~ line 5 ~ addToCart ~ color', color);
  try {
    const cartItem = new Cart({
      userId: id,
      productId: productId,
      qty,
      total,
      color,
    });
    await cartItem.save();
    return res.json({
      message: 'Success',
    });
  } catch (error) {
    return res.status(400);
  }
};

const getProductInCart = async (req, res) => {
  const { id } = req.body;
  console.log('🚀 ~ file: cart.js ~ line 25 ~ getProductInCart ~ id', id);

  try {
    const cartItems = await Cart.find({
      userId: id,
    }).populate('productId');
    return res.json({
      cartItems,
    });
  } catch (error) {
    return res.status(500);
  }
};

module.exports = { addToCart, getProductInCart };
