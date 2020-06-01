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
  }

};
