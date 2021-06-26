/* fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data)); */




export function getJSON(url) {
  return fetch(url) 
    .then(function(response) {
        if(!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json(); 
        }
    }) 
    .catch(function(error) {
    console.log(error);
  });
  
}

/* getJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02')
  .then(data => {
    console.log(data); 
  }); */

export const getLocation =  function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}