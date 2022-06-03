const Product = require('../models/product');

const Pagination = async (page) => {
  if (page <= 0) {
    page = 1;
  }
  const product = await Product.find({})
    .limit(20)
    .skip((page - 1) * 20);
  return product;
};
module.exports = Pagination;
