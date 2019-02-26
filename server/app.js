const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("./model/todo.model");
mongoose
  .connect("mongodb://localhost:27017/presentationtoDoApp", {
    useNewUrlParser: true
  })
  .then(() => console.log("db connected"))
  .catch(console.log);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/todo", require("./routes/todo.routes"));

app.use((req, res, next) => {
  next("router not found.");
});

app.use((error, req, res, next) => {
  res.status(404).json({
    error: [error]
  });
});

app.listen(8080, () => console.log("server started!"));
