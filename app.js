const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// app.use -> Use for executing all requests coming

// 1. use vs route
// 2. options - our own / express / third party
app.use([authorize, logger]);

// req => middleware => res
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  console.log(req.user);
  res.send("Products");
});

app.listen(5000, () => {
  console.log("Server is running");
});
