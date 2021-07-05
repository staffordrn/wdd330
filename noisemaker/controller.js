import { displayButtons } from "./view.js";

displayButtons();
const boxes = document.getElementsByClassName('btn');
const pads = document.getElementsByTagName('audio');




//function for playing the sounds
export function playing(key) {  
    for (let i = 0; i < pads.length; i++) {
        let k = pads[i].dataset.key;
        if (k == key) {
          if (pads[i].paused) {
            pads[i].play()
            boxes[i].classList.add('playing');
          } else {
          pads[i].pause()
          boxes[i].classList.remove('playing');
          pads[i].currentTime = 0;    
          }
        }  
        let timeout = Math.floor(pads[i].duration * 1000);
        setTimeout(() => {
            // Remove playing class once track is complete
            boxes[i].classList.remove("playing");
          }, timeout);
    }
}
 