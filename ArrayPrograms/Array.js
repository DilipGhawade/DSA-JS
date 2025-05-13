// Write the program to find the missing number in given array

const array = [1, 2, 4, 6, 3, 7, 8];

function findMissingNumber() {
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let acctualSum = 0;
  for (let i = 0; i < array.length; i++) {
    acctualSum += array[i];
  }
  return expectedSum - acctualSum;
}
// console.log(`The Given Array is: ${array}`);

// console.log(`The missing number in give array is: ${findMissingNumber()}`);

// the array representation using literals
let furits = ["apple", "mango", "banana"];
// console.log(furits);
// Array Representation using new Keyword

let fruits = new Array("Apple", "Mango", "Banana");
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// Positive indices Accessing the elements form the start
// Javascript dose not support negative indices
// To access element in reverse order we can use the length property.

// for example accessing the element by using positive indices

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// accessing the element reverse order using the length

// console.log(fruits[fruits.length - 1]);
// console.log(fruits[fruits.length - 2]);
// console.log(fruits[fruits.length - 3]);

// the array inbuilt method or function uses

// console.log(`the original array is : ${fruits}`);

// console.log(`the reversed array is : ${fruits.reverse()}`);

// 2D array
let score = [
  ["Bar", 20, 60, "A"],
  ["Foo", 10, 52, "B"],
  ["Joey", 5, 24, "F"],
  ["John", 28, 43, "A"],
];

// console.log(score);

// initialization of 2D Array using for loop

// let sample = [];
// let row = 3;
// let col = 3;
// let h = 0;

// for (let i = 0; i < row; i++) {
//   sample[i] = [];
//   for (let j = 0; j < col; j++) {
//     sample[i][j] = h++;
//   }
// }
// console.log(sample);

// traversing 2d array

// const twoDarray = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (let i = 0; i < twoDarray.length; i++) {
//   for (let j = 0; j < twoDarray[i].length; j++) {
//     console.log(`Element at (${i}, ${j})  ${twoDarray[i][j]}`);
//   }
// }

// The Metrix Addition

function matrixAddition(matrixA, matrixB) {
  const reusult = [];

  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    reusult.push(row);
  }
  return reusult;
}

const matrixA = [
  [1, 2],
  [3, 4],
];
const matrixB = [
  [5, 6],
  [7, 8],
];

const marixAddResult = matrixAddition(matrixA, matrixB);
console.log(marixAddResult);
