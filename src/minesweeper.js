const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++){
    let row = [];
    for (let j = 0; j < numberOfColumns; j++){
      row.push(" ");
    }
    board.push(row);
  }
  return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++){
    let row = [];
    for (let j = 0; j < numberOfColumns; j++){
      row.push(" ");
    }
    board.push(row);
  }
  numberOfBombsPlaced = 0;
  //might get 2 or more bombs in the same spot will be fixed later
  while (numberOfBombsPlaced < numberOfBombs){
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }
  return board;
}

const printBoard = board =>{
  console.log(board.map(row => row.join(" | ")).join("\n"));
}
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log("Player Board: ");
printBoard(playerBoard)
console.log("Bomb Board: ");
printBoard(bombBoard)
