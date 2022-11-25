const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todo_route.js");

const app = express();

mongoose.connect("mongodb://localhost:27017/bil4005", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(router);

app.listen(27017, () => {
  console.log("server started");
});
