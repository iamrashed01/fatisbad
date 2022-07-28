var Direction;
(function (Direction) {
    Direction["ArrowLeft"] = "ArrowLeft";
    Direction["ArrowUp"] = "ArrowUp";
    Direction["ArrowRight"] = "ArrowRight";
    Direction["ArrowDown"] = "ArrowDown";
})(Direction || (Direction = {}));
var board = document.getElementById("board");
var box = document.getElementById("box");
var title = document.getElementById("title");
var score = document.getElementById("score");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var boxSize = 10;
var positionX = 1, positionY = 1, previousTimeStamp = 1;
var done = false;
var direction = Direction.ArrowRight;
var frameLength = 400;
var gameDelay = 4; // as second
var isGameOn = false;
var gameScore = 0;
// game controls
window.addEventListener("keydown", function (e) {
    if (Object.values(Direction).includes(e.key)) {
        direction = e.key;
    }
});
// main frame to count and continue game
function step(timestamp) {
    if (isGameOn) {
        if (direction === Direction.ArrowRight) {
            positionX += timestamp - previousTimeStamp;
        }
        else if (direction === Direction.ArrowLeft) {
            positionX -= timestamp - previousTimeStamp;
        }
        if (direction === Direction.ArrowDown) {
            positionY += timestamp - previousTimeStamp;
        }
        else if (direction === Direction.ArrowUp) {
            positionY -= timestamp - previousTimeStamp;
        }
        if (previousTimeStamp !== timestamp) {
            // Math.min() is used here to make sure the element stops at exactly [frameLength]px
            var countX = Math.min(0.1 * positionX, frameLength);
            var countY = Math.min(0.1 * positionY, frameLength);
            if (box) {
                box.style.transform = "translate(".concat(countX, "px,").concat(countY, "px)");
            }
            if (title) {
                title.innerHTML = "X: ".concat(Math.round(countX), " <br> Y: ").concat(Math.round(countY));
            }
            if (score) {
                score.innerHTML = "".concat(gameScore);
            }
            if (countX > frameLength - boxSize ||
                countX <= 0 ||
                countY > frameLength - boxSize ||
                countY <= 0) {
                done = true;
                if (title) {
                    title.innerHTML = "GAME IS OVER";
                }
                if (box) {
                    box.style.background = "red";
                }
            }
        }
    }
    if (!done) {
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(step);
    }
}
function showGameDelay() {
    if (gameDelay > 0) {
        gameDelay -= 1;
        if (title) {
            title.innerHTML = "".concat(gameDelay);
        }
    }
}
function startTheGame() {
    if (gameDelay === 0) {
        // clear the countdown interval
        clearInterval(interval);
        // start the main GAME
        isGameOn = true;
    }
}
var interval = setInterval(function () {
    // show game starting countdown before game start
    showGameDelay();
    // start the main game
    startTheGame();
}, 1000);
// game initialized
window.requestAnimationFrame(step);
