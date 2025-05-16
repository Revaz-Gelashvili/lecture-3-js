//                                Task 1
const callbackarrow = (callback) => {
  return "Hi";
};

console.log(callbackarrow());

//                                Task 2
const array = [1, 2, 3, 4, 5];
console.log(array);

//                                Task 3
const heterogeneousArray = [1, "string", { name: "John" }, [1, 2, 3]];
console.log(heterogeneousArray);

//                                Task 4 - 7
const studentClass = ["Nika", "Giorgi", "Ana", "Maka", "Giga"];
studentClass.splice(1, 1);
studentClass.push("Luka", "Leila");
studentClass.shift();
console.log(studentClass);

//                                Task 8
const funarray = [1, 2, 3, 4, 5];
function deleteLastElement(funarray) {
  funarray.pop();
  return funarray;
}

console.log(deleteLastElement(array));

//                                Task 9
function addCityAndReturnLength(randomArray, cities) {
  randomArray.push(cities);
  return randomArray.length;
}

const cities = ["Tbilisi", "Batumi"];
console.log(addCityAndReturnLength(cities, "Kutaisi"));
console.log(cities);

//                                Task 10
const firstArray = ["Tbilisi", "Qutaisi", "Batumi"];
const secondArray = ["Giorgi", "Revaz", "Mariam"];
function getArrays(firstArray, secondArray) {
  return firstArray.concat(secondArray);
}
console.log(getArrays(firstArray, secondArray));

//                                Task 11 - 12

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  engine: "1.8L",
  image: "https://example.com/toyota-corolla.jpg",
  country: "Japan",
  boolean: true,
  price: 20000,
};

console.log(car.brand, car.model, car.price);

//                                Task 13
function procentOfPrice(car) {
  const remains = (car.price * 20) / 100;
  return car.price - remains;
}
console.log(procentOfPrice(car)); // ფასი ფასდაკლების გათვალისწინებით

//                                Task 14
Object.assign(car, { price: 15000 });
console.log(car);

//                                Task 15
console.log(Object.keys(car));

//                                Task 16
const keysArray = Object.keys(car);
console.log(keysArray[2]);

//                                Task 17
const students = [
  {
    name: "Giorgi",
    lastName: "Baxtadze",
    age: 23,
    number: 588748934,
  },
  {
    name: "Tekla",
    lastName: "Wenguashvili",
    age: 20,
    number: 588998934,
  },
  {
    name: "Qeti",
    lastName: "Enukidze",
    age: 19,
    number: 588709934,
  },
];

console.log(students);

//                                Task 18

students.forEach((student) => {
  const values = Object.values(student);
  console.log(values[values.length - 1]);
});

//                                Task 19

students.shift();
console.log(students);

//                                Task 20
Object.assign(students[students.length - 1], { name: "Demetre", age: 25 });
console.log(students);
