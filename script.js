/**Ключевое слово this в JavaScript для начинающих • this в объектах и функциях */

// С помощью ключевого слова this доступ к контектсу управления
// console.log("this глобальный:", this); // вызывает объект window

// function fn() {
//   console.log("this в теле функции", this);
//   // в теле функции которая находится в глобальном контектсте
// }

// fn();
//this ссылается на один и тот же объект wnidow

// обращение внутри метода объекта
// const user = {
//   name: "Александр",
//   age: 28,
//   logThis: function () {
//     console.log("this в теле метода объекта user:", this);
//     // ключевое слово this ссылается на сам объект user
//     /**Таким образом в методах можно получить
//      * свойства текущего объекта
//      */
//     //console.log("this.name: ", this.name);
//   },
//   address: {
//     city: "Москва",
//     zipcode: 123456,
//     logInnerThis: function () {
//       console.log("this в теле метода объекта address:", this);
//     },
//   },
// };

// user.logThis();
// user.address.logInnerThis();
//не работает с arrow function

//сокращенная запись
// const user = {
//   name: "Александр",
//   age: 28,
//   logThis() {
//     console.log("this в теле метода объекта user:", this);
//   },
// };

// user.logThis();

// Необычное поведение this в разных условиях

// const user1 = { name: "Миша" };
// const user2 = { name: "Вася" };

// function logInfo() {
//   console.log("this: ", this);
//   console.log("this.name: ", this.name);
// }

// logInfo();

// user1.logName = logInfo;
// user2.logName = logInfo;

// user1.logName();
// user2.logName();

// решение задачи  с learn.javascript.ru
// const calculator = {
//   read() {
//     //this.a таким образом мы обратились к самому объекту calculator
//     //чтобы добавить ему новое свойство с именем 'a'
//     this.a = +prompt("Введите первое число:", 0);
//     this.b = +prompt("Введите второе число:", 0);
//   },
//   /* должна запрашивать два значения
//      и сохранять их как свойство текущего
//       объекта с именами a и b*/
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// console.log("calculator:", calculator);
// console.log("Сумма:", calculator.sum());
// console.log("Произведение:", calculator.mul());

// Задача цепь вызовов

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     //показывает теущую ступень
//     console.log("Текущая ступень:", this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
