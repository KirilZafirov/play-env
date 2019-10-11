import { Position } from './models';
import { Move } from "./Move";
export class MoveNorth implements Move {
    public move(position: Position, mazeLength: number): Position {
        let move: Position = {
            i: position.i,
            j: position.j
        };
        if(move.i !== 0 ){
            move.i = move.i - 1 ;
        }
        return move ;
    }
}
