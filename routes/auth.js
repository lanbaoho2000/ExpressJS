const express = require("express");
const router = express.Router();
let { people } = require("../data");

router.post("/", (req, res) => {
  const { name } = req.body;
  const person = people.find((person) => person.name === name);
  if (person) {
    return res.status(200).send(`Welcome ${name}`);
  } else res.status(401).send("Please provide credentials");
});

module.exports = router;
