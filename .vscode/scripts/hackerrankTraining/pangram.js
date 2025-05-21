/* TASK pangram
 * Return true is text consist of each letter of alphabet, if not return false
 * example:  isPangram("We promptly judged antique ivory buckles for the next prize")
 */

function isPangram(text) {
  let containLetters = [];

  for (let item of text.toLowerCase()) {
    if (item >= "a" && item <= "z") {
      containLetters.push(item);
    }
  }

  return [...new Set(containLetters)].length === 26;
}
