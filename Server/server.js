const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routeApp = require('./routes/index');
const connectDb = require('./config/connectDb');

const app = express();
connectDb();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
routeApp(app);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
