// Exercise 1
const birthYear = Number(prompt("Enter your birth year"));
const age = 2024 - birthYear;

alert("You are " + age);
console.log(age);

// Exercise 2

// 1
const mph = 90;
console.log(Math.round(mph * 1.609344));

// 2
const mph = Number(prompt("Enter velocity in miles"));
const kmh = Math.round(mph * 1.609344);

alert("Velocity is " + kmh + " km/h");

// Exercise 3
const czkToEuro = 25.695;
let money = prompt("How much Euro you change");

alert("It's " + Math.round(money * czkToEuro) + " Euro");

// Exercise 4
let sms = prompt("Enter your message");
alert("Send " + Math.ceil(sms.length / 160) + " messages.");

// Exercise 5

// 1
const tempFahrenheit = Number(prompt("Enter Fahrenheit"));
const tempCelsius = Math.round(((tempFahrenheit - 32) * 5) / 9);

alert("It is " + tempCelsius + "Celsius");

//2

const tempFahrenheit = Number(prompt("Enter Fahrenheit"));
tempFahrenheit = Number(tempFahrenheit.replace(",", "."));
const tempCelsius = Math.round(((tempFahrenheit - 32) * 5) / 9);

alert("It is " + tempCelsius + "Celsius");
