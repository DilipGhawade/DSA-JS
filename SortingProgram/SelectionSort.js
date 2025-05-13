const array = [29, 72, 98, 13, 87, 66, 52, 51, 36];

function selectionSort() {
  for (let postion = 0; postion < array.length - 1; postion++) {
    let minPostion = postion;
    let min = array[postion];
    for (let i = postion + 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minPostion = i;
      }
    }
    array[minPostion] = array[postion];
    array[postion] = min;
  }
}
console.log(array);

selectionSort();
console.log(array);
