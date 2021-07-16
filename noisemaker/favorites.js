export const favorites = [];
import { readFromLS, writeToLS, removeFromLS } from "../week6/to-do-list/ls.js";
import { renderAllFavorites } from "./view.js";
import { toggleEl } from "./controller.js";

const key = "favoritesArray";

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
    //let list = readFromLS(key);
    let list = JSON.parse(localStorage.getItem(key));
    renderAllFavorites(list); 
    }
    addFavorites(element, fave) {
        if (localStorage.getItem('favoritesArray') !== null) {
            const oldList = localStorage.getItem('favoritesArray');
            if (!oldList.includes(fave)) {
                writeToLS(key, fave);
                toggleHeart(element, fave);
                toggleEl();
            }
        } else {
            //const favorites = [];
            favorites.push(fave);
            localStorage.setItem(key, JSON.stringify(favorites));
            toggleHeart(element, fave);
            toggleEl();
        }
    }
    removeFavorites(element, fave) {
        //removeFromLS(key, fave);
        let oldList = JSON.parse(localStorage.getItem(key));
        const index = oldList.indexOf(fave);
        console.log(index);
        oldList.splice(index);
        localStorage.setItem(key, JSON.stringify(oldList));
        toggleHeart(element, fave);
        //removeEl();
    }

}

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