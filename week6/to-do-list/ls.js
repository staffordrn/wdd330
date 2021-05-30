import Todo from './todos.js';

// function to show a list of tasks
// read a value from localStorage
const toDoList = localStorage.getItem('todoArray');

// parse JSON string to object
const listObj = JSON.parse(toDoList);
const tasks = JSON.parse(localStorage.getItem('todoArray'))


/**
 * read a value from local storage and parse it as JSON
 * @param  {string} key The key under which the value is stored under in LS
  * @return {array}     The value as an array of objects
 */
export function readFromLS(key) { 
    let list = JSON.parse(localStorage(key));
    return list;
}
/**
 * write an array of objects to local storage under the provided key
 * @param  {string} key The key under which the value is stored under in LS
* @param {array} data The information to be stored as an array of objects. Must be serialized.
 
 */
export function writeToLS(key, task) {
    let oldList = JSON.parse(localStorage.getItem(key));
    let newItem = task;
    oldList.push(newItem);
    localStorage.setItem(key, JSON.stringify(oldList));
}
export function removeFromLS(key) {
    let oldList = JSON.parse(localStorage.getItem(key));
    //let index = oldList.taskContent.indexOf(done);
    oldList.forEach(getCompleted);
    function getCompleted(task, i) {
        if (task.completed == true) {
            oldList.splice([i], 1);
        }
    }
    localStorage.setItem(key, JSON.stringify(oldList));
}
export function setCompleteLS(done, key) {
    let oldList = JSON.parse(localStorage.getItem(key));
    oldList.forEach(setCompleted);
    function setCompleted(task) {
        if (task.taskContent == done) {
            task.completed = true;
        }
    }
    localStorage.setItem(key, JSON.stringify(oldList));
}