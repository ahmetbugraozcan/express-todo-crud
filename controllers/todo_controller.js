const Todo = require("../models/todo_model.js");

function create(req, res) {
  console.log("request body is ", req.body);
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  todo.save((err, todo) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Todo.",
      });
    } else {
      res.send({
        message: "Todo created successfully",
        todo,
      });
    }
  });
}

function findAll(req, res) {
  // Todo.find({ title: "title1" }
  Todo.find((err, todos) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving todos.",
      });
    } else {
      res.send(todos);
    }
  });
}

function findOne(req, res) {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).send({
        errorMesssage:
          err.message || "Some error occurred while retrieving todo.",
        message: "Todo not found with id " + req.params.id,
      });
    } else {
      if (todo) {
        res.send(todo);
      } else {
        res.status(404).send({
          message: "Todo not found with id " + req.params.id,
        });
      }
    }
  });
}

function update(req, res) {
  Todo.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
    },
    { new: true },
    (err, todo) => {
      if (err) {
        res.status(500).send({
          errorMesssage:
            err.message || "Some error occurred while retrieving todo.",
        });
      } else {
        if (todo) {
          res.send(todo);
        } else {
          res.status(404).send({
            message: "Todo not found with id " + req.params.id,
          });
        }
      }
    }
  );
}

function deleteTodo(req, res) {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) {
      res.status(500).send({
        errorMesssage:
          err.message || "Some error occurred while retrieving todo.",
      });
    } else {
      if (todo) {
        res.send({
          message: "Todo deleted successfully",
        });
      } else {
        res.status(404).send({
          message: "Todo not found with id " + req.params.id,
        });
      }
    }
  });
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteTodo,
};
