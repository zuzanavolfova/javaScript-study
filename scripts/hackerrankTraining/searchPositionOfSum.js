/* TASK search position of sum
 * Get total summary and array of numbers. Return position of numbers which sum is equal to summary.
 * summary: number
 * arr: array of numbers
 * example: findPositionOfSum(8, [1, 2, 3, 4, 5]))
 */

function findPositionOfSum(m, arr) {
  let result = [];

  for (let j = 0; j < arr.length - 1; j++) {
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[j] + arr[i] === m) {
        result.push([j + 1, i + 1]);
      }
    }
  }
  return result;
}
