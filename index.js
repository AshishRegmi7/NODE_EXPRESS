const express = require("express");

const app = express();

//Printing Hello World using express 

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});
app.get("/ashish", (req, res) => {
  res.json({ msg: "Hello Ashish ji" });
});
app.get("/ashish/regmi", (req, res) => {
  res.json({ msg: "Hello Ashish Regmi ji" });
});

app.listen(8000, () => {
  console.log("application is running");
});
