import { sounds } from './model.js'

//function for displayinh the buttons
export function displayButtons(list) {
    const el = document.getElementById('container');
    sounds.forEach(buttonCreate);
    function buttonCreate(sound) {
        let div = document.createElement('div')
        let title = document.createElement('span');
        let btn = document.createElement('div');
        let fave = document.createElement('span');
        div.setAttribute("class", "box");
        div.setAttribute("data-sound", sound.name);
        btn.setAttribute("class", "btn")
        fave.setAttribute("class", "faveBtn fa fa-3x");
        title.setAttribute("class", "title");
        title.innerHTML = sound.title;
        fave.innerHTML = "&#xf004";
        div.appendChild(btn);
        div.appendChild(title);
        div.appendChild(fave);
        el.appendChild(div);
        }
    }

//function to render the favorites only
export function renderAllFavorites(list) {
    const el = document.getElementById('container');
    //get all favorites from localStorage
    list.forEach(btnCreate);
    function btnCreate(item) {
        for (let i = 0; i < sounds.length; i++ ) {
            if (sounds[i].name == item) {
                let div = document.createElement('div')
                let title = document.createElement('span');
                let btn = document.createElement('div');
                let fave = document.createElement('span');
                div.setAttribute("class", "box");
                div.setAttribute("data-sound", sounds[i].name);
                btn.setAttribute("class", "btn")
                fave.setAttribute("class", "faveBtn fa fa-3x faveToggle");
                title.setAttribute("class", "title");
                title.innerHTML = sounds[i].title;
                fave.innerHTML = "&#xf004";
                div.appendChild(btn);
                div.appendChild(title);
                div.appendChild(fave);
                el.appendChild(div);
            }
        }
        
    }
}
    
export function renderWithFavorites(list) {
    const el = document.getElementById('container');
    //get all favorites from localStorage
    sounds.forEach(btnCreate);
    function btnCreate(sound) {
            let div = document.createElement('div')
            let title = document.createElement('span');
            let btn = document.createElement('div');
            let fave = document.createElement('span');
            div.setAttribute("class", "box");
            div.setAttribute("data-sound", sound.name);
            btn.setAttribute("class", "btn")
            fave.setAttribute("class", "faveBtn fa fa-3x");
            title.setAttribute("class", "title");
            title.innerHTML = sound.title;
            fave.innerHTML = "&#xf004";
            div.appendChild(btn);
            div.appendChild(title);
            div.appendChild(fave);
            el.appendChild(div);
            for (let i = 0; i < list.length; i++ ) {
                if (sound.name == list[i]) {
                    fave.setAttribute("class", "faveBtn fa fa-3x faveToggle");
                }
            
        }
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