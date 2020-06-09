class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = '';
  }

  createPhrases() {
    const arr = [
      new Phrase('Life if like a box of chocolates'),
      new Phrase('You shall not pass'),
      new Phrase('The things you own end up owning you'),
      new Phrase('Are you not entertained'),
      new Phrase('This is sparta'),
    ];
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
    //This method checks to see if the player has revealed all of the letters in the active phrase.
  }

  removeLife() {
    //This method removes a life from the scoreboard, by replacing one
    // of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
    // folder) and increments the `missed` property. If the player has five missed
    // guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method.
  }

  gameOver() {
    //This method displays the original start screen overlay, and
    // depending on the outcome of the game, updates the overlay `h1` element with a
    // friendly win or loss message, and replaces the overlay’s `start` CSS class with
    // either the `win` or `lose` CSS class.
  }
}
