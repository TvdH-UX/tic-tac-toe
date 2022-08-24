// Search the DOM once for a certain module


// Store the gameboard inside an object
// Use a module
// Create a variable containing the board as an array
// Render the board at the start

// Rerender the board after every move
let gameBoard = (function() {
  let board = [
    ["X","X","O"],
    ["O","O","X"],
    ["X","O","X"]
  ];

  function render() {
    console.log(board);
  };

  render();
})();

// Store the players inside objects
// Use a factory

// An object to control the flow of the game
// Use a module
// Whose turn is it