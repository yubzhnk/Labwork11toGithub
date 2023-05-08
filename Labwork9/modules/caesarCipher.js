// 4. Напишіть простий модуль шифрування, в якому використовується шифр Цезаря
// (додавання константи до кожної кодової точки). Використайте модуль логування із
// попередніх вправ, щоб протоколювати всі звернення до decrypt.

import Logger from './logger.js';

const CaesarCipher = {
  encrypt: (str, shift) => {
    Logger.log(Logger.LogLevel.info, `Encrypting string '${str}' with shift ${shift}`);

    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      let encryptedCharCode;
      if (charCode >= 65 && charCode <= 90) {
        encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedCharCode = ((charCode - 97 + shift) % 26) + 97;
      } else {
        encryptedCharCode = charCode;
      }
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  },

  decrypt: (str, shift) => {
    Logger.log(Logger.LogLevel.info, `Decrypting string '${str}' with shift ${shift}`);

    let result = '';
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      let decryptedCharCode;
      if (charCode >= 65 && charCode <= 90) {
        decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        decryptedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
      } else {
        decryptedCharCode = charCode;
      }
      result += String.fromCharCode(decryptedCharCode);
    }
    return result;
  }
};

export default CaesarCipher;

