const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const persons = ([ ]);
  
app.get("/products", function (req, res) {
  res.json({
    data: persons,
  });
});

app.post("/items", function (req, res, next) {
  res.json(req.body);
  persons.push(req.body);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
