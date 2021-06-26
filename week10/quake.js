import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // array to store the list of quakes
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 500) {
  console.log(position.lat);
  this._quakes = await getJSON(
      this.baseUrl +
        `&starttime=2019-01-01&endtime=2021-03-02&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
    );
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}