export const favorites = [];
import { readFromLS, writeToLS, removeFromLS } from "../week6/to-do-list/ls.js";
import { renderAllFavorites, renderWithFavorites } from "./view.js";

const key = "favoritesArray";
//const fBtn = Array.from(document.getElementsByClassName("faveBtn"));
//const faved = Array.from(document.getElementsByClassName("faveToggle"));

export default class Favorite {
    constructor(sound) {
        this.sound = sound;   
    }

    /* listFaves(key) {
    document.getElementById('container').innerHTML = '';
    let list = JSON.parse(localStorage.getItem(key));
        renderAllFavorites(list); 
    } */
    listFaves() {
    document.getElementById('container').innerHTML = '';
    const heartBtn = document.getElementById('heartBtn');
    //heartBtn.classList.toggle('allFaves');
    heartBtn.classList.add('allFaves');
    let list = JSON.parse(localStorage.getItem(key));
    renderAllFavorites(list);
    heartBtn.removeEventListener('click', event => {
      this.listFaves();
    });
    heartBtn.addEventListener('click', event => {
      //heartBtn.classList.toggle('allFaves');
      heartBtn.classList.remove('allFaves');
      renderWithFavorites(list);
    });
    }
    addFavorites(element, fave) {
        if (localStorage.getItem('favoritesArray') !== null) {
            const oldList = localStorage.getItem('favoritesArray');
            if (!oldList.includes(fave)) {
                writeToLS(key, fave);
                toggleHeart(element, fave);
                toggleEventListenerOff();
            }
        } else {
            //const favorites = [];
            favorites.push(fave);
            localStorage.setItem(key, JSON.stringify(favorites));
            toggleHeart(element, fave);
            toggleEventListenerOff();
        }
    }
    removeFavorites(element, fave) {
        //removeFromLS(key, fave);
        let oldList = JSON.parse(localStorage.getItem(key));
        const index = oldList.indexOf(fave);
        oldList.splice(index);
        localStorage.setItem(key, JSON.stringify(oldList));
        toggleHeart(element, fave);
        toggleEventListenerOn();
        
    }

}
const fave = new Favorite();
//function to toggle hearts
export function toggleHeart(element, fave) {
  if (element.parentElement.dataset.sound == fave) {
      element.classList.toggle('faveToggle');
      /* Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
      item.addEventListener('click', event => {
        const element = event.target;
        element.classList.toggle('faveToggle');
      });
    }); */
  }
}

function toggleEventListenerOff() {
  // remove event listener
  Array.from(document.getElementsByClassName("faveBtn")).forEach(item => {
    item.removeEventListener('click', event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.addFavorites(element, sound);
    });
  });
  // add event listener
  Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
    item.addEventListener('click', event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.removeFavorites(element, sound);
    });
  });
}
function toggleEventListenerOn() {
  Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
    item.removeEventListener('click', event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.removeFavorites(element, sound);
    });
  });
  Array.from(document.getElementsByClassName("faveBtn")).forEach(item => {
    item.addEventListener('click', event => {
      const element = event.target;
      const parentElement = event.target.parentElement;
      const sound = parentElement.dataset.sound;
      fave.addFavorites(element, sound);
    });
  });
}
//function to add hearts
/* export function addHeart(element, fave) {
  if (element.parentElement.dataset.sound == fave) {
      element.classList.add('faveToggle');
      Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
      item.addEventListener('click', event => {
        const element = event.target;
        element.classList.remove('faveToggle');
      });
    });
  }
}

//function to remove hearts
export function removeHeart(element, fave) {
  if (element.parentElement.dataset.sound == fave) {
      element.classList.remove('faveToggle');
      Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
      item.removeEventListener('click', event => {
        const element = event.target;
        element.classList.add('faveToggle');
      });  
      item.addEventListener('click', event => {
        const sound = element.parentElement.dataset.sound;
        fave.addFavorites(element, sound);
      });
    });
  }
} */


/* const fave = new Favorite();
const faveBtns= Array.from(document.getElementsByClassName("faveBtn"));

faveBtns.forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target;
    const parentElement = event.target.parentElement;
    const sound = parentElement.dataset.sound;
    fave.addFavorites(element, sound);
    //addHeart(element, sound);
  });
});
function addEl() {
}
function removeEl() {
}
//event listener for removing existing favorites
Array.from(document.getElementsByClassName("faveToggle")).forEach(item => {
  item.addEventListener('click', event => {
    const element = event.target;
    const parentElement = event.target.parentElement;
    const sound = parentElement.dataset.sound;
    fave.removeFavorites(element, sound);
  });
}); */