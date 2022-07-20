const express = require("express");
const path = require("path");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth.js");

// static assets
app.use(express.static(path.join(__dirname, "public")));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is running");
});
