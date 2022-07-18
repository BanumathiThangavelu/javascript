//array sample
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//join two arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children);
console.table(children);

//join three arrays
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin"];
const childrens = arr3.concat(arr4, arr5);
console.table(childrens);

//Concatenate nested arrays
const a1 = [1, 2, [3, 4]];
const a2 = [[5, 6], 7, 8];
const a3 = a1.concat(a2);
console.log(a3);
console.table(a3);

//array constructor
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1 = fruits.constructor;
console.log(text1);

//creating array using constructor
let construc = new Array("Banu", 30, true, { m1: 100, m2: 45, m3: 67 });
console.log(construc);
console.table(construc);

//fill
//1.fill all elements
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.fill("Kiwi");
console.log(fruit);

//2.fill last two elements
fru = ["Banana", "Orange", "Apple", "Mango"];
fru.fill("Kiwi", 2, 4);
console.log(fru);

//filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);

//find
const age_1 = [3, 30, 16, 40, 50];
const result_1 = age_1.find(checkAdult);

function checkAdult(age) {
  return age > 18;
}
console.log(result_1);

//findindex
const num = [10, 3, 18, 20];

y = num.findIndex(even);

function even(number) {
  return number % 2 == 0;
}
console.log(y);

//forEach-iterate each value
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.forEach((value) => {
  console.log(value);
});

number.forEach((value, index) => {
  console.log("Index:" + index, "value:" + value);
});

const mark = [
  { m1: 20, m2: 45, m3: 60 },
  { m1: 25, m2: 50, m3: 61 },
  { m1: 90, m2: 44, m3: 65 },
  { m1: 60, m2: 87, m3: 63 },
  { m1: 80, m2: 98, m3: 76 },
];
mark.forEach((value) => {
  console.log(value.m1);
});
