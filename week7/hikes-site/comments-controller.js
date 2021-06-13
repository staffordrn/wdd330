//import setComment from './comments-model.js';
//import { commentList } from './comments-model.js';
import { renderRandomComments } from './comments-view.js'

export const hikeComments = [];

export default class CommentController {
  constructor(name, content) {
    this.name = name,
    this.date = new Date(),
    this.content = content
    };
  addComment(name, content, key) {
    let cmt = document.getElementById('input').value;
            if (task !== '') {
                let key = 'tdList';
                let clear = document.getElementById('to-do');
                clear.value = '';
                saveTodo(task, key);
            } else {
                alert('Please enter a task');
            }
    const hike = name;
    const date = Date.now(); //timestamp
    const comment = content;
    let newComment = new CommentController(hike, date, comment);
    SaveComment(newComment, key);
  }
  showRandomComments(commentList) {
    document.getElementById('comments').innerHTML = '';
    //let commentList = JSON.parse(localStorage.getItem(key));
    renderRandomComments(commentList); 
    }
 /*  addComment(name, content, key) {
    
        if (oldList !== null) {
            oldList.push(newTask);
            localStorage.setItem(key, JSON.stringify(oldList));
            newTask.listTodos(key);
        } else {
            const toDoList = [];
            toDoList.push(newTask);
            localStorage.setItem(key, JSON.stringify(toDoList));
            newTask.listTodos(key);
        } */
}