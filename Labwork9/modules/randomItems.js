//5. Напишіть простий модуль, який включає функції як повертають: випадкові цілі числа,
//масиви цілих випадкових чисел і випадкові текстові фрагменти. Використовуйте
//якнайбільше синтаксичних форм export.


// Генерує випадкове ціле число в діапазоні [min, max]
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Генерує масив із n випадкових цілих чисел в діапазоні [min, max]
  function getRandomInts(n, min, max) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(getRandomInt(min, max));
    }
    return arr;
  }
  
  // Генерує випадковий текстовий фрагмент заданої довжини
  function getRandomText(length) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += alphabet.charAt(getRandomInt(0, alphabet.length - 1));
    }
    return text;
  }
  
  // Експорт функцій за замовчуванням
  export default {
    getRandomInt,
    getRandomInts,
    getRandomText,
  };
  
  // Альтернативний синтаксис експорту для окремих функцій
  export { getRandomInt, getRandomInts, getRandomText };
  