import { Position, Direction, Status } from './models';
import { Move } from "./Move";
export class MoveWest implements Move {
    public move(position: Position, mazeLength: number): Position  {
        let move: Position = {
            i: position.i,
            j: position.j
        };
        if(move.j !== 0 ){
            move.j = move.j - 1 ;
        }
        return move;
    }
}
