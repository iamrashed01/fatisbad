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
  belley: IFood;
  x: number;
  y: number;
  boxSize: number;
}

export function isBelleyEat({ belley, x, y, boxSize }: IIsBelleyEat) {
  return (
    belley.x + boxSize / 2 > Math.round(x) &&
    belley.x - boxSize / 2 < Math.round(x) &&
    belley.y + boxSize / 2 > Math.round(y) &&
    belley.y - boxSize / 2 < Math.round(y)
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
