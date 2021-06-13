const canvas1 = document.getElementById("myCanvas");
let context1 = canvas1.getContext("2d");
context1.strokeStyle = "#3b6064";
context1.fillStyle = "#c9e4ca";
context1.fillRect(10, 10, 100, 100); 
context1.strokeRect(10, 10, 100, 100);

let canvas2 = document.getElementById("myCanvas2");
let context2 = canvas2.getContext("2d");
context2.strokeStyle = "#3b6064";
function drawPattern() {
    let img = new Image(); 
    img.src = "img/tiny-smiley.png";
    img.onload = function() { 
        let pattern = context2.createPattern(img, "repeat");
        context2.fillStyle = pattern;
        context2.fillRect(0, 0, 200, 200); 
        context2.strokeRect(0, 0, 200, 200); 
    };
}
drawPattern();
function drawGradient() {
    let canvas3 = document.getElementById("myCanvas3");
    let context3 = canvas3.getContext("2d");
    context3.strokeStyle = "#3b6064";
    let gradient = context3.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#c9e4ca"); 
    gradient.addColorStop(1, "#364958");
    context3.fillStyle = gradient; 
    context3.fillRect(0, 0, 200, 200); 
    context3.strokeRect(0, 0, 200, 200);

}
drawGradient();
function drawCircle(canvas) {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.arc(150, 150, 30, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "#364958";
    context.fillStyle = "#c9e4ca";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
let canvas4 = document.getElementById("myCanvas4");
drawCircle(canvas4);