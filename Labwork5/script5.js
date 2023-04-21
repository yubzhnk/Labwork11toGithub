//1.Створіть функцію average, яка знаходить середнє значення із довільного числа аргументів,
//використайте spread … оператор

console.log("Завдання №1");

function average(...args) {
  if (args.length === 0) {
    return 0;
  }
  let sum = args.reduce((acc, val) => acc + val, 0);
  return sum / args.length;
}


console.log(average(10, 20, 30, 40, 50)); // 30


//2.Створіть функцію values(f, low, high), яка повертає масив значень [f(low), f(low + 1), ...,
//f(high)]

console.log("\nЗавдання №2");

function values(f, low, high) {
  let result = [];
  for (let i = low; i <= high; i++) {
    result.push(f(i));
  }
  return result;
}

function square(x) {
  return x * x;
}

let result = values(square, 1, 5);
console.log(result); // [1, 4, 9, 16, 25]


//3.Своріть функцію callWithContext як приймає обєкт та функцію коллбек яка викликається з
//контекстом пережаного обєкта. Викличте цю функцію з обєктом person з полями імя та вік
//та функцією яка виведе в консоль ‘Today is ${date }! Happy birthday ${name}

console.log("\nЗавдання №3");

let person3 = {
  name: "Женя",
  age: 30
};

function callWithContext(obj, func) {
  func.call(obj);
}


function birthday() {
  let today = new Date().toLocaleDateString();
  console.log(`Today is ${today}! Happy birthday ${this.name}.`);
}

callWithContext(person3, birthday);

//4.Створіть функцію, яка повертає об’єкт з двома методами: increment і getValue. Метод
//increment має збільшувати значення, яке зберігається в замиканні, а метод getValue має
//повертати поточне значення.

console.log("\nЗавдання №4");

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getValue: function() {
      return count;
    }
  };
}
let counter = createCounter();

console.log(counter.getValue()); // 0

counter.increment();
console.log(counter.getValue()); // 1

counter.increment();
console.log(counter.getValue()); // 2


//5.Створіть функцію getGreeting яка приймає імя та повертає текстовий фрагмент типу 
//‘Hello name’. Зробіть щоб функція зберігала значення останнього виклику та якщо викликана
//знову з таким же аргументом – повертала кешовне значення

console.log("\nЗавдання №5");

function getGreeting(name) {
  if (getGreeting.cache  && getGreeting.cache.name === name) {
    return getGreeting.cache .result;
  }

  let result = `Hello ${name}`;
  getGreeting.cache  = { name, result };

  return result;
}

console.log(getGreeting("Женя")); 
console.log(getGreeting("Лекса")); 
console.log(getGreeting("Женя")); // "Hello Женя" (з кешу)


//6.Створіть функцію, яка приймає число як аргумент і повертає функцію, яка приймає інше
//число як аргумент і повертає суму двох чисел. Перевірте функцію, викликавши її з різними
//номерами.

console.log("\nЗавдання №6");

function sum(x) {
  return function(y) {
    return x + y;
  };
}

// Перевірка роботи функції
let add5 = sum(5);
console.log(add5(3)); // Виведе 8

let add10 = sum(10);
console.log(add10(7)); // Виведе 17


//7.Створіть функцію, яка приймає масив текстових фрагментів як аргумент і повертає нову
//функцію, яка приймає текстовий фрагмент як аргумент і повертає логічне значення, яке
//вказує, чи існує текстовий фрагмент у вихідному масиві. 

console.log("\nЗавдання №7");

function createSearch(arr) {
  return function(fragment) {
    return arr.includes(fragment);
  };
}

// Перевірка роботи функції
let searchInColors = createSearch(["red", "green", "blue"]);
console.log(searchInColors("red")); // Виведе true
console.log(searchInColors("purple")); // Виведе false


//8.Створіть функцію, яка приймає масив об’єктів як аргумент і повертає новий масив об’єктів,
//де певна властивість написана з великої літери. Використовуйте стрілочну функцію.


console.log("\nЗавдання №8");

let capitalizeProperty = (arr) => {
  return arr.map(obj => {
    return { ...obj, property: obj.property.charAt(0).toUpperCase() + obj.property.slice(1) };
  });
};

let arr = [
  { id: 1, property: 'apple' },
  { id: 2, property: 'banana' },
  { id: 3, property: 'cherry' }
];

let newArr = capitalizeProperty(arr);
console.log(newArr);


//9.Напишіть приклад для демонстрації функцій call, apply, bind.

console.log("\nЗавдання №9");

// Приклад використання функції call
let person9 = {
  name: 'Женя',
  age: 20,
  greet: function() {
    console.log(`Приклад використання функції call: Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

let newPerson = {
  name: 'Олександр',
  age: 25
}

person9.greet.call(newPerson); 


// Приклад використання функції apply
let numbers = [1, 2, 3, 4, 5];

let sum9 = function() {
  return Array.from(arguments).reduce((total, current) => total + current);
}

let result9 = sum9.apply(null, numbers); // Передаємо масив чисел як аргументи
console.log("Приклад використання функції apply:", result9); // Виведе 15


// Приклад використання функції bind
let dog = {
  name: 'Ліліт',
  breed: 'Лабрадор',
  bark: function() {
    console.log(`Приклад використання функції bind: ${this.name} спить!`);
  }
}

let cat = {
  name: 'Соня',
  breed: 'Сфінкс'
}

let catBark = dog.bark.bind(cat); // Прив’язуємо контекст до cat
catBark(); 

//10.Створіть функцію яка приймає коллбек – викликає його з переданими аргументами та
//виводить в консоль імя функції, аргументи та час коли функція викликана.

console.log("\nЗавдання №10");

function myFunction(callback) {
  const now = new Date();
  const args = Array.prototype.slice.call(arguments, 1);
  console.log(`Function ${callback.name} called with args ${args} at ${now}`);
  callback.apply(null, args);
}

function myCallback(x, y) {
  console.log(`Callback called with args ${x} and ${y}`);
}

myFunction(myCallback, 1, 2);

//11.Створіть функцію яка кешує останній виклик на 10 секунд.

console.log("\nЗавдання №11");
function cachedFunc() {
  let lastArgs = null;
  let lastResult = null;
  let expirationTime = null;
  
  function isCacheExpired() {
    return expirationTime === null || Date.now() >= expirationTime;
  }
  
  return function(arg) {
    if (!isCacheExpired() && arg === lastArgs) {
      console.log("Отримання результату з кешу...");
      return lastResult;
    }
    
    console.log("Обчислення нового результату...");
    lastArgs = arg;
    lastResult = arg * 2;
    expirationTime = Date.now() + 10000; 
    return lastResult;
  }
}

const cachedDouble = cachedFunc();
console.log(cachedDouble(5)); // "Обчислення нового результату..." 10
console.log(cachedDouble(5)); // "Отримання результату з кешу..."  10
setTimeout(() => console.log(cachedDouble(5)), 11000); // "Обчислення нового результату..."  10

