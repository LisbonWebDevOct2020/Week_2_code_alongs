const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

const image = new Image();
image.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';

const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
    move: function() {
        this.x += this.speed;
        this.x %= canvas.width;
    },
    draw: function() {
        ctx.drawImage(this.image, this.x, 0);
        ctx.drawImage(this.image, this.x + canvas.width, 0);
        console.log(this.x + canvas.width);
    }
}

function updateCanvas() {
    backgroundImage.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();

    requestAnimationFrame(updateCanvas);
}

updateCanvas();