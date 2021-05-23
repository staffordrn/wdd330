import HikesController from './hikes-controller.js';
//on load grab the array and insert it into the page
const hikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  hikesController.showHikeList();
  hikesController.addListeners(); 
});