class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = '';
  }

  createPhrases() {
    const arr = [new Phrase('TE A'), new Phrase('TE B')];
    return arr;
  }

  getRandomPhrase() {
    const randomPhrase = this.phrases[
      Math.floor(Math.random() * this.phrases.length)
    ];
    return randomPhrase;
  }

  startGame() {
    document.getElementById('overlay').style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction() {}

  checkForWin() {
    return Array.from(document.getElementsByClassName('letter')).every((li) =>
      li.classList.contains('show')
    );
  }

  removeLife() {
    this.missed += 1;
    // const lives = document.getElementsByClassName('tries');
    console.log(missed);

    // if (lives.length > 0) {
    //   lives[0].firstElementChild.src = 'images/lostHeart.png';
    //   lives[0].classList.remove('tries');
    // } else {
    //   console.log('Game over');
    // }

    // This method removes a life from the scoreboard, by replacing one
    // of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
    // folder) and increments the `missed` property. If the player has five missed
    // guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method.
  }

  gameOver() {
    // This method displays the original start screen overlay, and
    // depending on the outcome of the game, updates the overlay `h1` element with a
    // friendly win or loss message, and replaces the overlay’s `start` CSS class with
    // either the `win` or `lose` CSS class.
  }
}
