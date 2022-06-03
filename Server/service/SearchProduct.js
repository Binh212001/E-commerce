const Product = require('../models/product');

const searchItem = async (name) => {
  try {
    let product = await Product.find({});
    product = product.filter(
      (data) => data.name.toLowerCase().indexOf(name.toLowerCase()) != -1,
    );
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = searchItem;
