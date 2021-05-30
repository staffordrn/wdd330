export const toDoList = [];
import { removeFromLS } from './ls.js';
import { renderTodoList } from './utilities.js';


export default class Todo {
    constructor(id, taskContent, completed) {
        this.id = id;
        this.taskContent = taskContent;
        this.completed = completed;   
    }
    listTodos(key) {
    document.getElementById('display').innerHTML = '';
    let list = JSON.parse(localStorage.getItem(key));
        renderTodoList(list); 
    }
    addTodo() {
        let task = document.getElementById('to-do').value;
        if (task !== '') {
            let key = 'tdList';
            saveTodo(task, key);
        } else {
            alert('Please enter a task');
        }
        //display the list
        //renderTodoList(task, key);
    }
}

export function saveTodo(task, key) {
    const todo = task;
    const id = Date.now(); //timestamp
    const completed = false; //boolean;
    let newTask = new Todo(id, todo, completed);
    let oldList = JSON.parse(localStorage.getItem(key));
    if (oldList !== null) {
        oldList.push(newTask);
        localStorage.setItem(key, JSON.stringify(oldList));
        newTask.listTodos(key);
    } else {
        const toDoList = [];
        toDoList.push(newTask);
        localStorage.setItem(key, JSON.stringify(toDoList));
        newTask.listTodos(key);
    }
    
}
export function completeTodos() {
    //this.parentNode.classList.toggle("completed");
    this.nextElementSibling.classList.toggle('completed')
    this.toggleAttribute("checked");   
}

export function removeTodos() {
    const done = document.getElementsByClassName('completed');
    let doneArray = [...done];
    doneArray.forEach(getContent);
    function getContent(item) {
        let content = item.innerHTML;
        console.log(content);
        removeFromLS(content, 'tdList');
    }
    
    
}

export function hideTodos() {
    let toggle = document.getElementsByClassName("completed");
    if (toggle.length !== 0) {btnChange();}
    [...toggle].forEach(item => {item.classList.toggle("hide")});
    function btnChange() {
        const button = document.getElementById("filter");
        if (button.innerHTML === "Hide Completed Tasks") {
            button.innerHTML = "Show Completed Tasks";
        } else {
            button.innerHTML = "Hide Completed Tasks";
        }
    }
}