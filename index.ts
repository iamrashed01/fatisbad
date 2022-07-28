enum Direction {
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
}

const board = document.getElementById("board");
const box = document.getElementById("box");
const title = document.getElementById("title");
const score = document.getElementById("score");
const playButton = document.getElementById("play");
const stopButton = document.getElementById("stop");

const boxSize: number = 10;
let positionX: number = 1,
  positionY: number = 1,
  previousTimeStamp: number = 1;
let done: boolean = false;
let direction: Direction = Direction.ArrowRight;
const frameLength: number = 400;
let gameDelay: number = 4; // as second
let isGameOn: boolean = false;
let gameScore: number = 0;

// game controls
window.addEventListener("keydown", (e) => {
  if (Object.values(Direction).includes(e.key as Direction)) {
    direction = e.key as Direction;
  }
});

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
      const countX = Math.min(0.1 * positionX, frameLength);
      const countY = Math.min(0.1 * positionY, frameLength);
      if (box) {
        box.style.transform = `translate(${countX}px,${countY}px)`;
      }
      if (title) {
        title.innerHTML = `X: ${Math.round(countX)} <br> Y: ${Math.round(
          countY
        )}`;
      }
      if (score) {
        score.innerHTML = `${gameScore}`;
      }
      if (
        countX > frameLength - boxSize ||
        countX <= 0 ||
        countY > frameLength - boxSize ||
        countY <= 0
      ) {
        done = true;
        if (title) {
          title.innerHTML = "GAME IS OVER";
        }
        if (box) {
          box.style.background = `red`;
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
  startTheGame();
}, 1000);

// game initialized
window.requestAnimationFrame(step);
