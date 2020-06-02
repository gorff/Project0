let xMarksTurn = true;
let turnCount = 0; // start from turn 1


const game = {  // use an object to keep code neatly grouped...

  // See if x or o is first player
  whosFirst: function (input) {
    if (input === 'buttonO') {
      xMarksTurn = false
    } else if (input === 'buttonX') {
      xMarksTurn = true
    } else { // means x is default first player
      xMarksTurn = true
    };
    return // return something here
  },

  // figure out if need to return x or o
  naughtOrCross: function (index) {
    if (xMarksTurn === true) { // if player 2's turn "Crosses"
      console.log('xmark');
      turnCount++;
      xMarksTurn = false;
      return 'xmark'
    } else { // player 1's turn "Naughts"
      console.log('circle');
      turnCount++;
      xMarksTurn = true;
      return 'circle'
    }
  },

  // function to check if a,b,c match, therefore a win
  // equals: function (a,b,c) {
  //   return(a === b && b === c && a !== '')
  // },

  // Keep index of moves to see who won/draw
  checkWinOrDraw: function (index, ) {
    currentMoves = {}
    let winner = null;
    // check horizontal winners
    currentMoves += index
    for (let i = 0; i < 3; i++) {
      if (index)
    }
    // check vertical winners

    // check diagonal winners (left to right & right to left)

    // if winner is null && no more moves, console.log 'Tie'
  }

};
