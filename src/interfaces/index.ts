export interface IObject {
  id?: number,
  point: IPoint,
  color: string,
  date: Date,
}

export type IPoint = [number, number];
