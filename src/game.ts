import { IBelleyMovingDirection, IFood, IWall } from "./interfaces";
import { colors } from "./utils/colors";

let board: HTMLDivElement | null = null;
let box: HTMLDivElement | null = null;
let title: HTMLDivElement | null = null;
let scoreBox: HTMLDivElement | null = null;

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

let gameFoods: IFood[] = [];

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
    foodEl.style.backgroundColor = getRandomRgbaColor();
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
function step(timestamp: number) {
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

function endTheGame() {
  done = true;
  if (title) {
    title.innerHTML = "GAME IS OVER";
  }
  if (board) {
    board.innerHTML = "FAT IS BAD!";
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
  return "";
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

let interval: any = null;
function startTheGame() {
  if (gameDelay === 0 && interval) {
    // clear the countdown interval
    clearInterval(interval);
    // start the main GAME
    isGameOn = true;
  }
}

function gameInit(
  boardEl: HTMLDivElement,
  boxEl: HTMLDivElement,
  titleEl: HTMLDivElement,
  scoreBoxEl: HTMLDivElement
) {
  board = boardEl;
  box = boxEl;
  title = titleEl;
  scoreBox = scoreBoxEl;

  interval = setInterval(() => {
    // show game starting countdown before game start
    showGameDelay();
    // start the main game
    renderGameFoods();
    // render the wall into game board
    setGenerateRandomWall();
    renderWall();
    startTheGame();
  }, 1000);
}

// game initialized
window.requestAnimationFrame(step);

export default gameInit;
