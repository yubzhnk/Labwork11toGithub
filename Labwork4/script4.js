// 1. Створіть масив persons та додайте в нього 5 обєктів типу { name: ‘John’, age: 23, city:
// ‘Boston’}. Для масиву persons встановіть властивості groupName=’A’, teacher=’Joan Doe’,
// year=’2023’. З допомогою різних версій циклу for виведіть елементи масиву та властивості
// масиву
console.log("Завдання 1");
let persons = [
  john = { name: "John", age: 21, city: "Boston" },
  alex = { name: "Alex", age: 20, city: "San Francisco" },
  anna = { name: "Anna", age: 19, city: "New York City" },
  sasha = { name: "Sasha", age: 18, city: "Las Vegas" },
  sophia = { name: "Sophia", age: 18, city: "Los Angeles" }
];

persons.groupName = "A";
persons.teacher = "Joan Doe";
persons.year = "2023";

console.log("Виведення елементів масиву за допомогою for:");
for (let i = 0; i < persons.length; i++) {
   console.log(`Name: ${persons[i].name}, Age: ${persons[i].age}, City: ${persons[i].city}`);
}

console.log("\n");
console.log("Виведення властивостей масиву за допомогою for:");
for (let i = 0; i < persons.length; i++) {
  console.log(`Group Name: ${persons.groupName}, Teacher: ${persons.teacher}, Year: ${persons.year}\n`);
 }

console.log("\n");
console.log("Виведення елементів масиву за допомогою for...of:");
for (let person of persons) {
  console.log(person);  
}

console.log("\n");
console.log("Виведення властивостей масиву за допомогою for...of:");
for (let person of persons) {
console.log(`Group Name: ${persons.groupName}, Teacher: ${persons.teacher}, Year: ${persons.year}\n`);
}


// 2. Створіть обєкт defaults призначений для збереження налаштувань програми який містить
// поля mode=test, debugLevel=error, logFolder=root. Створіть обєкт userSetting який містить
// поля mode=production, debugLevel=trace. Створіть функцію яка прийме як аргументи дані
// два обєкти та обєднає властивості цих двох обєктів в один обєкт надаючи пріоритет
// властивостям з обєкта userSetting. Запропонуєти як мінімум 3 способи для вирішення цієї
// задачі
console.log("\nЗавдання 2");
let defaults = {
  mode: "test",
  debugLevel: "error",
  logFolder: "root",
};

let userSettings = {
  mode: "production",
  debugLevel: "trace",
};

function mergeSettings(defaults, userSettings) {
  return { ...defaults, ...userSettings };
}

let mergedSettings = mergeSettings(defaults, userSettings);
console.log("Перший спосіб:", mergedSettings);

function mergeSettings2(defaults, userSettings) {
  return Object.assign({}, defaults, userSettings);
}

const mergedSettings2 = mergeSettings2(defaults, userSettings);
console.log("Другий спосіб:", mergedSettings2);


// 3. Для обєкта person із завдання 1 додайте можливість отримати рік народження не додаючи
// додаткової властивості до цього обєкта. Зробіть дане поле доступним тільки для читання.

console.log("\nЗавдання 3");
let person1 = {
  name: "John",
  age: 21,
  city: "Boston",
  get birth() {
    const yearNow = new Date().getFullYear();
    return yearNow - this.age;
  }
};

console.log("Рік народження: " + person1.birth); 


// 4. Якими способами можна об'єднати два масиви?
 
console.log("\nЗавдання 4");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log("Перший масив: " + arr1 + "\nДругий масив: " + arr2);

console.log("Перший спосіб: "); 
let arr3 = arr1.concat(arr2);
console.log(arr3); 

console.log("Другий спосіб: "); 
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);


// 5. Напишіть алгоритм який перетворить масив persons у масив текстових фрагментів типу
// ’John from Boston born in 2000’

console.log("\nЗавдання 5");
let result5 = persons.map(persons => {
  let birthYear = new Date().getFullYear() - persons.age;
  return `${persons.name} from ${persons.city} born in ${birthYear}`;
});

console.log(result5);


// 6. Напишіть алгоритм який з масиву persons вибере людей старше 20 років

console.log("\nЗавдання 6");
let older = [];

for (let i = 0; i < persons.length; i++) {
  if (persons[i].age > 20) {
    older.push(persons[i]);
  }
}

console.log(older);

// 7. З допомогою деструктуризації присвойте значення полів name, city із обєкта person у
// окремі змінні. З допомогою деструктуризації присвойте перший елемен масиву persons у
// окрему змінну

console.log("\nЗавдання 7");
let person = { name: "John", city: "Boston" };

let { name, city } = person;
let [firstPerson] = persons;

console.log(firstPerson); 
console.log(name); 
console.log(city); 


// 8. Створіть функцію getUserData яка приймє аргументом імя користувача та повертає обєкт із
// масиву persons. Якщо обєкт з таким іменем не знайдений функція має згенерувати обєкт
// помилки new Error(‘Unable to find user’). Створіть функцію showUserInfo яка приймає
// аргументом імя, виводить в консоль текст ‘Loading’, викликає функцію getUserData, якщо
// користувач знайдений – виводить його поля в консоль і текст ‘Loading finished’, якщо
// користувач не знайдений виведіть текст помилки та текст ‘Loading finished’.

console.log("\nЗавдання 8");
function getUserData(name) {
  const user = persons.find(person => person.name === name);
  if (!user) {
    throw new Error('Unable to find user (Mary не знаходить, значить повідомляється про промилку)');
  }
  return user;
}

function showUserInfo(name) {
  console.log('Loading');
  try {
    const user = getUserData(name);
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Loading finished');
  }
}

showUserInfo('John');
showUserInfo('Mary');


// 9. Напишіть функцію яка перетворить текстовий фрагмент у масив букв.

console.log("\nЗавдання 9");
function textToArray(text) {
  return text.split('');
}

let myText = 'Привіт';
let arr9 = textToArray(myText);
console.log(arr9); 


// 10. Створіть функцію яка відобразить букви слова у зворотньому порядку.

console.log("\nЗавдання 10");
function reverseWord(word) {
  return word.split('').reverse().join('');
}

let myWord = 'Привіт';
let reversedWord = reverseWord(myWord);
console.log(reversedWord); 


// 11. Напишіть функцію яка визначатиме чи передане ім'я файлу файл формату ‘.js’

console.log("\nЗавдання 11");
function isJSFile(filename) {
  if (filename.endsWith('.js')) {
    console.log(`Файл з назвою "${filename}" є файлом формату .js`);
    return true;
  } else {
    console.log(`Файл з назвою "${filename}" не є файлом формату .js`);
    return false;
  }
}

isJSFile('script.js'); 
isJSFile('styles.css');


// 12. Напишіть функцію яка перетворить речення на масив слів

console.log("\nЗавдання 12");
function sentenceToArray(sentence) {
  let wordsArr = sentence.split(' ');  
  return wordsArr;
}

let mySentence = "Це речення буде перетворене";
let wordsArr = sentenceToArray(mySentence);
console.log(wordsArr); 


// 13. Напишіть алгорим який замінить певне слово у текстовому фрагменті

console.log("\nЗавдання 13");
function replaceWordInSentence(sentence, wordToReplace, newWord) {
  let wordsArray = sentence.split(" ");
   
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToReplace) {
      wordsArray[i] = newWord;
    }
  }    
  return wordsArray.join(" ");
}

let sentence = "Кіт в сусідньому дворі білий";
let wordToReplace = "білий";
let newWord = "рудий";

let newSentence = replaceWordInSentence(sentence, wordToReplace, newWord);
console.log(newSentence); 


