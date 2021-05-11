const kelvin = 293; // Sets kelvin value to 293
const celsius = kelvin - 273; // Converts kelvin to celsius
let fahrenheit = celsius*1.8+32; // Converts to fahrenheit
fahrenheit = Math.floor(fahrenheit); // Rounds down to nearest integer
console.log('The temperature is ' + fahrenheit + ' Fahrenheit.');