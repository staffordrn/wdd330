import HikesController from './hikes-controller.js';
import CommentsController from './comments-controller.js'
import { commentList } from './comments-model.js';
//on load grab the array and insert it into the page
const hikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  hikesController.showHikeList();
  hikesController.addListeners(); 
});
const commentsController = new CommentsController();
  window.addEventListener('load', () => {
    commentsController.showRandomComments(commentList);
  });