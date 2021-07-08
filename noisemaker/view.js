import { sounds } from './model.js'




//function for displayinh the buttons
export function displayButtons() {
    const el = document.getElementById('container');
    sounds.forEach(buttonCreate);
    function buttonCreate(sound) {
        let title = document.createElement('span');
        let div = document.createElement('div');
        div.setAttribute("data-key", sound.name);
        div.setAttribute("class", "btn")
        title.setAttribute("class", "title");
        title.innerHTML = sound.title;
        //div.innerHTML = sound.title;
        div.appendChild(title);
        el.appendChild(div);
        //el.appendChild(title);
    }
}