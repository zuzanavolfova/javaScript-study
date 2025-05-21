/* TASK Insert element into sorted list
 * el: number to be insert.
 * arr: sorted array.
 * example: insertionToSortArray(5, [1, 3, 5, 7]).
 */

function insertionToSortArray(el, arr) {
  let sortedArray = [...arr];
  let i = sortedArray.length - 1;

  while (i >= 0 && sortedArray[i] > el) {
    sortedArray[i + 1] = sortedArray[i];
    i--;
  }

  sortedArray[i + 1] = el;

  return sortedArray;
}