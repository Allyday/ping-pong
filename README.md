# Allyday's Ping Pong Game
Version 1.0.
## Starting
Start your server with ```node index.js``` & go to [http://localhost:3000](http://localhost:3000) to play the game.

## Basic Features
- [x] Make the game cover the whole browser
- [x] Add keyboard functionalities for both players, W and S for one player, Up and Down for another player.
- [x] Add players into canvas, make sure we can move players with keyboard.
- [x] Add ball to the game, pressing ```SPACE``` button should start and pause game, make sure ball bounces from boundaries.
- [x] When player scores, show scoring with console.log. And reset game.

## Bonus Todo
- [ ] Add draw text functionality to the engine. You can modify app.js for that part.
- [ ] Add score system for the game and use this drawText functionality on game.
- [ ] Add resize function the engine. With window.resize
- [ ] Make the ball round

## Notes
- [x] Make sure game has state functions like reset, start and pause. We should be able to trigger them with ```app.reset()``` or ```app.pause()```.
- [x] Make sure players or ball uses app.width and app.height values dynamicly, hard coded values will be rejected.
