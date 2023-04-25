//1. Реалізуйте клас Person з полями для імені, прізвища, статі та сімейного становища.
//Реалізуйте метод toLocaleString для форматування імені, наприклад, 'Ms. Smith', 'Frau
//Smith', 'Mme Smith'. Дізнайтесь, які форми ввічливості прийняті у різних мовах, і реалізуйти
//такі варіанти як Ms. або Mrs./Miss.

console.log("Завдання №1");
class Person {
  constructor(firstName, lastName, gender, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }

  toLocaleString(locale) {
    let prefix = '';
    switch (locale) {
      case 'en-US':
        if (this.gender === 'female') {
          prefix = this.maritalStatus === 'married' ? 'Mrs.' : 'Ms.';
        } else {
          prefix = 'Mr.';
        }
        break;
      case 'de-DE':
        if (this.gender === 'female') {
          prefix = this.maritalStatus === 'married' ? 'Frau' : 'Fräulein';
        } else {
          prefix = 'Herr';
        }
        break;
      case 'fr-FR':
        if (this.gender === 'female') {
          prefix = this.maritalStatus === 'married' ? 'Madame' : 'Mademoiselle';
        } else {
          prefix = 'Monsieur';
        }
        break;
      
      default:
        if (this.gender === 'female') {
          prefix = this.maritalStatus === 'married' ? 'Mrs.' : 'Ms.';
        } else {
          prefix = 'Mr.';
        }
    }
    return `${prefix} ${this.lastName}`;
  }
}

const person = new Person('Dua', 'Lipa', 'female', 'married');
console.log(person.toLocaleString('en-US')); 
console.log(person.toLocaleString('de-DE')); 
console.log(person.toLocaleString('fr-FR')); 




//2. Реалізуйте програму яка приймає число та друкує його у трьох версіях - англійських,
//арабських та тайських цифр 

console.log("\nЗавдання №2");
let number = 1234567890;

let enFormatter = new Intl.NumberFormat("en-US");
console.log(`English: ${enFormatter.format(number)}`);

let arFormatter = new Intl.NumberFormat("ar-SA");
console.log(`Arabic: ${arFormatter.format(number)}`);

let thFormatter = new Intl.NumberFormat("th-TH-u-nu-thai");
console.log(`Thai: ${thFormatter.format(number)}`);

//3. Напишіть програму для демонстрації стилів форматування дати та часу у Франції, Китаї,
//Єгипті та Таїланді (з використанням тайських цифр)

console.log("\nЗавдання №3");
const date = new Date();

// Франція
const frFormatter = new Intl.DateTimeFormat('fr', {
  dateStyle: 'full',
  timeStyle: 'long'
});
console.log(`Франція: ${frFormatter.format(date)}`);

// Китай
const zhFormatter = new Intl.DateTimeFormat('zh', {
  dateStyle: 'short',
  timeStyle: 'short'
});
console.log(`Китай: ${zhFormatter.format(date)}`);

// Єгипет
const egFormatter = new Intl.DateTimeFormat('ar-EG', {
  dateStyle: 'medium',
  timeStyle: 'medium'
});
console.log(`Єгипет: ${egFormatter.format(date)}`);

// Таїланд
const thFormatter3 = new Intl.DateTimeFormat('th-TH-u-nu-thai', {
  dateStyle: 'long',
  timeStyle: 'short'
});
console.log(`Таїланд: ${thFormatter3.format(date)}`);


//4. Напишіть функцію порівняння двох текстових фрагментів відповідно до локалі. Вона
//повинна працювати в режимах ігнорування та врахування регістру

console.log("\nЗавдання №4");

function compareTexts(text1, text2, locale, caseSensitive = true) {
  const options = { sensitivity: caseSensitive ? 'case' : 'accent', caseFirst: 'upper' };
  return text1.localeCompare(text2, locale, options);
}

const text1 = 'абв';
const text2 = 'АБВ';

console.log("Тексти однакові ігноруючи регістр, тому",compareTexts(text1, text2, 'uk-UA', false)); 
console.log("Тексти відрізняються з врахуванням регістру, тому", compareTexts(text1, text2, 'en-US', true)); 


//5. Розглянемо шаблон '{0} has {1} messages'.Його французька версія повинна мати вигляд 'Il y
//a {1} messages pour {0}'. При форматуванні повідомлення аргументи передаються у
//фіксованому порядку, що не залежить від мови. Напишіть функцію messageFormat, яка
//приймає шаблонний рядок та змінну кількість аргументів. Придумайте механізм який
//виставлятиме аргументи в шаблон відповідно до локалі.

console.log("\nЗавдання №5");

function messageFormat(template, locale, ...args) {
  const templates = {
    en: '{0} has {1} messages',
    fr: 'Il y a {1} messages pour {0}',
    ua: '{0} має {1} повідомлень'
  };

  const formatString = templates[locale] || templates['en'];
  const formatted = formatString.replace(/\{(\d)\}/g, (match, p1) => args[p1]);

  return formatted;
}


console.log(messageFormat('{0} has {1} messages', 'fr', 'Alex', 2)); 
console.log(messageFormat('{0} has {1} messages', 'ua', 'Каріна', 10)); 
console.log(messageFormat('{0} has {1} messages', 'de', 'Harry', 21)); 



//6. Запропонуйте клас для відображення розмірів аркуша паперу, що залежить від локалі, з
//використанням бажаної одиниці вимірювання та розміру за умовчанням для даної локалі.
//У всіх країнах, окрім США та Канади, розміри аркушів паперу визначаються стандартом ISO
//216. Лише три країни ще не перейшли офіційно на метричну систему: Ліберія, М'янма
//(Бірма) та США.

console.log("\nЗавдання №6");

class PaperSize {
  constructor(locale, unit = "mm") {
    const sizes = {
      en_US: { name: "Letter", width: 8.5, height: 11 },
      uk_UA: { name: "A4", width: 210, height: 297 },    
    };
    
    const localeKey = locale.replace('-', '_');
    const defaultSize = sizes[localeKey] || sizes.en_US;
    
    this.name = defaultSize.name;
    this.width = defaultSize.width;
    this.height = defaultSize.height;
    this.unit = unit;
  }
  
  getSize() {
    return `${this.width} ${this.unit} x ${this.height} ${this.unit}`;
  }
}

const paperSizeEn = new PaperSize('en-US', 'in');
console.log(`США: ${paperSizeEn.getSize()} (${paperSizeEn.name})`);


const paperSizeUa = new PaperSize('uk-UA', 'mm');
console.log(`Україна: ${paperSizeUa.getSize()} (${paperSizeUa.name})`);


