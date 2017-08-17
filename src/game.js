const Board = require("./board");
class Game{
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === "B"){
      return "Game Over", this._board.printBoard();
    }else if (this._board.hasSafeTiles()){
      return "Looks like you have won. Congratulations!!";
    }else{
      return "Current Board: ", this._board.printBoard()
    }
  }
}
