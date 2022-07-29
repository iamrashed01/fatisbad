import { IBelleyMovingDirection, IFood, IWall } from "./interfaces";
import {
  generateGameFoods,
  getRandomArbitrary,
  getRandomRgbaColor,
  isBelleyCrashWithWall,
  isBelleyEat,
  removeFoods,
} from "./utils";

let board: HTMLDivElement | null = null;
let box: HTMLDivElement | null = null;
let title: HTMLDivElement | null = null;
let scoreBox: HTMLDivElement | null = null;

let positionX: number = 1,
  positionY: number = 1,
  previousTimeStamp: number = 1;
let done: boolean = false;
let direction: IBelleyMovingDirection = IBelleyMovingDirection.ArrowRight;
const frameLength: number = 600;
let gameDelay: number = 6; // as second
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
    wallEl.style.background = `red`;
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
  gameFoods = generateGameFoods(frameLength);
  while (
    customWalls &&
    customWalls.length > 0 &&
    customWalls.some((el) => {
      return (
        (el.x < gameFoods[0].x && el.x + el.body > gameFoods[0].x) ||
        (el.y < gameFoods[0].x && el.y + el.body > gameFoods[0].x)
      );
    })
  ) {
    console.log("was inside the wall!: regenerating foods");
    gameFoods = generateGameFoods(frameLength);
  }

  // render new foods
  gameFoods.forEach((food) => {
    const foodEl = document.createElement("div");
    foodEl.classList.add("food");
    foodEl.style.transform = `translate(${food.x}px, ${food.y}px)`;
    foodEl.style.backgroundColor = getRandomRgbaColor();
    board?.appendChild(foodEl);
  });
}

function incrementScore() {
  gameScore += 1;
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
      const countX = Math.min(0.1 * positionX, frameLength);
      const countY = Math.min(0.1 * positionY, frameLength);

      // score increase
      if (
        gameFoods.some((el) =>
          isBelleyEat({
            food: el,
            x: countX,
            y: countY,
            boxSize: boxSize + gameScore, // boxsixe extended with gamescore -> due to box increases after score increase
          })
        )
      ) {
        renderGameFoods();
        incrementScore();
        increseFat(gameScore * 2);
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
      isBelleyCrashWithWall({
        belleyPositionX: countX,
        belleyPositionY: countY,
        boxSize: boxSize + gameScore,
        customWalls: customWalls,
        endTheGame: endTheGame,
      });
    }
  }

  if (!done) {
    previousTimeStamp = timestamp;
    window.requestAnimationFrame(step);
  }
}

function increseFat(newFoodAmount: number) {
  if (box) {
    box.style.height = `${boxSize + newFoodAmount}px`;
    box.style.width = `${boxSize + newFoodAmount}px`;
  }
}

function endTheGame() {
  done = true;
  if (title) {
    title.innerHTML = "GAME IS OVER";
  }
  if (board) {
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
  // reassign html element
  board = boardEl;
  box = boxEl;
  title = titleEl;
  scoreBox = scoreBoxEl;

  // initialize game assets
  setGenerateRandomWall();
  renderWall();
  renderGameFoods();

  interval = setInterval(() => {
    // show game starting countdown before game start
    showGameDelay();
    // start the main game
    startTheGame();
  }, 1000);
}

// game initialized
window.requestAnimationFrame(step);

export default gameInit;
