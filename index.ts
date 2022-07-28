enum Direction {
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
}
const colors = [
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
let direction: Direction = Direction.ArrowRight;
const frameLength: number = 400;
let gameDelay: number = 1; // as second
let isGameOn: boolean = false;
let gameScore: number = 0;
let boxSize: number = 10;

interface Point {
  x: number;
  y: number;
}
// points
let gameFoods: Point[] = [{ x: 10, y: 15 }];

// game controls
window.addEventListener("keydown", (e) => {
  if (Object.values(Direction).includes(e.key as Direction)) {
    direction = e.key as Direction;
  }
});

function renderGamePoints(arr = gameFoods) {
  // remove all foods first
  removeFoods();

  // render new foods
  arr.forEach((point) => {
    const foodEl = document.createElement("div");
    foodEl.classList.add("point");
    foodEl.style.transform = `translate(${point.x}px, ${point.y}px)`;
    board?.appendChild(foodEl);
  });
}

function removeFoods() {
  const boxes = document.querySelectorAll(".point");
  boxes.forEach((box) => {
    box.remove();
  });
}

// main frame to count and continue game
function step(timestamp) {
  if (isGameOn) {
    if (direction === Direction.ArrowRight) {
      positionX += timestamp - previousTimeStamp;
    } else if (direction === Direction.ArrowLeft) {
      positionX -= timestamp - previousTimeStamp;
    }

    if (direction === Direction.ArrowDown) {
      positionY += timestamp - previousTimeStamp;
    } else if (direction === Direction.ArrowUp) {
      positionY -= timestamp - previousTimeStamp;
    }

    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly [frameLength]px
      const countX = Math.min(0.05 * positionX, frameLength);
      const countY = Math.min(0.05 * positionY, frameLength);

      // score increase
      if (gameFoods.some((el) => isBelleyEat(el, countX, countY))) {
        gameScore += 1;
        const randomNumber = Math.floor(Math.random() * 400);
        gameFoods = [{ x: randomNumber, y: randomNumber }];
        renderGamePoints();
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

      // is the belley crash with wall ? ok end the game 🤕
      if (
        countX > frameLength - (boxSize + gameScore) ||
        countX <= 0 ||
        countY > frameLength - (boxSize + gameScore) ||
        countY <= 0
      ) {
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
      title.innerHTML = `${gameDelay}`;
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

const interval = setInterval(() => {
  // show game starting countdown before game start
  showGameDelay();
  // start the main game
  renderGamePoints();
  startTheGame();
}, 1000);

// game initialized
window.requestAnimationFrame(step);

function isBelleyEat(belley: Point, x: number, y: number) {
  return (
    belley.x + boxSize / 2 > Math.round(x) &&
    belley.x - boxSize / 2 < Math.round(x) &&
    belley.y + boxSize / 2 > Math.round(y) &&
    belley.y - boxSize / 2 < Math.round(y)
  );
}

function increseFat(newFoodAmount: number) {
  console.log(boxSize + newFoodAmount, "boxSize");
  if (box) {
    box.style.height = `${boxSize + newFoodAmount}px`;
    box.style.width = `${boxSize + newFoodAmount}px`;
  }
}

function changeBelleyBodyColor() {
  if (box) {
    const randomNumber = Math.floor(Math.random() * colors.length);
    box.style.background = `rgba(${colors[randomNumber]})`;
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
    box.style.background = `red`;
  }
}
