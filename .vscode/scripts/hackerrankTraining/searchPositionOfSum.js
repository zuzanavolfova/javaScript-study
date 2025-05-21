/* TASK search position of sum
 * Get total summary and array of numbers. Return position of numbers which sum is equal to summary.
 * summary: number
 * arr: array of numbers
 * example: findPositionOfSum(8, [1, 2, 3, 4, 5]))
 */

function findPositionOfSum(m, arr) {
  let result = [];
  let arrData = [...arr];

  for (let j = 0; j < arrData.length - 1; j++) {
    for (let i = j + 1; i < arrData.length; i++) {
      if (arrData[j] + arrData[i] === m) {
        result.push([j + 1, i + 1]);
      }
    }
  }
  return result;
}
