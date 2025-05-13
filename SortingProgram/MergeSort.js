function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let leftArray = mergeSort(left);
  let rightArray = mergeSort(right);
  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex++]);
    } else {
      result.push(rightArray[rightIndex++]);
    }
  }
  return result.concat(
    leftArray.slice(leftIndex).concat(rightArray.slice(rightIndex))
  );
}
// Measure execution time using console.time and console.timeEnd console.time('mergeSort');
const arr = [5, 2, 4, 1, 3];
const sortedArray = mergeSort(arr);
console.timeEnd("mergeSort");
console.log(sortedArray); // Output: [1, 2, 3, 4, 5]
// function mergeSort( arr ) {

//     if ( arr.length <= 1 ) return arr; // Base case

//     let mid = Math.floor( arr.length / 2 );

//     let left = mergeSort(arr.slice(0,mid)) ; // Divide Left

//     let right = mergeSort( arr.slice(mid)); // Divide right

//     return merge (  left , right) ; // Merge sorted halves

// }

// function merge ( left , right) {

//     let result = [] , i = 0 , j = 0;

//     while ( i < left.length && i < right.length ) {

//         if ( left[i] < right [j] ){

//             result.push(left[i++]);

//         } else {

//             result.push(right[j++])

//         }

//     }

//     return result.concat(left.slice(i).concat(right.slice(j)));

// }
