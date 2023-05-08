// 1. Напишіть простий модуль логування, який підтримує логування повідомлень, для яких
// рівень логування перевищує заданий поріг. Експортуйте функцію log, константи рівнів
// логування та функцію завдання рівня логування.

const logger = require('./modules/logger');

logger.setLogLevel(logger.LogLevel.error);

logger.log(logger.LogLevel.error, 'An error occurred');
logger.log(logger.LogLevel.warn, 'A warning occurred');
logger.log(logger.LogLevel.info, 'Some information');
logger.log(logger.LogLevel.verbose, 'Some verbose information');
logger.log(logger.LogLevel.debug, 'Some debug information');
logger.log(logger.LogLevel.silly, 'Some silly information');


//2. Повторіть попереднє завдання але тепер експортуйте весь класс по замовчуванню.

import Logger from './modules/logger.js';


Logger.setLogLevel(Logger.LogLevel.error);
Logger.log(Logger.LogLevel.error, 'An error occurred');
Logger.log(Logger.LogLevel.warn, 'A warning occurred');
Logger.log(Logger.LogLevel.info, 'Some information');
Logger.log(Logger.LogLevel.verbose, 'Some verbose information');
Logger.log(Logger.LogLevel.debug, 'Some debug information');
Logger.log(Logger.LogLevel.silly, 'Some silly information\n');


//3. Знайдіть JavaScript-бібліотеку для шифрування (наприклад, https://github.com/brix/cryptojs). Напишіть програму, яка імпортує цю бібліотеку у вигляді ECMAScript і шифрує, а потім
//дешифрує повідомлення

import CryptoJS from 'crypto-js';

// Ключ для шифрування і дешифрування
const key = 'mySecretKey123';

// Повідомлення для шифрування
const message = 'Yulia';

// Шифрування повідомлення
const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

// Дешифрування повідомлення
const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

console.log(`Шифроване повідомлення: ${encryptedMessage}`);
console.log(`Дешифроване повідомлення: ${decryptedMessage} \n`);



// 4. Напишіть простий модуль шифрування, в якому використовується шифр Цезаря
// (додавання константи до кожної кодової точки). Використайте модуль логування із
// попередніх вправ, щоб протоколювати всі звернення до decrypt.


import CaesarCipher from './modules/caesarCipher.js';

// Використання шифрування
const encryptMessage = CaesarCipher.encrypt('Yulia!', 5);
console.log('Шифроване повідомлення:', encryptMessage);

// Використання розшифрування
const decrypdMessage = CaesarCipher.decrypt(encryptMessage, 5);
console.log('Дешифроване повідомлення:', decrypdMessage, '\n');

// Протоколювання всіх звернень до decrypt
Logger.setLogLevel(Logger.LogLevel.info); // Встановлення рівня логування
CaesarCipher.decrypt('Yulia!', 5);




//5. Напишіть простий модуль, який включає функції як повертають: випадкові цілі числа,
//масиви цілих випадкових чисел і випадкові текстові фрагменти. Використовуйте
//якнайбільше синтаксичних форм export.

import randomItems from './modules/randomItems.js';

console.log('\n',randomItems.getRandomInt(1, 10)); // Випадкове ціле число від 1 до 10
console.log(randomItems.getRandomInts(5, 1, 10)); // Масив із 5 випадкових цілих чисел від 1 до 10
console.log(randomItems.getRandomText(10)); // Випадковий текстовий фрагмент довжиною 10 символів

