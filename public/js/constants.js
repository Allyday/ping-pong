const CONST = {
  // IDs
  player1: 'player-1',
  player2: 'player-2',
  ball: 'ball',
  // sizing
  playerWidth: 0.015,
  playerHeight: 0.2,
  playerPadding: 0.005,
  ballSize: 0.01,
  // movement
  initialBallVelocity: 8,
  initialPlayerVelocity: 8,
  maxBounceAngle: Math.PI / 3, // 60 degrees
  acceleration: 1.1,
  // states
  NEW_GAME: 'NEW_GAME',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  // others
  up: 'up',
  down: 'down',
};
