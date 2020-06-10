class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = '';
  }

  createPhrases() {
    const arr = [
      new Phrase('may the force be with you'),
      new Phrase('to infinity and beyond'),
      new Phrase('say hello to my little friend'),
      new Phrase('why so serious'),
      new Phrase('you shall not pass'),
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
    this.resetGameAttributes();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  checkForWin() {
    return Array.from(document.getElementsByClassName('letter')).every((li) =>
      li.classList.contains('show')
    );
  }

  removeLife() {
    this.missed += 1;
    const lives = document.getElementsByClassName('tries');
    this.missed <= 4
      ? (lives[this.missed - 1].firstElementChild.src = 'images/lostHeart.png')
      : game.gameOver(false);
  }

  gameOver(flag) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = '';
    if (flag) {
      overlay.className = 'win';
      overlay.querySelector('h1').innerText = 'You won!';
    } else {
      overlay.className = 'lose';
      overlay.querySelector('h1').innerText = 'You lost!';
    }
  }

  resetGameAttributes() {
    const existingPhraseLetterArray = document.getElementById('phrase')
      .firstElementChild.children;

    if (existingPhraseLetterArray.length > 0) {
      Array.from(existingPhraseLetterArray).forEach((letter) => {
        letter.parentNode.removeChild(letter);
      });
    }

    const qwerty = document.getElementsByClassName('key');

    Array.from(qwerty).forEach((key) => {
      key.className = 'key';
      key.disabled = false;
    });

    const lives = document.getElementsByClassName('tries');

    Array.from(lives).forEach((key) => {
      key.firstElementChild.src = 'images/liveHeart.png';
    });
  }

  handleInteraction(button) {
    const letter = button.innerHTML;
    button.disabled = true;
    if (game.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      game.activePhrase.showMatchedLetter(letter);
      if (game.checkForWin() === true) {
        game.gameOver(true);
      }
    } else {
      button.classList.add('wrong');
      game.removeLife();
    }
  }
}
