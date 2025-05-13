const hashMap = new Map();
hashMap.set("key1", "value1");
hashMap.set("key2", "value2");
hashMap.set("key3", "value3");
hashMap.set("key4", "value4");
console.log(hashMap.keys());
console.log(hashMap.values());
let value1 = hashMap.get("key1");
console.log(`value 1 is  => ${value1}`);
const size = hashMap.size;
console.log(`the size of hashmap is => ${size}`);
const deletefirst = hashMap.delete("key1");
console.log(deletefirst);

const studentMarks = new Map();

studentMarks.set("dilip", 90);
studentMarks.set("om", 78);
studentMarks.set("shyam", 45);
studentMarks.set("ram", 89);

if (studentMarks.has("omm")) {
  console.log(`the student has a key `);
} else {
  console.log("the dosent have a kye");
}

for (let [name, mark] of studentMarks) {
  console.log(`the student name is ${name} : mark is ${mark}`);
}
