const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const {connectDB} = require('./config/config')
connectDB();

const productRoutes = require('./routes/productRoutes')


app.use(bodyParser.json());

app.use('/', productRoutes)



app.listen(5000, () => {
  console.log("Listening on port 5000");
});

