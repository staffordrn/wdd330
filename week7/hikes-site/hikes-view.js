
export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = 'img/';   
    }
    renderHikeList(hikes, parent) {
    hikes.forEach(hike => {
        parent.appendChild(this.renderOneHike(hike));
    });

    }
    renderOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <h2>${hike.name}</h2>
            <div class="hike-info" id="${hike.name}">
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
            </div>
            </div>`;

    return item;
    }
    renderOneHikeFull(hike, parent) {
    const item = document.createElement("li");
    item.innerHTML = ` <h2>${hike.name}</h2>
            <div class="hike-info" id="${hike.name}>
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <p>${hike.description}</p>
                    </div>
                    <div>
                        <h3>Directions</h3>
                        <p>${hike.directions}</p>
                    </div>
            </div>
            </div>`;
        parent.appendChild(item);
    return item;
  }
  
  renderForm() {
    const displayDiv = document.getElementById('comments');
    displayDiv.innerHTML = '';
    const commentContent = document.createElement('textarea');
    commentContent.setAttribute("id", "commentContent");
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "name");
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit your comment';
    submitButton.setAttribute("type", "button");
    displayDiv.appendChild(input);
    displayDiv.appendChild(submitButton);
    return displayDiv;
  }
}