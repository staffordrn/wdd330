//get a list of ships from the api

const swapiurl = "https://swapi.dev/api/starships";
  
// Defining async function
async function getSwapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    display(data);
}
// Calling that async function
getSwapi(swapiurl);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function display(data) {
    let app = document.getElementById('app-body');
    app.innerHTML = ''
    const list = data.results;
    let i = 0;
    list.forEach(loop);
    function loop(ship) {
        //create div with class
        let div = document.createElement('div');
        div.setAttribute('class', 'ship');
        //create details button
        let detailBtn = document.createElement('button');
        detailBtn.innerHTML = 'Show Details';
        detailBtn.setAttribute('id', `s${i}`);
        //create text node
        let disp = 
            `<h3>${ship.name}</h3>
            <ul class="hide" id="ship${i}">
                <li>Model: ${ship.model}</li>
                <li>Manufacturer: ${ship.manufacturer}</li>
                <li>Cost (in credits): ${ship.cost_in_credits}</li>
            </ul>`;
        //append elements to main display box
        div.innerHTML = disp;
        div.appendChild(detailBtn);
        app.appendChild(div);
        //event listeners
        addELs(detailBtn, i);  
        i++;      
    }
    npButton(data.next, data.previous);
}



/* function addEvents(){
  var elem = document.getElementsByClassName("triggerClass");
  for(var i=0; i < elem.length; i+=2){
    var k = i + 1;
    var boxa = elem[i].parentNode.id;
    var boxb = elem[k].parentNode.id;

//- edit ---------------------------|
    addEVs(btn);
  }
} */
//- adds function ----|
function addELs(btn, i){
  btn.addEventListener("touchend", () => {
            showDetails(i);}, false);
  btn.addEventListener("click", () => {
            showDetails(i);}, false);
}
//- end edit -----------------------|

//next & prev

function npButton(next, prev) {
    document.getElementById('buttons').innerHTML = '';
    const nbtn = document.createElement('button');
    const pbtn = document.createElement('button');
    nbtn.innerHTML = 'Next';
    pbtn.innerHTML = 'Previous';
    nbtn.addEventListener('touchend', () => {
    getSwapi(next);
    });
    nbtn.addEventListener('click', () => {
    getSwapi(next);
    });
    pbtn.addEventListener('touchend', () => {
    getSwapi(prev);
    });
    pbtn.addEventListener('click', () => {
    getSwapi(prev);
    });
    let btns = document.getElementById('buttons');
    btns.appendChild(pbtn);
    btns.appendChild(nbtn);
    return btns;
  }   
  function showDetails(i){
    let details = document.getElementById(`ship${i}`);
    details.classList.toggle("hide");
    let btn = document.getElementById(`s${i}`);
    if (btn.innerHTML === "Hide Details") {
        btn.innerHTML = "Show Details";
    } else {
        btn.innerHTML = "Hide Details";
    }
}
