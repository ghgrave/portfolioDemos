const placeholder = "_";

// sets up letters to be guessed
export const resetAlphabet = (list) => {
  let newLetterArray = [];
  list.split("").forEach((el) => {
    let letterObject = {
      letter: el.toUpperCase(),
      available: true,
    };
    newLetterArray.push(letterObject);
  });
  return newLetterArray;
};

// does the actual replacing of underscores
const replace = (value, index, replacement) => {
  return (
    value.substr(0, index) +
    replacement +
    value.substr(Number(index) + replacement.length)
  );
};

// replaces the underscores with letters
export const replaceGuessedLetters = (letter, tempPuzzle, maskedPhrase) => {
  let tempPhrase = tempPuzzle.toUpperCase();
  var displayPhrase = maskedPhrase;
  let letterIndexes = [];
  // finds the indices that match the chosen letter
  for (let x in tempPhrase) {
    if (tempPhrase[x].toUpperCase() === letter.toUpperCase()) {
      letterIndexes.push(x);
    }
  }

  // uses the indices to replace underscores with chosen letter
  letterIndexes.forEach((index) => {
    displayPhrase = replace(displayPhrase, index, letter);
  });
  return displayPhrase;
};

// masks the chosen phrase converting letters into underscores
export const maskPhrase = (phrase) => {
  // console.log('Inside maskPhrase function: ', phrase)
  let tempPhrase = phrase.slice().toUpperCase();
  var displayPhrase = ''
    for(let i = 0; i < tempPhrase.length; i++){
      displayPhrase += tempPhrase[i].charCodeAt() < 65 || tempPhrase[i].charCodeAt() > 90
      ? tempPhrase[i]
      : placeholder
    }
  return displayPhrase;
}
