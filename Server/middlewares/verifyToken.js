const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization');

  const token = authHeader && authHeader.split(' ')[1];

  if (token) {
    const decode = jwt.verify(token, '********');

    if (decode) {
      next();
    } else {
      res.status(400).json({
        message: 'Token Invalid',
      });
    }
  }
};

module.exports = verifyToken;
