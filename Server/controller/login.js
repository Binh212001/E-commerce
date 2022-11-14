const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authErr = require('../err/auth');

// @@@login
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    authErr.InvalidAcc();
  }

  try {
    const oldUser = await User.findOne({ username });
    if (!oldUser) {
      return res.status(400).json({
        message: 'username or password invalid',
      });
    }

    const isvalidatePassword = await bcrypt.compare(password, oldUser.password);

    if (!isvalidatePassword) {
      return res.status(400).json({
        message: 'username or password invalid',
      });
    }
    const token = jwt.sign({ username }, '********');
    return res.json({
      _id: oldUser._id,
      username: oldUser.username,
      token,
      message: 'SignIn successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Interval',
    });
  }
};

module.exports = login;
