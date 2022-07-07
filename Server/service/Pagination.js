const Product = require('../models/product');

const Pagination = async (page) => {
  if (page <= 0) {
    page = 1;
  }
  const product = await Product.find({})
    .limit(4)
    .skip((page - 1) * 4);
  return product;
};
module.exports = Pagination;
