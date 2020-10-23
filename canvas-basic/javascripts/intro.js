let canvas = document.getElementById('example');
let ctx = canvas.getContext('2d');

//Rectangles

//fillRect /=> draw a rectangle filled with a color
//strokeRect /=> draw a rectangle with no fill
//clearRect /=> draw a clear rectangle

/*ctx.fillStyle = 'purple';
ctx.fillRect(260, 260, 30, 30);
ctx.strokeStyle = 'blue';
ctx.fillRect(25, 25, 100, 100);
ctx.strokeRect(50, 50, 50, 50);
ctx.clearRect(45, 45, 30, 30);*/

//Paths - A list of connected points by segments (straight line, arches, circles...)
/*ctx.beginPath();
ctx.moveTo(100, 100);//=> coordinates where the line will start
ctx.lineTo(250, 50); //=> coordinates where the line will end
ctx.stroke(); //=> executes the drawing

ctx.moveTo(250, 250);
ctx.lineTo(250, 100);
ctx.stroke();

ctx.closePath(); */

/*ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill(); //When you call fill(), 
// open shapes are closed automatically
*/

/*
//Arcs
ctx.beginPath();
ctx.arc(150, 170, 75, 0, Math.PI * 2);
//ctx.arc(150, 170, 75, 0, Math.PI, true);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

// Draw a smaller circle inside the circle above
ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();
*/
//Text
/*ctx.font = '48px serif';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World', 10, 50);
ctx.font = '48px serif';
ctx.strokeText('Hello World', 10, 100);*/

const cat = new Image();
cat.src = 'http://placekitten.com/g/100/100';

function draw(x) {
    ctx.clearRect(0, 0, 300, 300); //Clear the whole canvas
  //  ctx.fillStyle = 'green';
   // ctx.fillRect(x, 0, 50, 50); //Re-design the while canvas
   ctx.drawImage(cat, x, 0, 100, 100);
    x += 3;
    setTimeout(() => {
        draw(x); // Recursion, function calling itself
    }, 30);
}

draw(0);








