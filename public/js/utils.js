function calcMovementVector(angle) {
  return {
    x: Math.cos(angle),
    y: Math.sin(angle),
  };
}

function switchColors(gameIs, ball, p1, p2) {
  if (gameIs == CONST.PLAYING) {
    ball.color = '#f8d212'; // yellow
    p1.color = '#e22a32'; // red
    p2.color = '#37595b'; // green
  } else {
    /* greyscale */
    ball.color = '#ccc';
    p1.color = '#777';
    p2.color = '#777';
  }
}
