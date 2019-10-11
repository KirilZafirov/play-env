import { Position } from './models';
export interface Move {
    move(position: Position , mazeLength: number): Position;
}
