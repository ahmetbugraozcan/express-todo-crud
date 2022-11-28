const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todo_route.js");

const app = express();

// 127.0.0.1
mongoose.connect("mongodb://127.0.0.1:27017/bil4005", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("server started");
});
