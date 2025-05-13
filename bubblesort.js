const arr = [5, 1, 4, 2, 8];

function bubbleSrot() {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
console.log(`the actual array is ${arr}`);

bubbleSrot();
console.log(`after bubble sort: ${arr}`);
