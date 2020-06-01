console.log($)

const render = function () {
  // set game back to default but keep current score.
  $(".start_game").addClass("animate__animated animate__bounce");
};

$(document).ready(function () {
  $('#a3').on('click', function () {
    $('#a3').addClass('xmark').slideDown('slow');
  });
  $('#b3').on('click', function () {
    $('#b3').addClass('xmark').slideDown('slow');
  });
  $('#c3').on('click', function () {
    $('#c3').addClass('circle').slideDown('slow');
  });
  $('.restart_game_button').on('click', function () {
    $("td").css('background', 'none');
    $("td").removeClass('xmark circle');
    $(".start_game").removeClass("animate__animated animate__bounce");
    render();
  });
  // render();
});
