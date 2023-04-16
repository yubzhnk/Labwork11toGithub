// 1. Виведіть число згенероване випадковим чином

let randNumb = Math.floor(Math.random() * 1000); 
console.log(randNumb); 


// 2. Створити змінні базових типів, виведіть їх на екран. 


// змінна типу number (число)
let exempleNumber = 20;
console.log(exempleNumber); 

// змінна типу string (рядок)
let exempleString = "Юлія";
console.log(exempleString); 

// змінна типу boolean (логічний тип)
let boolean = true;
console.log(boolean); 

// змінна типу null (пусте значення)
let empty = null;
console.log(empty); 

// змінна типу undefined (невизначене значення)
let value;
console.log(value); 

// змінна типу BigInt (велике число)
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); 


// 3. Збережіть суму двох чисел і збережіть її у третю змінну, виведіть її на екран.

let num1 = 50;
let num2 = 50;
let sum = num1 + num2;
console.log(sum); 

// 4. Cтворіть три діалогових вікна з alert(), prompt(), confirm(). 


alert("Це повідомлення з діалоговим вікном Alert!");


let name = prompt("Будь ласка, введіть ваше ім'я:");
alert(`Вас звуть, ${name}!`);


let question = confirm("Чи хочете Ви відвідати наш сайт?");
if (question) {
  alert("Супер!");
} else {
  alert("Дуже прикро...");
}

// 5. Запитайте у користувача його вік. Виведіть фразу “Ваш вік ____” 

let age = prompt("Скільки вам років?");
alert(`Ваш вік: ${age}`);

// 6. Ввести кількість купленого товару, ціну за одиницю. Виведіть суму покупки.

let count = prompt("Введіть кількість купленого товару:");
let price = prompt("Введіть ціну за одиницю товару:");
let total = count * price;
alert(`Сума покупки: ${total}`);

// 7. Введіть число – визначте чи воно від’ємне. 

let number = prompt("Введіть число:");
switch (true) {
  case (number < 0):
    alert("Це від'ємне число");
    break;
  case (number === 0):
    alert("Це нуль");
    break;
  default:
    alert("Це додатнє число");
    break;
}

// 8. Введіть номер дня тижня, виведіть його назву

const week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];

const dayNumber = +prompt("Введіть номер дня тижня від 1 до 7:");

if (dayNumber >= 1 && dayNumber <= 7) {
  const dayName = week[dayNumber - 1];
  alert(`День тижня: ${dayName}`);
} else {
  alert("Некоректний номер дня тижня!");
}


// 9. Виведіть таблицю множення числа 6. 

for (let i = 1; i <= 10; i++) {
  console.log(`6 x ${i} = ${6 * i}`);
}


// 10. Задайте одномірний масив n=5. Виведіть квадрат третього числа, суму першого і останнього елемента суму квадратів від’ємних елементів.

let n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = Math.floor(Math.random() * 21) - 10;
}

let squareNumb3 = arr[2] ** 2;
let sumFirstAndLast = arr[0] + arr[n-1];

let sumSquareNegNumb = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] < 0) {
    sumSquareNegNumb += arr[i] ** 2;
  }
}

console.log(`Масив: ${arr}`);
console.log(`Квадрат третього числа: ${squareNumb3}`);
console.log(`Сума першого і останнього елемента: ${sumFirstAndLast}`);
console.log(`Сума квадратів від'ємних елементів: ${sumSquareNegNumb}`);


// 11. Створіть об’єкт машина. Поля: ім’я власника, назва моделі, об’єм двигуна. Створіть масив з кількома об’єктами, виведіть машину з мінімальним об’ємом двигуна. 

let cars = [
  {owner: "Євген", model: "Toyota", engine: 1.6},
  {owner: "Софія", model: "Honda", engine: 2.8},
  {owner: "Юлія", model: "Skoda", engine: 1.9},
  
];

let minEngine = cars[0]; // Припустимо, що перша машина має мінімальний об'єм двигуна

for (let i = 1; i < cars.length; i++) {
  if (cars[i].engine < minEngine.engine) {
    minEngine = cars[i];
  }
}

console.log(`Машина з мінімальним об'ємом двигуна: ${minEngine.model} \nОб'єм двигуна: ${minEngine.engine} \nВласник: ${minEngine.owner}`);

// 12. Введіть 4 числа, Знайти max{min(a, b), min(c, d) 

let a = prompt("Введіть число a:");
let b = prompt("Введіть число b:");
let c = prompt("Введіть число c:");
let d = prompt("Введіть число d:");

let minAB = Math.min(a, b);
let minCD = Math.min(c, d);
let result = Math.max(minAB, minCD);

console.log(`max{min(${a}, ${b}), min(${c}, ${d})} = ${result}`);



// 13. Задайте слово, виведіть його довжину та запишіть його в зворотному порядку.

let word = prompt("Введіть слово:");

let length = word.length;
console.log("Довжина слова: " + length);

let reversedWord = word.split("").reverse().join("");
console.log("Слово у зворотньомі порядку: " + reversedWord);