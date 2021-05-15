let index = 1;
let winPattern = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9]
];
let p1 = [];
let p2 = [];
function checkMatch(array) {

}


document.querySelectorAll('.box').forEach(box => box.addEventListener('click', clickHandler));
function clickHandler(clickedBox) {
    const box = clickedBox.target;
    let boxId = parseInt(box.getAttribute('id'));
    console.log(boxId);
    if(box.innerHTML) {
      alert("spot taken");
    }
    else {
          if(index % 2 !== 0) {
        box.innerhtml = "";
        let x = document.createElement('p');
        x.textContent = 'X';
        box.appendChild(x);
        p1.push(boxId);
       /*  if (index > 4) {
        checkMatch(p1)
        } */
        console.log(p1);
        index++;
        }else{
        box.innerhtml = "";
        let o = document.createElement('p');
        o.textContent = 'O';
        box.appendChild(o);
        p2.push(boxId);
        console.log(p2);
        index++;
      }
    }
}
function reset() {
  document.querySelectorAll('.box').forEach(box => {
    box.innerHTML = "";
  });
  index = 1;
  p1 = [];
  p2 = [];
}