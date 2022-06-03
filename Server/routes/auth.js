const express = require('express');
const login = require('../controller/login');
const register = require('../controller/register');

const router = express.Router();
//@@ register
router.post('/register', register);

// @loggin
router.post('/login', login);

module.exports = router;
