const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const { connectDB } = require("./config/config");
connectDB();
var cors = require("cors");
const productRoutes = require("./routes/productRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/", productRoutes);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
