import { Position, Direction, Status } from './models';
import { Move } from "./Move";
export class MoveSouth implements Move {
    public move(position: Position, mazeLength: number): Position {
        let move: Position = {
            i: position.i,
            j: position.j
        };
        if(move.i <= mazeLength ){
            move.i = move.i + 1 ;
        }
        return move; 
    }
}
