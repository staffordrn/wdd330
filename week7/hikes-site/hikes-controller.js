import { renderHikeComments } from './comments-view.js';
import HikeModel from './hike-model.js';
import HikesView from './hikes-view.js';
//import * as views from './hikes.view.js';

export default class HikesController {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

    showHikeList() {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        //get all of the hikes
        let hikeList = new HikeModel();
        let list = hikeList.getAllHikes();
        //render the hikes in the view
        let hikesView = new HikesView(hikeListElement);
        hikesView.renderHikeList(list, hikeListElement);
        this.addListeners();
    }

    showHikeDetails(hikeName) {
        const hikeListElement = document.getElementById("hikes");
        hikeListElement.innerHTML = "";
        //get all of the hikes
        let hikeList = new HikeModel();
        let oneHike = hikeList.getHikeByName(hikeName);
        //render the hikes in the view
        let hikeDetail = new HikesView(hikeListElement);
        hikeDetail.renderOneHikeFull(oneHike, hikeListElement);
        const commentForm = new HikesView;
        commentForm.renderForm();
        const backBtn = document.createElement('button');
        this.backButton();;
        renderHikeComments(hikeName);
    }
  
    addListeners() {
    const hikeArray = Array.from(this.element.children);
    //use current target to get the element that triggered the event
    //the e in the function is a reference for event
    hikeArray.forEach(item => item.addEventListener('click', event => {
    //console.log(event.currentTarget.getElementsByClassName("hike-info")[0].id);
      this.showHikeDetails(event.currentTarget.getElementsByClassName("hike-info")[0].id);}))
      //this.showHikeDetails(event.currentTarget.dataset.name);}))
      //this.showHikeDetails('Teton Canyon');}))
    }

    backButton() {
      const backBtn = document.createElement('button');
      backBtn.innerHTML = '&lt;- Return to Hikes List';
      backBtn.addEventListener('touchend', () => {
      this.showHikeList();
      })
      backBtn.addEventListener('click', () => {
      this.showHikeList();
      });
      backBtn.classList.add('hidden');
      let bb = document.getElementById('back-button');
      bb.appendChild(backBtn);
      //this.element.before(backBtn);
      return backBtn;
  }
}
