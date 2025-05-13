const employee = new Map();

employee.set("Om", 40000);
employee.set("Ram", 45000);
employee.set("Shyam", 30000);
employee.set("Dipak", 20000);
employee.set("Divya", 340000);
employee.set("Disha", 12000);
employee.set("Yogesh", 80000);

const containsKey = employee.has("Om");
console.log(`is key present ${containsKey}`);

console.log("Current Employee is");
printEmployeeData();

employee.delete("Om");
console.log("After Exit One Employee the total employee is");
printEmployeeData();
console.log("Upadating the Salary of Dipak");
employee.set("Dipak", 2600);
console.log(
  "The salary of dipak is update and the current salary is => ",
  employee.get("Dipak")
);
console.log("Delete Employee by using key");
deleteEmployee("Shyam");
console.log("After Deleted Shyam the list is ");
printEmployeeData();

console.log("Delete All Employee or Clear All ");
deleteAllEmployee();
console.log("After Deleting all employee ");
printEmployeeData();

function printEmployeeData() {
  if (employee.size === 0) {
    console.log("No Employee Found!!");
    return;
  }
  for ([name, salary] of employee) {
    console.log(`Name: ${name} Salary : ${salary}`);
  }
}

function deleteEmployee(key) {
  return employee.delete(key);
}
function deleteAllEmployee() {
  for ([empName, salary] of employee) {
    employee.delete(empName);
  }
}
