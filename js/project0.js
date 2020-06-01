console.log($)

const checkForWin = function () {
  // if 3 in a row, strike through & display "X Wins!" etc
};


const render = function () {
  // set game back to default but keep current score.
  // $(".start_game").addClass("animate__animated animate__bounce");
  // check if
};

$(document).ready(function () {

  // if any td's are clicked
  $('td').on('click', function () {
    if (this.className !== 'xmark' && this.className !== 'circle') {
      let xOrO = game.naughtOrCross();
      // game.test($('td').index(this)); // get index of td that's been clicked.
      $(this).addClass(`${xOrO}`).slideDown('slow');
    };
  });

  // determine player 1's character
  $('#buttonX').on('click', function () {
    game.whosFirst('buttonX');
  });

  $('#buttonO').on('click', function () {
    game.whosFirst('buttonO');
  });
  //
  // $('#a3').on('click', function () {
  //   $('#a3').addClass('xmark').slideDown('slow');
  // });
  //
  // $('#b3').on('click', function () {
  //   $('#b3').addClass('xmark').slideDown('slow');
  // });
  //
  // $('#c3').on('click', function () {
  //   $('#c3').addClass('circle').slideDown('slow');
  // });

  // Restart Game
  $('.restart_game_button').on('click', function () {
    $("td").css('background', 'none');
    $("td").removeClass('xmark circle');
    $(".start_game").removeClass("animate__animated animate__bounce");
    render();
  });
  // render();
});
