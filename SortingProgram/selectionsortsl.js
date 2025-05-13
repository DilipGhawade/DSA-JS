function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const arr = [29, 72, 98, 13, 87, 66, 52, 51, 36];

console.log("The Original Array is : ", arr);
console.log(`After Selection Sort array is : ${selectionSort(arr)}`);
