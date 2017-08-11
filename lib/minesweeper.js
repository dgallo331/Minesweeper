"use strict";

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  numberOfBombsPlaced = 0;
  //might get 2 or more bombs in the same spot will be fixed later
  while (numberOfBombsPlaced < numberOfBombs) {
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(" | ");
  }).join("\n"));
};
var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log("Player Board: " + printBoard(playerBoard));
console.log("Bomb Board: " + printBoard(bombBoard));