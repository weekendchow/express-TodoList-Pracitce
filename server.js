const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

let todos = [];
let count = todos.length

// view engine setup
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.ejs', { todos: todos });
});

app.post('/todo', (req,res) => {
  count += 1;
  let newTodo = {id:count, title:req.body.todo}
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  if(todos.filter(todo => todo.id == id).length !== 0){
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).send();
  }else{
    res.status(404).send();
  }
});

app.listen(3000, () => {
  console.log('heard on 3000')
})

module.exports = app;
