"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = require("./board");

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: "playMove",
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === "B") {
        return "Game Over", this._board.printBoard();
      } else if (this._board.hasSafeTiles()) {
        return "Looks like you have won. Congratulations!!";
      } else {
        return "Current Board: ", this._board.printBoard();
      }
    }
  }]);

  return Game;
}();