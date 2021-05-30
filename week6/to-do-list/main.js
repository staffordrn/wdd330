// import classes
import Todo from './todos.js';
import { completeTodos , removeTodos , hideTodos } from './todos.js';

const todo = new Todo();
window.addEventListener('load', todo.listTodos('tdList'));
document.getElementById("submit-btn").addEventListener("click", todo.addTodo);

//touch event listeners
document.querySelectorAll('input.checkbox').forEach(item => {item.addEventListener('touchend', completeTodos)});
document.querySelector('#remove').addEventListener('touchend', removeTodos);
document.querySelector('#filter').addEventListener('touchend', hideTodos);

//click event listeners
document.querySelectorAll('input.checkbox').forEach(item => {item.addEventListener('click', completeTodos)});
document.querySelector('#remove').addEventListener('click', removeTodos);
document.querySelector('#filter').addEventListener('click', hideTodos);
