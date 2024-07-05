
// const colors = ["red", "yellow", "blue", "green", "orange"];
// const newColorArray = [...colors, "gogi", "togi"];
// console.log(newColorArray);

// PURE functions
// Write a function birthday() to take a person’s name and age in an object and then increase the
// age by 1. Return the updated object.
// const person = { mother: "mom", age: 32 };
// function birthday(person) {
//   return { ...person, age: person.age + 1 };
// }
// const after = birthday(person);
// console.log(after);
// console.log(person === after);

// Write an ES6 function increaseStock() to take a products’s name and quantity in an object and
// then increase the quantity by 5.

// Given an array of numbers, return a new array with square root of each number in it.
// const numbers = [1, 4, 9];
// const sq = (num) => num * num;
// const newArr = numbers.map(sq);
// console.log(newArr);

// const stringsArray = ["neoG", "coding", "programming"];
// const ll = (str) => str.length;
// const getLength = (stringsArray) => stringsArray.map(ll);
// console.log(getLength(stringsArray));
// const arrofobj = [{ name: "tanay" }, { name: "chinmay" }, { name: "akansha" }];
// const func = (arrofobj) => arrofobj.map((obj) => obj.name);
// console.log(func(arrofobj));

// FILTER
// const numbers = [1, 3, 5, 2, 22, 11, 9];
// const isOdd = (num) => num % 2 != 0;
// console.log(isOdd(5));
// // to use filter, a callback should return boolean
// const oddNumbersOnly = numbers.filter(isOdd);
// console.log(oddNumbersOnly);

// Given an array, return an array with only numbers divisible by 10.
// const arr = [5, 20, 15, 40, 3, 30, 11];
// const op = (num) => num % 10 === 0;
// const divby10 = (arr) => arr.filter(op);
// console.log(divby10(arr));

// Write an ES6 function that returns an array with no number less than 10 in it.
// const arr1 = [2, 20, 3, 30, 4, 40, 50, 5];
// const op1 = (num) => num >= 10;
// const greaterthan10 = (arr1) => arr.filter(op1);
// console.log(greaterthan10(arr1));

// FIND
// used to find the first element in an array that satisfies a certain condition.
// challenge
// syntax
// find((element) => {
/* … */
//})
//find((element, index) => {
/* … */
//})
//array.find(function(element, index)); COPY
// element => the current element of the array.
// index => the index of the current element
// returns the first element in the array that satisfies the condition, otherwise undefined
// Write an ES6 function that takes an array, and returns the first even number in the array.
// const newnum = [5, 12, 8, 13, 44];
// const isEven = (num) => num % 2 === 0;
// const firstEven = (newnum) => newnum.find(isEven);
// console.log(firstEven(newnum));
