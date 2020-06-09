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

  checkLetter() {
    // Checks to see if letter selected by the player matches a letter in the phrase
  }

  showMatchedLetter() {
    // Reveals the letter(s) on the board that matches the
    // player's selection. To reveal the matching letter(s), select all of the letter DOM
    // elements that have a CSS class name that matches the selected letter and
    // replace each selected element's `hide` CSS class with the `show` CSS class.
  }
}
