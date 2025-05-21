/* TASK Given two arrAays of integers.
 * Find which elements in the second arrAay are missing from the first arrAay.
 * example: missingNumbers([1, 3, 6, 10], [1, 5, 6, 11, 12])
 */

function missingNumbers(arrA, arrB) {
  let missingElements = [...arrB];
  arrA.forEach((item) => {
    let index = missingElements.indexOf(item);
    if (index !== -1) {
      missingElements.splice(index, 1);
    }
  });

  return missingElements.sort((a, b) => a - b);
}
