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
}
export function isBelleyCrashWithWall({
  belleyPositionX,
  belleyPositionY,
  customWalls,
  boxSize,
}: IIsBelleyCrashWithWall) {
  // x is under wall x to wall x+body dimension
  return customWalls.some(
    (el) =>
      (belleyPositionX > el.x &&
        belleyPositionX < el.x + el.body &&
        // y is under wall y to wall y+body dimension
        belleyPositionY > el.y &&
        belleyPositionY < el.y + el.body) || // x is under wall x to wall x+body dimension
      (belleyPositionX + boxSize > el.x &&
        belleyPositionX + boxSize < el.x + el.body &&
        // y is under wall y to wall y+body dimension
        belleyPositionY + boxSize > el.y &&
        belleyPositionY + boxSize < el.y + el.body)
  );
}

interface IIsBelleyEat {
  food: IFood;
  x: number;
  y: number;
  boxSize: number;
}

export function isBelleyEat({ food, x, y, boxSize }: IIsBelleyEat) {
  // logic is Math.abs(actual - comparison) <= 10
  return (
    Math.abs(food.x + 5 - (x + boxSize / 2)) <= 5 + boxSize / 2 &&
    Math.abs(food.y + 5 - (y + boxSize / 2)) <= 5 + boxSize / 2
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
