export function readFromLS(key) { 
    let list = JSON.parse(localStorage.getItem(key));
    return list;
}

export function writeToLS(key, favorite) {
    let oldList = JSON.parse(localStorage.getItem(key));
    let newItem = favorite;
    oldList.push(newItem);
    localStorage.setItem(key, JSON.stringify(oldList));
}
export function removeFromLS(key, fave) {
    console.log(fave);
    let oldList = JSON.parse(localStorage.getItem(key));
    const index = oldList.indexOf(fave);
    oldList.splice(index);
    localStorage.setItem(key, JSON.stringify(oldList));
}


/* export function writeToLS(key) {
    if (localStorage.getItem('favoritesArray') !== null) {
        const oldList = JSON.parse(localStorage.getItem('favoritesArray'));
        console.log(oldList);
        oldList.push(key);
        console.log(oldList);
        localStorage.setItem('favoritesArray', JSON.stringify(oldList));
        //localStorage.setItem(JSON.stringify(oldList));
    } else {
        const favorites = [];
        favorites.push(key);
        console.log(favorites);
        localStorage.setItem("favoritesArray", JSON.stringify(favorites));
    }

}
export function removeFavoritesFromLS(key) {
    const oldList = JSON.parse(localStorage.getItem('favoritesArray'));
    const index = oldList.indexOf(key);
    oldList.splice(index);
    localStorage.setItem('favoritesArray', JSON.stringify(oldList));
} */

