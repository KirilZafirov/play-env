import { MoveSouth } from './MoveSouth';
import { MoveNorth } from './MoveNorth';
import { MoveWest } from './MoveWest';
import { Move } from './Move';
import { MoveEast } from './MoveEast';
export interface Position {
    i: number
    j: number
}
export enum Direction {
    N,
    E,
    W,
    S
}
export enum Status {
    Finish,
    Dead,
    Lost
}

export class MakeMove {



    constructor( ){
    }

    makeMove(position: Position  , direction: Direction , mazeLength : number): Position { 
        let move : Move = this.moveStrategies[direction];

        return move.move(position,mazeLength);
    }

    private moveStrategies = {
         0 : new MoveNorth() ,
         1 : new MoveEast() ,
         2 : new MoveWest(), 
         3 : new MoveSouth(), 
    }
}