class authErr {
  InvalidAcc() {
    return res.status(400).json({
      message: 'username or Password is missing',
    });
  }
}
module.exports = new authErr();
