//1. Напишіть функцію invokeAfterDelay, яка повертає проміс, який викликає задану функцію із
//заданою затримкою. Продемонструйте її роботу, повертаючи проміс, що містить
//випадкове число від 0 до 10. Отриманий результат виведіть в консолі.


function invokeAfterDelay(func, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = func();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

invokeAfterDelay(getRandomNumber, 2000)
  .then((result) => console.log(`\nЗавдання №1\nРезультат із затримкою: ${result}`))
  .catch((error) => console.error(error));


//2. Створивши на базі попередньої функції функцію produceRandomAfterDelay. Викличте
//функцію produceRandomAfterDelay двічі і надрукуйте суму, після того як будуть отримані
//обидва результати.


function invokeAfterDelay(func, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = func();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

async function produceRandomAfterDelay() {

  const results = [];
   for (let i = 0; i < 2; i++) {
    const result = await invokeAfterDelay(getRandomNumber, 2000);
    console.log(`\nЗавдання №2. Результат ${i + 1}: ${result}`);
    results.push(result);
  }
  const sum = results.reduce((acc, curr) => acc + curr, 0);
   console.log(`\nЦифри, що сумуються: ${results.join(' + ')}`)
  console.log(`\nСума цих результатів: ${sum}`);
 
}

produceRandomAfterDelay();

//3. Напишіть функцію sleep, яка повертає проміс, який можна викликати так:
//await sleep(1000)

console.log("\nЗавдання №3");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Початок 3 завдання. 0 ms');
  await sleep(1000);
  console.log('Кінець 3 завдання. Пройшло 1000 ms');
}

example(); // Виведе "Start", зачекає одну секунду, а потім виведе "End"


//4. Напишіть функцію getUser яка приймає id та повертає проміс який виконується через 1
//секунду з об'єктом користувача з полями імя, вік, місто, id. Підготуйте 4 обєкти користувача
//з id від 0 до 3 які повертатимуться функцією відповідно до id. Якщо незнайомий id
//отриманий – проміс має бути відхилений з помилкою ‘User not found’

function getUser(id) {
  const users = [
    { id: 0, name: "John", age: 25, city: "Житомир" },
    { id: 1, name: "Kate", age: 32, city: "Київ" },
    { id: 2, name: "Alex", age: 28, city: "Чікаго" },
    { id: 3, name: "Sasha", age: 37, city: "Львів" },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Завдання №4. Проміс відхилений! Викликаний користувач з id=4, а такого не існує. User not found"));
      }
    }, 5000);
  });
}

getUser(2)
  .then((user) => console.log(`\nЗавдання №4. id: ${user.id}, ім'я: ${user.name}, вік: ${user.age}, місто: ${user.city}`))
  .catch((error) => console.error(error));

getUser(4)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));


//5. Напишіть функцію loadUsers яка приймає масив ідентифікаторів та повертає масив обєктів
//користувача використовуючи попередню функцію. Обробіть ситуацію коли один з промісів
//був відхилений

async function loadUsers(ids) {
  try {
    const promises = ids.map(id => getUser(id));
    const users = await Promise.all(promises);
    return users.map(user => `${user.id}, ${user.name}, ${user.age}, ${user.city}`).join('\n');
  } catch (error) {
    throw new Error('Завдання №5. Проміс відхилений');
  }
}

loadUsers([0, 1, 2, 3])
  .then(users => console.log(users))
  .catch(error => console.error(error));

loadUsers([4])
  .then(users => console.log(users))
  .catch(error => console.error(error));


//6. Напишіть функцію logCall яка приймає функцію коллбек – викликає її через одну секунду та
//пише в консоль поточний час. Зробіть щоб дана функція повертала проміс. Зробіть 4
//послідовних виклики даної функції використовуючи ланцюжок промісів.

function logCall(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const time = new Date().toLocaleTimeString();
      console.log(`\nЗавдання №6. Виклик відбувається через 1 секунду. Запуск функції о ${time}`);
      try {
        const result = callback();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

logCall(() => console.log("Виклик функції 1 раз"))
  .then(() => logCall(() => console.log("Виклик функції 2 раз")))
  .then(() => logCall(() => console.log("Виклик функції 3 раз")))
  .then(() => logCall(() => console.log("Виклик функції 4 раз")))
  .catch(error => console.error(error));


//7. Напишіть функцію яка showUsers яка симулює завантаження користувачів використовуючи
//loadUsers. Перед викликом loadUsers дана функція має вивести в консоль ‘loading’ при при
//успішному чи неуспішному завершенні виведе ‘loading finished’. Використайте синтаксис
//async/await при виконанні даного завдання.

 async function showUsers(ids) {
 setTimeout(() => console.log('\nЗавдання №7. Симуляція завантаження користувачів'), 4500);
  try {
    const users = await loadUsers(ids);
    console.log(users);
  } catch (error) {
    console.error(error);
  }
  console.log('\nЗавантаження завдання №7 завершено');
}

showUsers([0, 1, 2, 3]); 