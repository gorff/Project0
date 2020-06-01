console.log($)

const render = function () {
  $('.restart_game_button').on('click', function () {
    // set game back to default but keep current score.
  });
};

$(document).ready(function () {
  $('#a3').on('click', function () {
    $('#a3').css('background-color', 'red')
  });
  $('#c3').on('click', function () {
    $('#c3').css('background-color', 'green');
  });
  $('.restart_game_button').on(render());
});
