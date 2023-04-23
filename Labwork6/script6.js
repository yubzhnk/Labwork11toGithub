//1. Створіть клас для автомобіля з такими властивостями, як марка, модель і рік випуску.
//Потім створіть екземпляр автомобіля та встановіть його властивості. 
//- З використанням функції конструктора
//- З використанням синтаксису класс

console.log("Завдання №1");

// З використанням функції конструктора
function Car1(brand, model, year) {
this.brand = brand;
this.model = model;
this.year = year;
}

let car1 = new Car1("Toyota", "Camry", 2021);
console.log("Вивід з використанням функції конструктора: ", car1); // виведе об'єкт {brand: "Toyota", model: "Camry", year: 2021}

// З використанням синтаксису класу
class Car2 {
constructor(brand, model, year) {
this.brand = brand;
this.model = model;
this.year = year;
}
}

let car2 = new Car2("Skoda", "Fabia", 2002);
console.log("Вивід з використанням синтаксису класу: ",car2); // виведе об'єкт {brand: "Toyota", model: "Camry", year: 2021}

//2. Створіть два екземпляри даного класу користуючись методом Object.create()

console.log("\nЗавдання №2");

// Створення об'єкту-прототипу
let dogPrototype = {
  breed: "",
  name: "",
  age: "",
  setBreed: function (breed) {
    this.breed = breed;
  },
  setName: function (name) {
    this.name = name;
  },
  setAge: function (age) {
    this.age = age;
  },
  getInfo: function () {
    return `Порода: ${this.breed}, Ім'я: ${this.name}, Вік: ${this.age}`;
  },
};

// Створення двох екземплярів за допомогою методу Object.create()
let dog1 = Object.create(dogPrototype);
dog1.setBreed("Лабрадор");
dog1.setName("Емма");
dog1.setAge(2);

let dog2 = Object.create(dogPrototype);
dog2.setBreed("Хаскі");
dog2.setName("Аполліон");
dog2.setAge(4);

console.log(dog1.getInfo()); 
console.log(dog2.getInfo()); 


//3. Створіть клас персона який містить поля імя, прізвище, рік народження. Створіть даний
//клас не використовуючи class синтаксис. Додайте в даний клас методи які виводитимуть
//вік та повне ім'я особи.

console.log("\nЗавдання №3");

// Функція-конструктор класу Person3
function Person3(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}

// Додавання методів до прототипу класу Person3
Person3.prototype.getAge = function() {
  let currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

Person3.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
};

// Створення екземпляру класу Person3
let person1 = new Person3("Євген", "Мірошник", 2003);

// Виклик методів на екземплярі класу Person3

console.log(`${person1.getFullName()}, ${person1.getAge()} років`);

//4. Створіть субклас класу персона який міститиме поле посада та перевизначає метод
//виведення повного імені додаючи туди посаду особи

console.log("\nЗавдання №4");

function Person4(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  this.getAge = function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
}

function Employee(firstName, lastName, birthYear, position) {
  Person4.call(this, firstName, lastName, birthYear);

  this.position = position;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}, ${this.position}`;
  };
}

Employee.prototype = Object.create(Person4.prototype);
Employee.prototype.constructor = Employee;

let employee1 = new Employee("Harry", "Styles", 1994, "singer");
console.log(`${employee1.getFullName()}, ${employee1.getAge()}`);


//5. Напишіть метод який приймає два об'єкти та визначає чи вони об'єкти одного класу та
//виводить в консоль фразу з іменами класів об'єктів

console.log("\nЗавдання №5");

function compareObjects(obj1, obj2) {
  if (obj1.constructor.name === obj2.constructor.name) {
    console.log(`Об'єкти ${obj1.constructor.name} належать до одного класу`);
  } else {
    console.log(`Об'єкти ${obj1.constructor.name} та ${obj2.constructor.name} належать до різних класів`);
  }
}

class Person5 {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }
}

