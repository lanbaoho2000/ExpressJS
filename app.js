const express = require("express");
const app = express();
const { products, people } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    console.log({ id, name, image });
    return { id, name, image };
  });
  res.json(newProducts);
});

// params
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  res.json(singleProduct);
});

// params
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

// query string
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(202).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
  res.send("hello world");
});
app.listen(5000, () => {
  console.log("Server is running");
});
