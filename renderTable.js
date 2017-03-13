var Table = require('cli-table');

var chars = { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
       , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
       , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
       , 'right': '║' , 'right-mid': '╢' , 'middle': '│' };

var renderTable = function (rows) {
  var table = new Table(chars);
  // table is an Array, so you can `push`, `unshift`, `splice` and friends 
  var table = new Table(chars);
  table.push(...rows);
  console.log(table.toString()); 
}

module.exports = renderTable;
