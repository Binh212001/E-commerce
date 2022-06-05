const Product = require('../models/product');
const Pagination = require('../service/Pagination');
const searchItem = require('../service/SearchProduct');

// @@@@@@ find product and pagination
const getAllProduct = async (req, res) => {
  let page = parseInt(req.query.page);
  try {
    if (page) {
      const product = await Pagination(page);

      if (product.length > 0) {
        let total = await Product.estimatedDocumentCount()
          .then((docCount) => {
            return docCount;
            //and do one super neat trick
          })
          .catch((err) => {
            //handle possible errors
            throw new Error(err);
          });
        return res.status(200).json({ product, total });
      }
      return res.status(404).json({
        message: `There is not page ${page}`,
      });
    }

    return res.status(400).json({
      message: 'Can not get product',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server err Inveral',
    });
  }
};

///@@@@@ Find a product
const getProductById = async (req, res) => {
  const id = req.query.id;
  try {
    if (id) {
      const detail = await Product.findById(id);
      return res.json(detail);
    }

    return res.status(404).json({
      message: `Not find product`,
    });
  } catch (error) {
    throw new Error(error);
  }
};

///@@@@@ search a Item

const getProductByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const product = await searchItem(name);

      if (product.length > 0) {
        return res.status(200).json({ product });
      } else return res.status(404).json({ message: 'not found' });
    } else return res.status(400).json('name Invalid');
  } catch (error) {
    return res.status(500).json({
      message: 'Server err Inveral',
      error,
    });
  }
};
module.exports = { getAllProduct, getProductById, getProductByName };
