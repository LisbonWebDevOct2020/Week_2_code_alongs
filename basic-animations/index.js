// setTimeout()
// setInterval(callback) // <= keeps calling the callback function 
// requestAnimationFrame(callback) <= 60 frames per second

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const color = {
    red: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    rgb: function() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }
}

function updateCanvasColor() {
    color.red = (color.red + 1) % 255;
    color.blue = (color.blue + 1) % 255;
    color.green = (color.green +1) % 255;

    //ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = color.rgb();
    ctx.fillRect(0, 0, 150, 150);

    requestAnimationFrame(updateCanvasColor);
}

// updateCanvasColor();

let speed1 = 500;
let speed2 = 500;
let speed3 = 500;
let sideMove = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, 500, 500);
}

function drawCanvas(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h, color);
}

function updateRectangles() {
    speed1-=1;
    speed2-=2;
    speed3-=3;
    sideMove+=1

    clearCanvas();

    drawCanvas(sideMove, speed1, 50, 50, 'red');
    drawCanvas(150, speed2, 50, 50, 'blue');
    drawCanvas(250, speed3, 50, 50, 'green');

    requestAnimationFrame(updateRectangles);
}

updateRectangles();

