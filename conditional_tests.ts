// Assignment# 23

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test
// and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car : string = 'subaru';

// 5 True conditions
// Test#1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test#2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test#3
console.log("Is car != 'Suzuki'? I predict True.");
console.log(car != 'Suzuki');

// Test#4
console.log("Is car !== 'Toyota'? I predict True.");
console.log(car !== 'Toyota');

// Test#5
console.log("Is car.upper case == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

// 5 False conditions

// Test#6
console.log("Is car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');

// Test#7
console.log("Is car === 'SUBARU'? I predict False.");
console.log(car === 'SUBARU');

// Test#8
console.log("Is car === 'Truck'? I predict False.");
console.log(car === 'Truck');

// Test#9
console.log("Is car === 'Bus'? I predict False.");
console.log(car === 'Bus');

// Test#10
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');




