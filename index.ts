enum IBelleyMovingDirection {
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
}
const colors = [
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

const board = document.getElementById("board");
const box = document.getElementById("box");
const title = document.getElementById("title");
const scoreBox = document.getElementById("score");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

let positionX: number = 1,
  positionY: number = 1,
  previousTimeStamp: number = 1;
let done: boolean = false;
let direction: IBelleyMovingDirection = IBelleyMovingDirection.ArrowRight;
const frameLength: number = 400;
let gameDelay: number = 1; // as second
let isGameOn: boolean = false;
let gameScore: number = 0;
let boxSize: number = 10;

interface IFood {
  x: number;
  y: number;
}
let gameFoods: IFood[] = [];

interface IWall {
  x: number;
  y: number;
  body: number;
  wallColor: string;
}
let customWalls: IWall[] = [];

// game controls
window.addEventListener("keydown", (e) => {
  if (
    Object.values(IBelleyMovingDirection).includes(
      e.key as IBelleyMovingDirection
    )
  ) {
    direction = e.key as IBelleyMovingDirection;
  }
});

function renderWall() {
  customWalls.forEach((wall) => {
    const wallEl = document.createElement("div");
    wallEl.classList.add("wall");
    wallEl.style.transform = `translate(${wall.x}px, ${wall.y}px)`;
    wallEl.style.width = `${wall.body}px`;
    wallEl.style.height = `${wall.body}px`;
    wallEl.style.background = `${wall.wallColor}`;
    wallEl.style.borderRadius = `${wall.body}px`;
    board?.appendChild(wallEl);
  });
}

function setGenerateRandomWall() {
  const randomLoopsCount = getRandomArbitrary(1, 1);
  for (let i = 0; i <= randomLoopsCount; i++) {
    const randomWallPositionNumber = getRandomArbitrary(0, frameLength - 50);
    const randomWallSize = getRandomArbitrary(
      30,
      Math.max(frameLength / (randomLoopsCount * 2) - 20, 30)
    );
    customWalls.push({
      x: randomWallPositionNumber,
      y: randomWallPositionNumber,
      body: randomWallSize,
      wallColor: getRandomRgbaColor(),
    });
  }
}

function renderGameFoods() {
  // remove all foods first
  removeFoods();
  // generate fresh game foods
  const arr = generateGameFoods();

  // render new foods
  arr.forEach((food) => {
    const foodEl = document.createElement("div");
    foodEl.classList.add("food");
    foodEl.style.transform = `translate(${food.x}px, ${food.y}px)`;
    board?.appendChild(foodEl);
  });
}

function generateGameFoods() {
  const randomNumber = getRandomArbitrary(1, frameLength - 20);
  return (gameFoods = [{ x: randomNumber, y: randomNumber }]);
}

function incrementScore() {
  gameScore += 1;
}

function removeFoods() {
  const boxes = document.querySelectorAll(".food");
  boxes.forEach((box) => {
    box.remove();
  });
}

// main frame to count and continue game
function step(timestamp) {
  if (isGameOn) {
    if (direction === IBelleyMovingDirection.ArrowRight) {
      positionX += timestamp - previousTimeStamp;
    } else if (direction === IBelleyMovingDirection.ArrowLeft) {
      positionX -= timestamp - previousTimeStamp;
    }

    if (direction === IBelleyMovingDirection.ArrowDown) {
      positionY += timestamp - previousTimeStamp;
    } else if (direction === IBelleyMovingDirection.ArrowUp) {
      positionY -= timestamp - previousTimeStamp;
    }

    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly [frameLength]px
      const countX = Math.min(0.05 * positionX, frameLength);
      const countY = Math.min(0.05 * positionY, frameLength);

      // score increase
      if (gameFoods.some((el) => isBelleyEat(el, countX, countY))) {
        renderGameFoods();
        incrementScore();
        increseFat(gameScore);
        changeBelleyBodyColor();
      }

      // animate the belley
      if (box) {
        box.style.transform = `translate(${countX}px,${countY}px)`;
      }

      // print the title
      if (title) {
        title.innerHTML = `X: ${Math.round(countX)} <br> Y: ${Math.round(
          countY
        )}`;
      }

      // print the score
      if (scoreBox) {
        scoreBox.innerHTML = `${gameScore}`;
      }

      // is the belley crash with outer wall ? ok end the game 🤕
      if (
        countX > frameLength - (boxSize + gameScore) ||
        countX <= 0 ||
        countY > frameLength - (boxSize + gameScore) ||
        countY <= 0
      ) {
        endTheGame();
      }

      // TODO: working on inner wall
      // is the belley crash with inner wall ? ok end the game 🤕
      isBelleyCrashWithWall(countX, countY);
    }
  }

  if (!done) {
    previousTimeStamp = timestamp;
    window.requestAnimationFrame(step);
  }
}

function isBelleyCrashWithWall(
  belleyPositionX: number,
  belleyPositionY: number
) {
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
        belleyPositionY + boxSize < customWalls[0].y + customWalls[0].body)
    ) {
      endTheGame();
    }
  }
}

function isBelleyEat(belley: IFood, x: number, y: number) {
  return (
    belley.x + boxSize / 2 > Math.round(x) &&
    belley.x - boxSize / 2 < Math.round(x) &&
    belley.y + boxSize / 2 > Math.round(y) &&
    belley.y - boxSize / 2 < Math.round(y)
  );
}

function increseFat(newFoodAmount: number) {
  if (box) {
    box.style.height = `${boxSize + newFoodAmount}px`;
    box.style.width = `${boxSize + newFoodAmount}px`;
  }
}

function getRandomRgbaColor() {
  const randomNumber = getRandomArbitrary(0, colors.length);
  return colors[randomNumber];
}

function changeBelleyBodyColor() {
  if (box) {
    box.style.background = `${getRandomRgbaColor()}`;
  }
}

function endTheGame() {
  done = true;
  if (title) {
    title.innerHTML = "GAME IS OVER";
  }
  if (board) {
    // TODO: will be enable after test, btw canshould be enable anytime
    // board.innerHTML = "FAT IS BAD!";
  }
  if (box) {
    box.style.background = `red`;
  }
  setHighestScore();
}

function setHighestScore() {
  const score = localStorage.getItem("fatisbadScore");
  const maxScore = String(
    Number(score) > gameScore ? Number(score) : gameScore
  );

  localStorage.setItem("fatisbadScore", String(maxScore));
  if (scoreBox) {
    return (scoreBox.innerHTML = `Highest Score: ${maxScore}`);
  }
}

function showGameDelay() {
  if (gameDelay > 0) {
    gameDelay -= 1;
    if (title) {
      title.innerHTML = `${gameDelay}`;
    }
  }
}

function getRandomArbitrary(min: number, max: number) {
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

const interval = setInterval(() => {
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
