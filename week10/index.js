import { getJSON, getLocation } from './utilities.js';
import QuakesController from './quakesController.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

const parent = document.querySelector('ul');
const quakeControl = new QuakesController(parent);
window.addEventListener('load', quakeControl.init());