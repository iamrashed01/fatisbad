export enum IBelleyMovingDirection {
  ArrowLeft = "ArrowLeft",
  ArrowUp = "ArrowUp",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
}

export interface IWall {
  x: number;
  y: number;
  body: number;
  wallColor: string;
}

export interface IFood {
  x: number;
  y: number;
}
