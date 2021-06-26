import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    //this.parentElement = document.querySelector(this.parent);
    this.parentElement = this.parent;
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        const posFull = await getLocation();
        this.position.lat = posFull.coords.latitude;
        this.position.lon = posFull.coords.longitude;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius) {
    // this method connects the model and views
    //set loading message
    this.parentElement.innerHTML = `<li class="loading">Loading...</li>`;
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
    this.parentElement.addEventListener('click', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    const quake = this.quakes.getQuakeById(quakeId);
    this.quakesView.renderQuake(quake, this.parentElement);
    this.backButton();
   
  }
  backButton() {
      const backBtn = document.createElement('button');
      backBtn.innerHTML = 'Return to Quakes List';
      backBtn.addEventListener('touchend', () => {
      quakes.getEarthQuakesByRadius();
      })
      backBtn.addEventListener('click', () => {
      this.quakes.getEarthQuakesByRadius();
      });
      backBtn.classList.add('hidden');
      let bb = document.getElementById('back-button');
      bb.appendChild(backBtn);
      //this.element.before(backBtn);
      return backBtn;
  }
}
