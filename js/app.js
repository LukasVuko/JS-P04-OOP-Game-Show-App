let game;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
  if (e.target.className === 'key') {
    game.handleInteraction(e.target.innerText);
  }
});

document.addEventListener('keyup', (e) => {
  if (document.getElementById('overlay').style.display === 'none')
    game.handleInteraction(e.key);
});
