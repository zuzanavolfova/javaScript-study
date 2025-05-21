/* TASK Given two arrAays of integers.
 * Find which elements in the second arrAay are missing from the first arrAay.
 * example: missingNumbers([1, 3, 6, 10], [1, 5, 6, 11, 12])
 */

function missingNumbers(arrA, arrB) {
  let arrBCopy = [...arrB];

  for (let i = 0; i < arrA.length; i++) {
    let index = arrBCopy.indexOf(arrA[i]);
    if (index !== -1) {
      arrBCopy.splice(index, 1);
    }
  }

  return arrBCopy.sort((a, b) => a - b);
}
