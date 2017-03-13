var Game = function() {
  this.board = [[' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']];
  this.turn = 0;
};

Game.prototype.mark = function(num) {
  var marker = this.turn % 2 === 0 ? 'O' : 'X';
  this.turn++;
  var row = Math.floor((num) / 3);
  var column = (num) % 3;
  this.board[row][column] = marker;
}

Game.prototype.isWinner = function() {
  const squares = [];
  this.board.forEach((row)=>{row.forEach((string)=>{squares.push(string)})})

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== ' ' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

module.exports = new Game;








