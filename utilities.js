// utilities.js

// First Function
function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function
function convertUnit(value, unit) {
    switch(unit) {
        case 'celsiusToFahrenheit':
            return (value * 9/5) + 32;
        case 'fahrenheitToCelsius':
            return (value - 32) * 5/9;
        case 'minutesToHours':
            return value / 60;
        case 'hoursToMinutes':
            return value * 60;
        default:
            return null;
    }
}

// Third Function
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Fourth Function (just a placeholder)
function advancedFunction() {
    console.log("This is an advanced function.");
}

module.exports = {
    welcomeMessage,
    convertUnit,
    factorial,
    advancedFunction
};