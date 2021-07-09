import { sounds } from './model.js'

//function for displayinh the buttons
export function displayButtons() {
    const el = document.getElementById('container');
    sounds.forEach(buttonCreate);
    function buttonCreate(sound) {
        let div = document.createElement('div')
        let title = document.createElement('span');
        let btn = document.createElement('div');
        //let playBtn = document.createElement('span');
        div.setAttribute("class", "box");
        btn.setAttribute("data-key", sound.name);
        btn.setAttribute("class", "btn")
        // playBtn.setAttribute("class", "playBtn fa fa-5x")
        // playBtn.innerHTML = '&#xf04b';
        title.setAttribute("class", "title");
        title.innerHTML = sound.title;
        //div.innerHTML = sound.title;
        //btn.appendChild(playBtn);
        div.appendChild(btn);
        div.appendChild(title);
        el.appendChild(div);
        //el.appendChild(title2);
        }
    }
    /* function buttonCreate(sound) {
        let title = document.createElement('span');
        let btn = document.createElement('div');
        btn.setAttribute("data-key", sound.name);
        btn.setAttribute("class", "btn")
        
        title.setAttribute("class", "title");
        title.innerHTML = sound.title;
        //div.innerHTML = sound.title;
        btn.appendChild(title);
        el.appendChild(btn);
        //el.appendChild(title2);
    } */