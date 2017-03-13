var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Table = require('cli-table');
var renderTable = require('./renderTable');
var prompt = require('prompt');
var game = require('./game')

function getPlayersName(callback) {
  var questions = [
    {
      name: 'player1',
      type: 'input',
      message: 'Enter first player\'s username',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
      name: 'player2',
      type: 'input',
      message: 'Enter second player\'s username',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}

clear();
console.log(
  chalk.green(
    figlet.textSync('Tic Tac Toe', { horizontalLayout: 'full' })
  )
);

var schema = {
  properties: {
    'move': {
      type: 'number',
      description: 'Enter move as a number from 0 to 8',
      message: 'Move must be a number',
      required: true
    }
  }
};

var play = function() {
  clear();
  renderTable(game.board);
  prompt.get(schema, function (err, result) {
    console.log('Command-line input received:');
    console.log('  move: ' + result.move);
    game.mark(result.move)
    if (!game.isWinner()) {
      play();
    } else {
      renderTable(game.board);
      console.log(game.isWinner(), ' Won!');
    }
  });
}

getPlayersName(function(){
  prompt.start();
  play();
});

 

























