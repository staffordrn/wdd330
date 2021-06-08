import { commentList } from './comments-model.js';
import CommentController from './comments-controller.js';

export function renderRandomComments(commentList) {
    if (commentList !== null) {
        console.log(commentList);
        let displayDiv = document.getElementById('comments');
        //let listItem = '';
        const randomIndex = Math.floor(Math.random() * commentList.length);
        //get random item
        const item = commentList[randomIndex];
        let i;
        for (i = 0; i < 4; i++) {
            const container = document.createElement('div');
            container.classList.add('hikeComment');
            const hikeHeading = document.createElement('h3');
            const hikeComment = document.createElement('p');
            hikeHeading.innerHTML = `${commentList[i].name}`;
            hikeComment.innerHTML = `${commentList[i].content}`;
            container.appendChild(hikeHeading);
            container.appendChild(hikeComment);
            displayDiv.appendChild(container);
            i++;
        }
    }
}

export function renderHikeComments(name) {
    const hikeCmts = commentList.filter(cmt => cmt.name == name);
    let commentDiv = document.getElementById('comments');
    hikeCmts.forEach(listCreate);
    function listCreate(hikes, i) {
        const container = document.createElement('div');
        const hikeHeading = document.createElement('h3');
        const hikeContent = document.createElement('p');
        hikeHeading.innerHTML = `${hikes.date}`
        hikeContent.innerHTML = `${hikes.content}`;
        container.classList.add('comment');
        container.appendChild(hikeHeading);
        container.appendChild(hikeContent);
        commentDiv.appendChild(container);
        i++;
    }
  //create event listeners
  //onTouch();
  //onClick();
}

function onTouch() { 
    const comment = new CommentController();
    document.querySelector('input').addEventListener('touchend', comment.addComment);
}

function onClick() {
    const comment = new CommentController();
    document.querySelector('input').addEventListener('click', comment.addComment);
}