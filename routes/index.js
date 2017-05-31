'use strict';

var express = require('express');
var router = express.Router();

/* Data storage (in memory not persistent) */
var data = {
  todos: [
    {
      title: 'Mow lawn',
      note: 'Should be done by 13th may.'
    },
    {
      title: 'Wash car',
      note: 'Use MkUiars Wax!'
    },
    {
      title: 'Buy groceries',
      note: 'Apples, Bananas and some tomatoes.'
    }
  ]
};

/* GET Home Page */
router.get('/', function(req, res) {
  res.render('index', {});
});

// GET
router.get('/todos', function(req, res) {
  var todos = [];
  data.todos.forEach(function(todo, i) {
    todos.push({
      id: i,
      title: todo.title,
      note: todo.note
    });
  });
  res.json({
    todos: todos
  });
});

// GET BY ID
router.get('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    res.json({
      todo: data.todos[id]
    });
  } else {
    res.json(false);
  }
});

// POST
router.post('/todo', function(req, res) {
  data.todos.push(req.body);
  res.json(req.body);
});

// PUT
router.put('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    data.todos[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
});

// DELETE
router.delete('/todo/:id', function(req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.todos.length) {
    data.todos.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
});

module.exports = router;
