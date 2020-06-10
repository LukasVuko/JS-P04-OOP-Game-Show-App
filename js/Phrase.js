class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.getElementById('phrase').firstElementChild;
    [...this.phrase].map((character) => {
      const li = document.createElement('li');
      if (character != ' ') {
        li.className = `hide letter ${character}`;
        li.innerText = character;
        ul.appendChild(li);
      } else {
        li.className = 'space';
        li.innerText = ' ';
        ul.appendChild(li);
      }
    });
  }

  checkLetter(letter) {
    const boolean = document.getElementsByClassName(letter).length === 0;
    return !boolean;
  }

  showMatchedLetter(letter) {
    Array.from(document.getElementsByClassName(letter)).forEach((letter) => {
      letter.classList.remove('hide');
      letter.classList.add('show');
    });
  }
}
