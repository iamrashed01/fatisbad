var Direction;
(function (Direction) {
    Direction["ArrowLeft"] = "ArrowLeft";
    Direction["ArrowUp"] = "ArrowUp";
    Direction["ArrowRight"] = "ArrowRight";
    Direction["ArrowDown"] = "ArrowDown";
})(Direction || (Direction = {}));
var colors = [
    "240, 248, 255, 1",
    "250, 235, 215, 1",
    "0, 255, 255, 1",
    "127, 255, 212, 1",
    "240, 255, 255, 1",
    "245, 245, 220, 1",
    "255, 228, 196, 1",
    "0, 0, 0, 1",
    "255, 235, 205, 1",
    "0, 0, 255, 1",
    "138, 43, 226, 1",
    "165, 42, 42, 1",
    "222, 184, 135, 1",
    "95, 158, 160, 1",
    "127, 255, 0, 1",
    "210, 105, 30, 1",
    "255, 127, 80, 1",
    "100, 149, 237, 1",
    "255, 248, 220, 1",
    "220, 20, 60, 1",
    "0, 255, 255, 1",
    "0, 0, 139, 1",
    "0, 139, 139, 1",
    "184, 134, 11, 1",
    "169, 169, 169, 1",
    "0, 100, 0, 1",
    "169, 169, 169, 1",
    "189, 183, 107, 1",
    "139, 0, 139, 1",
    "85, 107, 47, 1",
    "255, 140, 0, 1",
    "153, 50, 204, 1",
    "139, 0, 0, 1",
    "233, 150, 122, 1",
    "143, 188, 143, 1",
    "72, 61, 139, 1",
    "47, 79, 79, 1",
    "47, 79, 79, 1",
    "0, 206, 209, 1",
    "148, 0, 211, 1",
    "255, 20, 147, 1",
    "0, 191, 255, 1",
    "105, 105, 105, 1",
    "105, 105, 105, 1",
    "30, 144, 255, 1",
    "178, 34, 34, 1",
    "255, 250, 240, 1",
    "34, 139, 34, 1",
    "255, 0, 255, 1",
    "220, 220, 220, 1",
    "248, 248, 255, 1",
    "255, 215, 0, 1",
    "218, 165, 32, 1",
    "128, 128, 128, 1",
    "0, 128, 0, 1",
    "173, 255, 47, 1",
    "128, 128, 128, 1",
    "240, 255, 240, 1",
    "255, 105, 180, 1",
    "205, 92, 92, 1",
    "75, 0, 130, 1",
    "255, 255, 240, 1",
    "240, 230, 140, 1",
    "230, 230, 250, 1",
    "255, 240, 245, 1",
    "124, 252, 0, 1",
    "255, 250, 205, 1",
    "173, 216, 230, 1",
    "240, 128, 128, 1",
    "224, 255, 255, 1",
    "250, 250, 210, 1",
    "211, 211, 211, 1",
    "144, 238, 144, 1",
    "211, 211, 211, 1",
    "255, 182, 193, 1",
    "255, 160, 122, 1",
    "32, 178, 170, 1",
    "135, 206, 250, 1",
    "119, 136, 153, 1",
    "119, 136, 153, 1",
    "176, 196, 222, 1",
    "0, 255, 0, 1",
    "50, 205, 50, 1",
    "250, 240, 230, 1",
    "128, 0, 0, 1",
    "102, 205, 170, 1",
    "0, 0, 205, 1",
    "186, 85, 211, 1",
    "147, 112, 219, 1",
    "60, 179, 113, 1",
    "123, 104, 238, 1",
    "0, 250, 154, 1",
    "72, 209, 204, 1",
    "199, 21, 133, 1",
    "25, 25, 112, 1",
    "245, 255, 250, 1",
    "255, 228, 225, 1",
    "255, 228, 181, 1",
    "255, 222, 173, 1",
    "0, 0, 128, 1",
    "253, 245, 230, 1",
    "128, 128, 0, 1",
    "107, 142, 35, 1",
    "255, 165, 0, 1",
    "255, 69, 0, 1",
    "218, 112, 214, 1",
    "238, 232, 170, 1",
    "152, 251, 152, 1",
    "175, 238, 238, 1",
    "219, 112, 147, 1",
    "255, 239, 213, 1",
    "255, 218, 185, 1",
    "205, 133, 63, 1",
    "255, 192, 203, 1",
    "221, 160, 221, 1",
    "176, 224, 230, 1",
    "128, 0, 128, 1",
    "255, 0, 0, 1",
    "188, 143, 143, 1",
    "65, 105, 225, 1",
    "139, 69, 19, 1",
    "250, 128, 114, 1",
    "244, 164, 96, 1",
    "46, 139, 87, 1",
    "255, 245, 238, 1",
    "160, 82, 45, 1",
    "192, 192, 192, 1",
    "135, 206, 235, 1",
    "106, 90, 205, 1",
    "112, 128, 144, 1",
    "112, 128, 144, 1",
    "255, 250, 250, 1",
    "0, 255, 127, 1",
    "70, 130, 180, 1",
    "210, 180, 140, 1",
    "0, 128, 128, 1",
    "216, 191, 216, 1",
    "255, 99, 71, 1",
    "0, 0, 0, 0",
    "64, 224, 208, 1",
    "238, 130, 238, 1",
    "245, 222, 179, 1",
    "255, 255, 255, 1",
    "245, 245, 245, 1",
    "255, 255, 0, 1",
    "154, 205, 50, 1",
    "102, 51, 153, 1",
];
var board = document.getElementById("board");
var box = document.getElementById("box");
var title = document.getElementById("title");
var scoreBox = document.getElementById("score");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var positionX = 1, positionY = 1, previousTimeStamp = 1;
var done = false;
var direction = Direction.ArrowRight;
var frameLength = 400;
var gameDelay = 1; // as second
var isGameOn = false;
var gameScore = 0;
var boxSize = 10;
// points
var gameFoods = [{ x: 10, y: 15 }];
// game controls
window.addEventListener("keydown", function (e) {
    if (Object.values(Direction).includes(e.key)) {
        direction = e.key;
    }
});
function renderGamePoints(arr) {
    if (arr === void 0) { arr = gameFoods; }
    // remove all foods first
    removeFoods();
    // render new foods
    arr.forEach(function (point) {
        var foodEl = document.createElement("div");
        foodEl.classList.add("point");
        foodEl.style.transform = "translate(".concat(point.x, "px, ").concat(point.y, "px)");
        board === null || board === void 0 ? void 0 : board.appendChild(foodEl);
    });
}
function removeFoods() {
    var boxes = document.querySelectorAll(".point");
    boxes.forEach(function (box) {
        box.remove();
    });
}
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
            var countX_1 = Math.min(0.05 * positionX, frameLength);
            var countY_1 = Math.min(0.05 * positionY, frameLength);
            // score increase
            if (gameFoods.some(function (el) { return isBelleyEat(el, countX_1, countY_1); })) {
                gameScore += 1;
                var randomNumber = Math.floor(Math.random() * 400);
                gameFoods = [{ x: randomNumber, y: randomNumber }];
                renderGamePoints();
                increseFat(gameScore);
                changeBelleyBodyColor();
            }
            // animate the belley
            if (box) {
                box.style.transform = "translate(".concat(countX_1, "px,").concat(countY_1, "px)");
            }
            // print the title
            if (title) {
                title.innerHTML = "X: ".concat(Math.round(countX_1), " <br> Y: ").concat(Math.round(countY_1));
            }
            // print the score
            if (scoreBox) {
                scoreBox.innerHTML = "".concat(gameScore);
            }
            // is the belley crash with wall ? ok end the game 🤕
            if (countX_1 > frameLength - (boxSize + gameScore) ||
                countX_1 <= 0 ||
                countY_1 > frameLength - (boxSize + gameScore) ||
                countY_1 <= 0) {
                endTheGame();
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
    renderGamePoints();
    startTheGame();
}, 1000);
// game initialized
window.requestAnimationFrame(step);
function isBelleyEat(belley, x, y) {
    return (belley.x + boxSize / 2 > Math.round(x) &&
        belley.x - boxSize / 2 < Math.round(x) &&
        belley.y + boxSize / 2 > Math.round(y) &&
        belley.y - boxSize / 2 < Math.round(y));
}
function increseFat(newFoodAmount) {
    console.log(boxSize + newFoodAmount, "boxSize");
    if (box) {
        box.style.height = "".concat(boxSize + newFoodAmount, "px");
        box.style.width = "".concat(boxSize + newFoodAmount, "px");
    }
}
function changeBelleyBodyColor() {
    if (box) {
        var randomNumber = Math.floor(Math.random() * colors.length);
        box.style.background = "rgba(".concat(colors[randomNumber], ")");
    }
}
function endTheGame() {
    done = true;
    if (title) {
        title.innerHTML = "GAME IS OVER";
    }
    if (board) {
        board.innerHTML = "FAT IS BAD!";
    }
    if (box) {
        box.style.background = "red";
    }
    setHighestScore();
}
function setHighestScore() {
    var score = localStorage.getItem("fatisbadScore");
    var maxScore = String(Number(score) > gameScore ? Number(score) : gameScore);
    localStorage.setItem("fatisbadScore", String(maxScore));
    if (scoreBox) {
        return (scoreBox.innerHTML = "Highest Score: ".concat(maxScore));
    }
}
