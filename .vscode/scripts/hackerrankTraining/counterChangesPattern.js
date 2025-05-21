/*TASK counter changes from pattern
 * A space explorer's ship crashed on Mars!
 * They send a series of SOS messages to Earth for help.
 * Letters in some of the SOS messages are altered by cosmic radiation during transmission.
 * Given the signal received by Earth as a string,
 * determine how many letters of the SOS message have been changed by radiation.
 * example: counterChangesFromPattern("KOSPOSSHH", "SOS");
 */

function counterChangesFromPattern(message, pattern) {
  let result = 0;
  const patternLength = pattern.length;

  for (let i = 0; i < message.length; i += pattern.length) {
    let substringData = message.substring(i, i + patternLength);

    for (let j = 0; j < substringData.length; j++) {
      if (substringData[j] !== pattern[j]) {
        result++;
      }
    }
  }

  return result;
}
