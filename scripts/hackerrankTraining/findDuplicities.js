/* TASK find how meny duplicates are in the array
 */

function findDuplicities(arr) {
  let array = [...arr];
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        result++;
        break;
      }
    }
  }

  return result;
}
