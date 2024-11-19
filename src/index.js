// var numbers = [3, 56, 2, 48, 5];

// Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true.

var newNum = numbers.filter(function (num) {
  return num < 10;
});
console.log(newNum);

// If we filter array using foreach we need to initialize a new empty array to store data from filtered array
var newNumbers = [];

numbers.forEach(function (num) {
  if (num > 10) {
    newNumbers.push(num);
  }
});
console.log(newNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.

var newNum = numbers.reduce(function (accumalator, currentNum) {
  return accumalator + currentNum;
});
console.log(newNum);

var num = 0;

numbers.forEach(function (currentNum) {
  return (num += currentNum);
});
console.log(num);

// Find - find the first item that matches from an array.
const newNum = numbers.find(function (num) {
  return num > 10;
});

console.log(newNum);

var reduced = [];
numbers.forEach(function (num) {
  if (num > 10) {
    reduced.push(num);
  }
});

console.log(reduced);

// FindIndex - find the index of the first item that matches.
const newNumbers = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(newNumbers);

import emojipedia from "./emojipedia";

const apple = emojipedia.map(function (obj) {
  return obj.meaning.substring(0, 100);
});

console.log(apple);

const banana = emojipedia.filter(function (obj) {
  return obj.name === "Tense Biceps";
});

console.log(banana);

const chiku = emojipedia.findIndex(function (obj) {
  return obj.name === "Person With Folded Hands";
});
console.log(chiku);
