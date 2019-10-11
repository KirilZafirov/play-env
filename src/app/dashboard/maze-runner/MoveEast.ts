import { Position } from './models';
import { Move } from "./Move";
export class MoveEast implements Move {
    public move(position: Position, mazeLength: number): Position {
        let move: Position = {
            i: position.i,
            j: position.j
        };
        if(move.j <= mazeLength ){
            move.j = move.j + 1 ;
        }
        return  move;
    }
}
