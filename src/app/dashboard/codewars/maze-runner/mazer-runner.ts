import {  Direction , Position , MakeMove } from './models';
export function 
mazeRunner(maze:number[][], directions:string[]): string{
  // Good luck
  let startPoint = this.findPosition(2 , maze);
  let currentPosition: Position = startPoint ;
  let makeMove : MakeMove = new MakeMove();


  for (let index = 0; index < directions.length; index++) {
    const element = directions[index];
    let direction : Direction = Direction[element]; 

    if(currentPosition.i === maze.length && direction === Direction.S) {
      return "Dead" ;
    }
    if(currentPosition.i === 0 && direction === Direction.N) {
      return "Dead" ;
    }
    if(currentPosition.j === maze.length && direction === Direction.E) {
      return "Dead" ;
    }
    if(currentPosition.j === 0 && direction === Direction.W) {
      return "Dead" ;
    }
    currentPosition =  makeMove.makeMove(currentPosition, direction , maze.length - 1);
    

   
    if(((currentPosition.i === maze.length)  || 
       (currentPosition.j === maze.length))) {
      return "Dead" ;
    } 
    let positionValue = maze[currentPosition.i][currentPosition.j];
    if(( positionValue === 1)) {
      return "Dead" ;
    }
   
    if (positionValue === 3 ){
      return "Finish"
    }
  }
  return "Lost"
  
}

export function findPosition(positionValue: number , maze:number[][]) : Position {
  let mazeDimenzion = maze.length;
  let position : Position=  {
    i: 0 , 
    j: 0  
  }
  for (let i = 0; i < mazeDimenzion; i++) {
    for (let j = 0; j < mazeDimenzion; j++) {
      if(maze[i][j] === positionValue){
        position.i = i;
        position.j = j;
        return position;
      }
    }
  }
  return position;
}


export const  maze = [[1,1,1,1,1,1,1],
[1,0,0,0,0,0,3],
[1,0,1,0,1,0,1],
[0,0,1,0,0,0,1],
[1,0,1,0,1,0,1],
[1,0,0,0,0,0,1],
[1,2,1,0,1,0,1]];