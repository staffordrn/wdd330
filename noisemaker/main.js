//event listeners
document.querySelectorAll('.btn').forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target.parentElement;
    const key = element.dataset.key;
    console.log(key);
    playing(key);
  });
  /* item.addEventListener('keydown', event => {
    const el = event.target.parentElement;
    const k = el.dataset.key;
    playing(k); 

  }) */
});

//variables
const boxes = document.getElementsByClassName('btn');
const pads = document.getElementsByTagName('audio');
//const counter = [];



//drum player function
function playing(key) {
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
}
 

document.addEventListener('keydown', keyPress)
function keyPress(e) {
    let k = e.keyCode;
    playing(k); 
}