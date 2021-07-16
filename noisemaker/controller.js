import Favorite from "./favorites.js";
//import { displayButtons } from "./view.js";
//import { addHeart } from "./favorites.js"

//variables
const buttons = document.getElementsByClassName('btn');
const pads = document.getElementsByTagName('audio');
const fave = new Favorite();
const fBtn = Array.from(document.getElementsByClassName("faveBtn"));
const faved = Array.from(document.getElementsByClassName("faveToggle"));


//Create audio context
/* const AudioContext = window.AudioContext || window.webkitAudioContext; */
const audioCtx = new AudioContext();
//document.querySelector("audio").volume = 0.5;
const volumeControl = document.querySelector('#vol');
const gainNode = audioCtx.createGain();
//const audioElement = document.querySelector('audio');
//const track = audioCtx.createMediaElementSource(pads[i]);

//function for playing the sounds
export function playing(sound) {
  for (let i = 0; i < pads.length; i++) {
      let snd = pads[i].dataset.sound;
        if (snd == sound) {
            //pads[i].play();
            togglePlay(i);
            buttons[i].classList.add('playing');
          } else {
            pads[i].pause();
            buttons[i].classList.remove('playing');
            pads[i].currentTime = 0;    
          }
        // Remove playing class once track is complete
        let timeout = Math.floor(pads[i].duration * 1000);
        setTimeout(() => {
            buttons[i].classList.remove("playing");
          }, timeout);
  }
}

function togglePlay(i) {
  const track = audioCtx.createMediaElementSource(pads[i]);
  track.connect(gainNode).connect(audioCtx.destination);
  return pads[i].paused ? pads[i].play() : pads[i].pause(), pads[i].currentTime = 0, buttons[i].classList.remove('playing');
};

//Volume controls
//declare variables


//const source = audioCtx.
//audioCtx.connect(gainNode).connect(audioContext.destination);


/* --- Event Listeners --- */

// Volume Control Listener
volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false);



export function toggleEl() {
  faved.forEach(item => {
    item.addEventListener('click')});/* , event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.removeFavorites(element, sound);
    });
  }); */
  fBtn.forEach(item => {
    item.removeEventListener('click')});/* , event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.addFavorites(element, sound); 
    });   
  });*/
}
/* export function removeEl() {
  faved.forEach(item => {
    item.removeEventListener('click', event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.removeFavorites(element, sound);
    });
  });
} */










//add event listener for favorites
/* const fave = new Favorite();
Array.from(document.getElementsByClassName("faveBtn")).forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target.parentElement;
    console.log(element);
    const sound = element.dataset.sound;
    console.log(sound);
    fave.addFavorites(sound);
    addHeart(element, sound);
  });
});


//add event listener to remove favorites <---------- put this inside addHeart function
Array.from(document.getElementsByClassName("favorite")).forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target;
    const key = element.dataset.key;
    //removeFavoritesFromLS(key);
    element.classList.add('faveBtn');
    element.classList.remove('faveToggle');
  });
}); */