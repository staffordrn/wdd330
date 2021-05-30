import { completeTodos } from './todos.js';

// helper functions
export function renderTodoList(list) {
    if (list !== null) {
        let displayDiv = document.getElementById('display');
        //let listItem = '';
        list.forEach(listCreate);
        function listCreate(todoItem, i) {
            const container = document.createElement('span');
            const input = document.createElement('input');
            const taskContent = document.createElement('p');
            input.type = 'checkbox';
            input.className = 'checkbox';
            input.classList.add(`task${i}`);
            taskContent.innerHTML += `${todoItem.taskContent}`;
            taskContent.className = `task${i}`;
            container.appendChild(input);
            container.appendChild(taskContent);
            displayDiv.appendChild(container);
            i++;
        }
    }
    //create event listeners
    onTouch();
    onClick();
}
function onTouch() { 
    document.querySelectorAll('input.checkbox').forEach(item => {item.addEventListener('touchend', completeTodos)});
}

function onClick() {
    document.querySelectorAll('input.checkbox').forEach(item => {item.addEventListener('click', completeTodos)});
}
