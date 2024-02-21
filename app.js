// Importing the utilities file
const utils = require('./utilities');

// Calling functions from utilities file
utils.welcomeMessage('John', 'Doe');

const celsius = 30;
console.log(`${celsius} Celsius is equal to ${utils.convertUnit(celsius, 'celsiusToFahrenheit')} Fahrenheit`);

const minutes = 120;
console.log(`${minutes} minutes is equal to ${utils.convertUnit(minutes, 'minutesToHours')} hours`);

const num = 5;
console.log(`Factorial of ${num} is ${utils.factorial(num)}`);

utils.advancedFunction();