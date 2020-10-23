let obstacles =  [];

const gameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function() {
        this.canvas.width = 450;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    },
    score: function() {
        const points = Math.floor(this.frames / 5);
        this.context.font = '10px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`Score: ${points}`, 350, 50);
    }
}

class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }

    update() {
        const ctx = gameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }
    
    bottom() {
        return this.y + this.height;
    }

    crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || 
                this.top() > obstacle.bottom() || 
                this.right() < obstacle.left() ||
                this.left() > obstacle.right())
    }
}

let player = new Component(30, 30, 'red', 0, 110);

function updateGameArea() {
    gameArea.clear();
    player.newPos();
    player.update();
    updateObstacles();
    checkGameOver();
    gameArea.score();
}

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
       case 38: 
        player.speedY -= 1;
        break;
        case 40:
        player.speedY += 1;
        break;
        case 37:
        player.speedX -= 1;
        break;
        case 39:
        player.speedX += 1
        break;
    }
});

document.addEventListener('keyup', () => {
    player.speedX = 0;
    player.speedY = 0;
});

function updateObstacles() {
    // Move the obstacles
    for(let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 1;
        obstacles[i].update();
    }

    gameArea.frames+=1;
    if (gameArea.frames % 120 === 0) {
        //push two new obstacles to an obstacle array
        let minHeight = 20;
        let maxHeight = 200;
        let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        let minGap = 50;
        let maxGap = 200;
        let gap = Math.floor(Math.random() * (maxGap - minGap +1 ) + minGap);
        //Adding the top obstacle
        obstacles.push(
            new Component(10, 
                height, 
                'green', 
                gameArea.canvas.width, 
                0
        ));
        //Adding the bottom obstacle
        obstacles.push(
            new Component(10, 
                gameArea.canvas.width - height - gap, 
                'green', gameArea.canvas.width, 
                height + gap
        ));
    }
    
}

function checkGameOver() {
    const crashed = obstacles.some((obstacle)=> {
        return player.crashWith(obstacle);
    });

    if (crashed) {
        gameArea.stop();
    }
}

gameArea.start();
