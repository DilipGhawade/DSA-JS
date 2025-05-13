const arr = [5, 1, 4, 2, 8];

function bubbleSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
console.log(`The Original Array is: ${arr}`);
bubbleSort();
console.log(`After Applied the bubble sort the array is: ${arr}`);
