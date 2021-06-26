// Quake View handler
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    listElement.innerHTML = quakeList.features
    .map(quake => {
      return `<li data-id=${quake.id} class="quake">${quake.properties.title}, ${new Date(quake.properties.time)}`;
    })
    .join('');
  }
  renderQuake(quake, element) {
    const quakeProperties = Object.entries(quake.properties);
    element.innerHTML = quakeProperties
    .map(item => {
      if (item[0] === 'time' || item[0] === 'updated') {
          return `<li class="details">${item[0]}: ${new Date(item[1])}</li>`;
        } else return `<li class="details">${item[0]}: ${item[1]}</li>`;
      })
      .join('');
      
  }
}
    // Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
