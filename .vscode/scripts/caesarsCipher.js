/* CAESAR'S CIPHER
 * Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet,
 * just rotate back to the front of the alphabet.
 * The cipher only encrypts letters; symbols, such as -, remain unencrypted.
 */

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function isInputTextValid(cipher) {
  if (cipher.trim() === "") {
    addContentToUI(
      "Please enter a text to encrypt!",
      "card__container__output"
    );
    return false;
  }
  return true;
}

function isFactorRotationValid(factorRotation) {
  if (isNaN(factorRotation) || factorRotation === "") {
    addContentToUI(
      "Enter a valid number for the shift!",
      "card__container__output"
    );
    return false;
  }
  return true;
}

function prepareShiftedAlphabet(factorRotation) {
  let shiftedAlphabet = [...alphabet];

  for (let i = 0; i < factorRotation % 26; i++) {
    shiftedAlphabet.push(shiftedAlphabet.shift());
  }

  return shiftedAlphabet;
}

function applyCaesarCipher(textToProcess, shiftedAlphabet) {
  let result = "";

  for (let i = 0; i < textToProcess.length; i++) {
    const char = textToProcess[i];

    if (!/[a-zA-Z]/.test(char)) {
      result += char;
    } else {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
      const shiftedChar = shiftedAlphabet[index];
      result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    }
  }

  return result;
}

function caesarCipher() {
  const textToProcess = document.querySelector("#cipher").value;
  const factorRotation = parseInt(
    document.querySelector("#factorRotation").value
  );

  if (!isInputTextValid(textToProcess)) return;

  if (!isFactorRotationValid(factorRotation)) return;

  const shiftedAlphabet = prepareShiftedAlphabet(factorRotation);
  const encryptedText = applyCaesarCipher(textToProcess, shiftedAlphabet);

  addContentToUI(encryptedText, "card__container__output");
}
