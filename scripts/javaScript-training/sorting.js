//TASK sort the array and print the array after each swap operation
function sorting(n, arr) {
  let newArray = arr;
  for (let i = 0; i < n - 1; i++) {
    if (newArray[i] > newArray[i + 1]) {
      [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
      for (let j = i; j > 0; j--) {
        if (newArray[j] < newArray[j - 1]) {
          [newArray[j], newArray[j - 1]] = [newArray[j - 1], newArray[j]];
        }
      }
    }
    console.log(newArray.join(" "));
  }
}

function sorting2(n, arr) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    for (j; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
    console.log(arr.join(" "));
  }
}
