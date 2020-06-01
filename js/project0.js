const checkForWin = function () {
  // if 3 in a row, strike through & display "X Wins!" etc
};


const render = function () {
  // set game back to default but keep current score.
  // $(".start_game").addClass("animate__animated animate__bounce");
  // check if
  $('#buttonX').addClass('playerShadow');
  $('#buttonO').removeClass('playerShadow');
};

$(document).ready(function () {
  // render first to add playershadow etc
  render();

  // if any td's are clicked
  $('span').on('click', function () {
    if (!(this.className.includes('xmark')) && !(this.className.includes('circle'))) {
      let xOrO = game.naughtOrCross();
      // game.test($('td').index(this)); // get index of td that's been clicked.
      $(this).addClass(`${xOrO}`).slideDown('slow');
    };
  });

  // determine player 1's character
  $('#buttonX').on('click', function () {
    if (turnCount <= 0) {
      game.whosFirst('buttonX');
      $('#buttonX').addClass('playerShadow');
      $('#buttonO').removeClass('playerShadow');
    };
  });

  $('#buttonO').on('click', function () {
    if (turnCount <= 0) {
      game.whosFirst('buttonO');
      $('#buttonO').addClass('playerShadow');
      $('#buttonX').removeClass('playerShadow');
    };
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
    $("td span").css('background', 'none');
    $("td span").removeClass('xmark circle');
    // $('xmark circle').remove();
    $(".start_game").addClass("animate__animated animate__bounce");
    // $('td').unbind();
    turnCount = 0;
  });
  // render();
});
