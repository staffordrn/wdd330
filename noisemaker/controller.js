import { displayButtons } from "./view.js";

displayButtons();
const buttons = document.getElementsByClassName('btn');
const pads = document.getElementsByTagName('audio');


//Create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
let volControl = audioCtx.createGain();

//function for playing the sounds
export function playing(key) {  
  for (let i = 0; i < pads.length; i++) {
      let k = pads[i].dataset.key;
        if (k == key) {
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
  return pads[i].paused ? pads[i].play() : pads[i].pause(), pads[i].currentTime = 0, buttons[i].classList.remove('playing');;
};