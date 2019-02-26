const router = require("express").Router();
const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");

router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.json({
      todos
    });
  } catch (e) {
    next(e);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (title && title.length > 0 && content && content.length > 0) {
      const todo = await new Todo({
        title,
        content
      }).save();
      res.json({
        todo
      });
    } else {
      const e = new Error();
      e.message = "Invalid Data";
      throw e;
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json({
      todo
    });
  } catch (e) {
    next("Something went wrong");
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (title && title.length > 0 && content && content.length > 0) {
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        const e = new Error();
        e.message = "Invalid Data";
        throw e;
      }
      todo.title = title;
      todo.content = content;
      const t = await todo.save();
      res.json({
        todo: t
      });
    } else {
      const e = new Error();
      e.message = "Invalid Data";
      throw e;
    }
  } catch (e) {
    next(e);
  }
});

router.use((error, req, res, next) => {
  if (typeof error !== "string") {
    error = error.message || "Something went wrong";
  }
  res.status(400).json({
    error: [error]
  });
});

module.exports = router;
