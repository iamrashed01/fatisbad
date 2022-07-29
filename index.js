var IBelleyMovingDirection;
(function (IBelleyMovingDirection) {
    IBelleyMovingDirection["ArrowLeft"] = "ArrowLeft";
    IBelleyMovingDirection["ArrowUp"] = "ArrowUp";
    IBelleyMovingDirection["ArrowRight"] = "ArrowRight";
    IBelleyMovingDirection["ArrowDown"] = "ArrowDown";
})(IBelleyMovingDirection || (IBelleyMovingDirection = {}));
var colors = [
    "rgba(240, 248, 255, 1)",
    "rgba(250, 235, 215, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(127, 255, 212, 1)",
    "rgba(240, 255, 255, 1)",
    "rgba(245, 245, 220, 1)",
    "rgba(255, 228, 196, 1)",
    "rgba(0, 0, 0, 1)",
    "rgba(255, 235, 205, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(138, 43, 226, 1)",
    "rgba(165, 42, 42, 1)",
    "rgba(222, 184, 135, 1)",
    "rgba(95, 158, 160, 1)",
    "rgba(127, 255, 0, 1)",
    "rgba(210, 105, 30, 1)",
    "rgba(255, 127, 80, 1)",
    "rgba(100, 149, 237, 1)",
    "rgba(255, 248, 220, 1)",
    "rgba(220, 20, 60, 1)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 0, 139, 1)",
    "rgba(0, 139, 139, 1)",
    "rgba(184, 134, 11, 1)",
    "rgba(169, 169, 169, 1)",
    "rgba(0, 100, 0, 1)",
    "rgba(169, 169, 169, 1)",
    "rgba(189, 183, 107, 1)",
    "rgba(139, 0, 139, 1)",
    "rgba(85, 107, 47, 1)",
    "rgba(255, 140, 0, 1)",
    "rgba(153, 50, 204, 1)",
    "rgba(139, 0, 0, 1)",
    "rgba(233, 150, 122, 1)",
    "rgba(143, 188, 143, 1)",
    "rgba(72, 61, 139, 1)",
    "rgba(47, 79, 79, 1)",
    "rgba(47, 79, 79, 1)",
    "rgba(0, 206, 209, 1)",
    "rgba(148, 0, 211, 1)",
    "rgba(255, 20, 147, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(105, 105, 105, 1)",
    "rgba(105, 105, 105, 1)",
    "rgba(30, 144, 255, 1)",
    "rgba(178, 34, 34, 1)",
    "rgba(255, 250, 240, 1)",
    "rgba(34, 139, 34, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(220, 220, 220, 1)",
    "rgba(248, 248, 255, 1)",
    "rgba(255, 215, 0, 1)",
    "rgba(218, 165, 32, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(0, 128, 0, 1)",
    "rgba(173, 255, 47, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(240, 255, 240, 1)",
    "rgba(255, 105, 180, 1)",
    "rgba(205, 92, 92, 1)",
    "rgba(75, 0, 130, 1)",
    "rgba(255, 255, 240, 1)",
    "rgba(240, 230, 140, 1)",
    "rgba(230, 230, 250, 1)",
    "rgba(255, 240, 245, 1)",
    "rgba(124, 252, 0, 1)",
    "rgba(255, 250, 205, 1)",
    "rgba(173, 216, 230, 1)",
    "rgba(240, 128, 128, 1)",
    "rgba(224, 255, 255, 1)",
    "rgba(250, 250, 210, 1)",
    "rgba(211, 211, 211, 1)",
    "rgba(144, 238, 144, 1)",
    "rgba(211, 211, 211, 1)",
    "rgba(255, 182, 193, 1)",
    "rgba(255, 160, 122, 1)",
    "rgba(32, 178, 170, 1)",
    "rgba(135, 206, 250, 1)",
    "rgba(119, 136, 153, 1)",
    "rgba(119, 136, 153, 1)",
    "rgba(176, 196, 222, 1)",
    "rgba(0, 255, 0, 1)",
    "rgba(50, 205, 50, 1)",
    "rgba(250, 240, 230, 1)",
    "rgba(128, 0, 0, 1)",
    "rgba(102, 205, 170, 1)",
    "rgba(0, 0, 205, 1)",
    "rgba(186, 85, 211, 1)",
    "rgba(147, 112, 219, 1)",
    "rgba(60, 179, 113, 1)",
    "rgba(123, 104, 238, 1)",
    "rgba(0, 250, 154, 1)",
    "rgba(72, 209, 204, 1)",
    "rgba(199, 21, 133, 1)",
    "rgba(25, 25, 112, 1)",
    "rgba(245, 255, 250, 1)",
    "rgba(255, 228, 225, 1)",
    "rgba(255, 228, 181, 1)",
    "rgba(255, 222, 173, 1)",
    "rgba(0, 0, 128, 1)",
    "rgba(253, 245, 230, 1)",
    "rgba(128, 128, 0, 1)",
    "rgba(107, 142, 35, 1)",
    "rgba(255, 165, 0, 1)",
    "rgba(255, 69, 0, 1)",
    "rgba(218, 112, 214, 1)",
    "rgba(238, 232, 170, 1)",
    "rgba(152, 251, 152, 1)",
    "rgba(175, 238, 238, 1)",
    "rgba(219, 112, 147, 1)",
    "rgba(255, 239, 213, 1)",
    "rgba(255, 218, 185, 1)",
    "rgba(205, 133, 63, 1)",
    "rgba(255, 192, 203, 1)",
    "rgba(221, 160, 221, 1)",
    "rgba(176, 224, 230, 1)",
    "rgba(128, 0, 128, 1)",
    "rgba(255, 0, 0, 1)",
    "rgba(188, 143, 143, 1)",
    "rgba(65, 105, 225, 1)",
    "rgba(139, 69, 19, 1)",
    "rgba(250, 128, 114, 1)",
    "rgba(244, 164, 96, 1)",
    "rgba(46, 139, 87, 1)",
    "rgba(255, 245, 238, 1)",
    "rgba(160, 82, 45, 1)",
    "rgba(192, 192, 192, 1)",
    "rgba(135, 206, 235, 1)",
    "rgba(106, 90, 205, 1)",
    "rgba(112, 128, 144, 1)",
    "rgba(112, 128, 144, 1)",
    "rgba(255, 250, 250, 1)",
    "rgba(0, 255, 127, 1)",
    "rgba(70, 130, 180, 1)",
    "rgba(210, 180, 140, 1)",
    "rgba(0, 128, 128, 1)",
    "rgba(216, 191, 216, 1)",
    "rgba(255, 99, 71, 1)",
    "rgba(0, 0, 0, 0)",
    "rgba(64, 224, 208, 1)",
    "rgba(238, 130, 238, 1)",
    "rgba(245, 222, 179, 1)",
    "rgba(255, 255, 255, 1)",
    "rgba(245, 245, 245, 1)",
    "rgba(255, 255, 0, 1)",
    "rgba(154, 205, 50, 1)",
    "rgba(102, 51, 153, 1)",
];
var board = document.getElementById("board");
var box = document.getElementById("box");
var title = document.getElementById("title");
var scoreBox = document.getElementById("score");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var positionX = 1, positionY = 1, previousTimeStamp = 1;
var done = false;
var direction = IBelleyMovingDirection.ArrowRight;
var frameLength = 400;
var gameDelay = 1; // as second
var isGameOn = false;
var gameScore = 0;
var boxSize = 10;
var gameFoods = [];
var customWalls = [];
// game controls
window.addEventListener("keydown", function (e) {
    if (Object.values(IBelleyMovingDirection).includes(e.key)) {
        direction = e.key;
    }
});
function renderWall() {
    customWalls.forEach(function (wall) {
        var wallEl = document.createElement("div");
        wallEl.classList.add("wall");
        wallEl.style.transform = "translate(".concat(wall.x, "px, ").concat(wall.y, "px)");
        wallEl.style.width = "".concat(wall.body, "px");
        wallEl.style.height = "".concat(wall.body, "px");
        wallEl.style.background = "".concat(wall.wallColor);
        wallEl.style.borderRadius = "".concat(wall.body, "px");
        board === null || board === void 0 ? void 0 : board.appendChild(wallEl);
    });
}
function setGenerateRandomWall() {
    var randomLoopsCount = getRandomArbitrary(1, 1);
    for (var i = 0; i <= randomLoopsCount; i++) {
        var randomWallPositionNumber = getRandomArbitrary(0, frameLength - 50);
        var randomWallSize = getRandomArbitrary(30, Math.max(frameLength / (randomLoopsCount * 2) - 20, 30));
        customWalls.push({
            x: randomWallPositionNumber,
            y: randomWallPositionNumber,
            body: randomWallSize,
            wallColor: getRandomRgbaColor()
        });
    }
}
function renderGameFoods() {
    // remove all foods first
    removeFoods();
    // generate fresh game foods
    var arr = generateGameFoods();
    // render new foods
    arr.forEach(function (food) {
        var foodEl = document.createElement("div");
        foodEl.classList.add("food");
        foodEl.style.transform = "translate(".concat(food.x, "px, ").concat(food.y, "px)");
        board === null || board === void 0 ? void 0 : board.appendChild(foodEl);
    });
}
function generateGameFoods() {
    var randomNumber = getRandomArbitrary(1, frameLength - 20);
    return (gameFoods = [{ x: randomNumber, y: randomNumber }]);
}
function incrementScore() {
    gameScore += 1;
}
function removeFoods() {
    var boxes = document.querySelectorAll(".food");
    boxes.forEach(function (box) {
        box.remove();
    });
}
// main frame to count and continue game
function step(timestamp) {
    if (isGameOn) {
        if (direction === IBelleyMovingDirection.ArrowRight) {
            positionX += timestamp - previousTimeStamp;
        }
        else if (direction === IBelleyMovingDirection.ArrowLeft) {
            positionX -= timestamp - previousTimeStamp;
        }
        if (direction === IBelleyMovingDirection.ArrowDown) {
            positionY += timestamp - previousTimeStamp;
        }
        else if (direction === IBelleyMovingDirection.ArrowUp) {
            positionY -= timestamp - previousTimeStamp;
        }
        if (previousTimeStamp !== timestamp) {
            // Math.min() is used here to make sure the element stops at exactly [frameLength]px
            var countX_1 = Math.min(0.05 * positionX, frameLength);
            var countY_1 = Math.min(0.05 * positionY, frameLength);
            // score increase
            if (gameFoods.some(function (el) { return isBelleyEat(el, countX_1, countY_1); })) {
                renderGameFoods();
                incrementScore();
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
            // is the belley crash with outer wall ? ok end the game 🤕
            if (countX_1 > frameLength - (boxSize + gameScore) ||
                countX_1 <= 0 ||
                countY_1 > frameLength - (boxSize + gameScore) ||
                countY_1 <= 0) {
                endTheGame();
            }
            // TODO: working on inner wall
            // is the belley crash with inner wall ? ok end the game 🤕
            isBelleyCrashWithWall(countX_1, countY_1);
        }
    }
    if (!done) {
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(step);
    }
}
function isBelleyCrashWithWall(belleyPositionX, belleyPositionY) {
    if (customWalls.length > 0) {
        if (
        // x is under wall x to wall x+body dimension
        (belleyPositionX > customWalls[0].x &&
            belleyPositionX < customWalls[0].x + customWalls[0].body &&
            // y is under wall y to wall y+body dimension
            belleyPositionY > customWalls[0].y &&
            belleyPositionY < customWalls[0].y + customWalls[0].body) || // x is under wall x to wall x+body dimension
            (belleyPositionX + boxSize > customWalls[0].x &&
                belleyPositionX + boxSize < customWalls[0].x + customWalls[0].body &&
                // y is under wall y to wall y+body dimension
                belleyPositionY + boxSize > customWalls[0].y &&
                belleyPositionY + boxSize < customWalls[0].y + customWalls[0].body)) {
            endTheGame();
        }
    }
}
function isBelleyEat(belley, x, y) {
    return (belley.x + boxSize / 2 > Math.round(x) &&
        belley.x - boxSize / 2 < Math.round(x) &&
        belley.y + boxSize / 2 > Math.round(y) &&
        belley.y - boxSize / 2 < Math.round(y));
}
function increseFat(newFoodAmount) {
    if (box) {
        box.style.height = "".concat(boxSize + newFoodAmount, "px");
        box.style.width = "".concat(boxSize + newFoodAmount, "px");
    }
}
function getRandomRgbaColor() {
    var randomNumber = getRandomArbitrary(0, colors.length);
    return colors[randomNumber];
}
function changeBelleyBodyColor() {
    if (box) {
        box.style.background = "".concat(getRandomRgbaColor());
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
function showGameDelay() {
    if (gameDelay > 0) {
        gameDelay -= 1;
        if (title) {
            title.innerHTML = "".concat(gameDelay);
        }
    }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
    renderGameFoods();
    // render the wall into game board
    setGenerateRandomWall();
    renderWall();
    startTheGame();
}, 1000);
// game initialized
window.requestAnimationFrame(step);
