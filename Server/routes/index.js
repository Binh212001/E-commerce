const authRouter = require('./auth');
const productRouter = require('./product');
const cartRouter = require('./cart');

const router = (app) => {
  app.use('/auth', authRouter);
  app.use('/', productRouter);
  app.use('/cart', cartRouter);
};

module.exports = router;
