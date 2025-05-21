/* TASK Check if contains pattern
 * Remember that a subsequence maintains the order of characters selected from a sequence.
 * example:
 *      checkIfTextContainPattern("ksdfhkjsdjj", "pattern");
 *      checkIfTextContainPattern("paattefdgfdrnn", "pattern");
 */

function checkIfTextContainPattern(text, pattern) {
  let remainingText = text;

  for (let i = 0; i < pattern.length; i++) {
    let index = remainingText.indexOf(pattern[i]);
    if (index === -1) {
      return false;
    }
    remainingText = remainingText.slice(index + 1);
  }

  return true;
}
