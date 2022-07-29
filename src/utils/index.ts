import { IFood, IWall } from "../interfaces";
import { colors } from "./colors";

export function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getRandomRgbaColor() {
  const randomNumber = getRandomArbitrary(0, colors.length);
  return colors[randomNumber];
}

interface IIsBelleyCrashWithWall {
  belleyPositionX: number;
  belleyPositionY: number;
  customWalls: IWall[];
  boxSize: number;
  endTheGame: Function;
}
export function isBelleyCrashWithWall({
  belleyPositionX,
  belleyPositionY,
  customWalls,
  boxSize,
  endTheGame,
}: IIsBelleyCrashWithWall) {
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

interface IIsBelleyEat {
  food: IFood;
  x: number;
  y: number;
  boxSize: number;
}

export function isBelleyEat({ food, x, y, boxSize }: IIsBelleyEat) {
  return (
    // food.x + boxSize / 2 > Math.round(x) &&
    // food.x - boxSize / 2 < Math.round(x) &&
    // food.y + boxSize / 2 > Math.round(y) &&
    // food.y - boxSize / 2 < Math.round(y)

    (food.x > Math.round(x) &&
      food.x < Math.round(x) + boxSize &&
      // y is under wall y to wall y+boxSize dimension
      food.y > Math.round(y) &&
      food.y < Math.round(y) + boxSize) || // x is under wall x to wall x+boxSize dimension
    (food.x + boxSize > Math.round(x) &&
      food.x + boxSize < Math.round(x) + boxSize &&
      // y is under wall y to wall y+boxSize dimension
      food.y + boxSize > Math.round(y) &&
      food.y + boxSize < Math.round(y) + boxSize)
  );
}

export function removeFoods() {
  const boxes = document.querySelectorAll(".food");
  boxes.forEach((box) => {
    box.remove();
  });
}

export function generateGameFoods(frameLength: number) {
  const randomNumber = getRandomArbitrary(1, frameLength - 20);
  return [{ x: randomNumber, y: randomNumber }];
}
