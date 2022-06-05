const Product = require('../models/product');

const Pagination = async (page) => {
  if (page <= 0) {
    page = 1;
  }
  const product = await Product.find({})
    .limit(2)
    .skip((page - 1) * 2);
  return product;
};
module.exports = Pagination;
