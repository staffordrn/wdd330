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
  }

  showHikeDetails(hikeName) {
      const hikeListElement = document.getElementById("hikes");
      hikeListElement.innerHTML = "";
      console.log(hikeName);
      //get all of the hikes
      let hikeList = new HikeModel();
      let oneHike = hikeList.getHikeByName(hikeName);
      console.log(oneHike);
      //render the hikes in the view
      let hikeDetail = new HikesView(hikeListElement);
      hikeDetail.renderOneHikeFull(oneHike, hikeListElement);
  }
  
  addListeners() {
  const hikeArray = Array.from(this.element.children);
  //use current target to get the element that triggered the event
  //the e in the function is a reference for event
  console.log(hikeArray);
  hikeArray.forEach(item => item.addEventListener('click', event => {
    this.showHikeDetails(event.currentTarget.getAttribute('id'));}))
    //this.showHikeDetails('Teton Canyon');}))
  }
}