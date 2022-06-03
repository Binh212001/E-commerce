const mongoose = require('mongoose');

const connect = async () => {
  await mongoose
    .connect(
      'mongodb+srv://Binh212002:Binh0987***867@e-commerce.wouaxvj.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('connected');
    })
    .catch((err) => {
      console.log('Err connect Db:' + err);
    });
};

module.exports = connect;
