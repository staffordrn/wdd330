import { sounds } from './model.js';
import { playing } from './controller.js';
import { renderWithFavorites } from './view.js';
import { displayButtons } from "./view.js";
import Favorite from "./favorites.js";

const fave = new Favorite();
// render the list with or without favorites
const list = JSON.parse(localStorage.getItem("favoritesArray"));
if (localStorage.getItem("favoritesArray") !== null) {
  renderWithFavorites(list);
} else {
  displayButtons(list);
}
//function to create the audio elements
const element = document.getElementById('sound-list');
sounds.forEach(listCreate);
    function listCreate(sound) {
      let audio = document.createElement('audio');
      audio.setAttribute("data-sound", sound.name);
      audio.setAttribute("src", sound.url)
      element.appendChild(audio);
    }

//event listener for listing favorites only
document.getElementById('heartBtn').addEventListener('click', event => {
  fave.listFaves();
});

// event listener to play sounds on button click
document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target.parentElement;
    const sound = element.dataset.sound;
    playing(sound);
  });
});

// event listener for adding favorites

Array.from(document.getElementsByClassName("faveBtn")).forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target;
    const parentElement = event.target.parentElement;
    const sound = parentElement.dataset.sound;
    fave.addFavorites(element, sound);
    //addHeart(element, sound);
  });
});

//event listener for removing existing favorites

// *** REMOVE THIS EVENT LISTENER FROM MAIN.JS ***

Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
/* item.removeEventListener('click', event => {
    const element = event.target;
    const parentElement = event.target.parentElement;
    const sound = parentElement.dataset.sound;
    fave.addFavorites(element, sound);
  }); */
  item.addEventListener('click', event => {
    const element = event.target;
    const parentElement = event.target.parentElement;
    const sound = parentElement.dataset.sound;
    fave.removeFavorites(element, sound);
  });
});





/* Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
    item.addEventListener('click', event => {
      const element = event.target;
      element.classList.remove('faveToggle'); */


//add event listener to remove favorites <---------- put this inside addHeart function
/* Array.from(document.getElementsByClassName("favorite")).forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target;
    const key = element.dataset.key;
    //removeFavoritesFromLS(key);
    element.classList.add('faveBtn');
    element.classList.remove('faveToggle');
  });
}); */
//variables
/* const boxes = document.getElementsByClassName('btn');
const pads = document.getElementsByTagName('audio'); */
//const counter = [];



//drum player function - now in controller
/* function playing(key) {
    //const drum = new Audio();      
    for (let i = 0; i < pads.length; i++) {
        let k = pads[i].dataset.key;
        if (k == key) {
          if (pads[i].paused) {
            pads[i].play()
            boxes[i].classList.add('playing');
          } else {
          pads[i].currentTime = 0;    
          }
        }  
        let timeout = Math.floor(pads[i].duration * 1000);
        setTimeout(() => {
            // Remove playing class once track is complete
            boxes[i].classList.remove("playing");
          }, timeout);
    }
} */
 

/* document.addEventListener('keydown', keyPress)
function keyPress(e) {
    let k = e.keyCode;
    playing(k); 
} */