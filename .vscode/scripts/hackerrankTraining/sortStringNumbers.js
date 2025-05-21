/* TASK Consider an array of numeric strings where each string is a positive number with anywhere from to digits.
 * Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.
 * In the returned array, all numbers should be represented without leading zeros.
 * example: sortStringNUmber(["2", "56", "10", "001", "0"])
 */

const removeLeadingZeros = (str) => {
  const result = str.replace(/^0+/, "");
  return result === "" ? "0" : result;
};

function sortStringNUmber(data) {
  let dataFormated = [];
  for (let i = 0; i < data.length; i++) {
    dataFormated[i] = removeLeadingZeros(data[i]);
  }
  let dataSortedString = dataFormated.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
  return dataSortedString;
}