class Employee5 extends Person5 {
  constructor(firstName, lastName, birthYear, position) {
    super(firstName, lastName, birthYear);
    this.position = position;
  }
}

let person5_1 = new Person5("Niall", "Horan", 1993);
let person5_2 = new Person5("Louis", "Tomlinson", 1991);
let employee5_1 = new Employee5("Zayn ", "Malik", 1993, "singer");
let employee5_2 = new Employee5("Harry", "Styles", 1994, "singer");

compareObjects(person5_1, person5_2); // виведе "Об'єкти Person5 належать до одного класу"
compareObjects(employee5_1, employee5_2); // виведе "Об'єкти Employee5 належать до одного класу"
compareObjects(person5_1, employee5_1); // виведе "Об'єкти Person5 та Employee5 належать до різних класів"


//6. Створіть метод який приймає екземпляр класу Person та перетворює його у екземпляр
//ObservedPerson. Екземпляр ObservedPerson має вести себе аналогічно до класу Person та
//при виклику його методів буде виводити в консоль кількість викликів

console.log("\nЗавдання №6");

class ObservedPerson extends Person3 {
  constructor(firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this.callCounts = {};
  }

  observeMethodCall(methodName) {
    if (!this.callCounts[methodName]) {
      this.callCounts[methodName] = 0;
    }
    this.callCounts[methodName]++;
    console.log(`${methodName} викликано ${this.callCounts[methodName]} раз`);
  }

  getFullName() {
    this.observeMethodCall("getFullName");
    return super.getFullName();
  }

  getAge() {
    this.observeMethodCall("getAge");
    return super.getAge();
  }

  static observe(person) {
  return new ObservedPerson(person.firstName, person.lastName, person.birthYear);
}
}

let person = new Person3("Олекса", "Кідрук", 2001);

let observedPerson = ObservedPerson.observe(person);

console.log(observedPerson.getFullName());
console.log(observedPerson.getAge());
console.log(observedPerson.getFullName());

console.log(observedPerson.callCounts);



//7. Створіть абстрактний клас під назвою Shape, який визначає методи для обчислення площі
//та периметра. Змусьте дочірні класи імплементувати ці методи

console.log("\nЗавдання №7");

function Shape() {}

Shape.prototype.getArea = function() {
  // метод для обчислення площі
};

Shape.prototype.getPerimeter = function() {
  // метод для обчислення периметра
};

function Rectangle7(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle7.prototype = Object.create(Shape.prototype);
Rectangle7.prototype.constructor = Rectangle7;

Rectangle7.prototype.getArea = function() {
  return this.width * this.height;
};

Rectangle7.prototype.getPerimeter = function() {
  return 2 * (this.width + this.height);
};

let rectangle = new Rectangle7(4, 6);
console.log(`Площа: ${rectangle.getArea()}`);
console.log(`Периметр: ${rectangle.getPerimeter()}`);


//8.Створіть масив фігур, що включає екземпляри кожного класу фігур. Перегляньте масив і
//викличте методи площі та периметра для кожної фігури.

console.log("\nЗавдання №8");

class Shape8 {
  getArea() {}
  getPerimeter() {}
}

class Circle extends Shape8 {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Імплементація методів для обчислення площі та периметра
  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape8 {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  // Імплементація методів для обчислення площі та периметра
  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

class Triangle extends Shape8 {
  constructor(sideA, sideB, sideC) {
    super();
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  // Імплементація методів для обчислення площі та периметра
  getArea() {
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  getPerimeter() {
    return this.sideA + this.sideB + this.sideC;
  }
}

// Створення масиву фігур
let shapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Square(3),
  new Triangle(3, 4, 5)
];

// Виклик методів площі та периметра для кожної фігури
shapes.forEach(shape => {
  console.log(`Фігура: ${shape.constructor.name}`);
  console.log(`Площа: ${shape.getArea()}`);
  console.log(`Периметр: ${shape.getPerimeter()}`);
  console.log('----------------------');
});
