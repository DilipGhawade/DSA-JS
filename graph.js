// Vertices
//vertices

const vertices = ["A", "B", "C", "D"];

const size = vertices.length;

//step1 : create a 2D array ( matrix)

const matrix = Array.from({ length: size }, () => Array(size).fill(0));

//Step  2: Add directed edges : A + B , B + C , C+D

matrix[0][1] = 1;

matrix[1][2] = 1;

matrix[2][3] = 1;

console.log("Graph (Adjacenccy Matric) :");

console.log("   " + vertices.join(" "));

matrix.forEach((row, i) => {
  console.log(vertices[i], row.join("  "));
});
