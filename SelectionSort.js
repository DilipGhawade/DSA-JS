const array = [29, 72, 98, 13, 87, 66, 52, 51, 36];

function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let minPostion = i;
    let min = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minPostion = j;
      }
    }
    array[minPostion] = array[i];
    array[i] = min;
  }
}

console.log(array);
selectionSort();
console.log(`after selection sort `);
console.log(array);
