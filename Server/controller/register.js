const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const authErr = require('../err/auth');

// @@@@register
const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    authErr.InvalidAcc();
  }

  try {
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.status(400).json({
        message: 'username already exsit ',
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const token = jwt.sign(username, '********');
    const newUser = new User({
      username,
      password: hashPassword,
    });

    await newUser.save();
    return res.json({
      message: 'register successfully',
      newUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Interval',
    });
  }
};

module.exports = register;
