const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    skipVersioning: true,
    timestamps: true
  }
);

mongoose.model("Todo", Todo);
