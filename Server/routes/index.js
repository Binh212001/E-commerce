const authRouter = require('./auth');
const productRouter = require('./product');

const router = (app) => {
  app.use('/auth', authRouter);
  app.use('/', productRouter);
};

module.exports = router;
