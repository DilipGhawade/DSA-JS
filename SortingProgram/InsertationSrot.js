const arr = [85, 12, 59, 45, 72, 51];

console.time("insertationSort");
function insertationSort() {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  console.timeEnd("insertationSort");
  return arr;
}

console.log(arr);
console.log(`after insertation sort: ${insertationSort()}`);
