/*Функции, область видимости. Параметры и аргументы, значения по умолчанию. Return */

// 1-й способ создания фунций
// function logHello() {
//   console.log("Привет");
// }
// logHello(); //вызов функции

// область видимости
// const message = "Глобальный привет";

// function logMessage() {
//   const message = "Локальный привет";

//   console.log(message);

//   for (let i = 0; i < 3; i++) {
//     const message = `Итерация цикла №${i}`;
//     console.log(message);
//   }
// }
// logMessage();
// console.log(message);

// Параметры функции
// function logMessage(message, count) {
//   for (let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }
// logMessage("Привет!", 3);
// logMessage("Пока!", 2);

// const globalMessage = "Привет"; //глобальная переменная

// function logMessage(message, count) {
//   const messageFormated = `(((${message})))`;

//   for (let i = 0; i < count; i++) {
//     console.log(messageFormated);
//   }
// }

// logMessage(globalMessage, 3);
// console.log(globalMessage);

// const globalMessage = "Привет"; //глобальная переменная

// function logMessage(message = "мяу", count = 1) {
//   const messageFormated = `(((${message})))`;

//   for (let i = 0; i < count; i++) {
//     console.log(messageFormated);
//   }
// }

// logMessage(globalMessage);
// logMessage(globalMessage, 10);
// logMessage("опа", 10);
// logMessage(undefined, 10);

// Возврат значения, ключевое слово return
// function sum(a, b) {
//   return a + b;
// }
/* Абсолютно каждая функция возвращает какое-то значение явно или не явно.
 Явный возврат из функции произойдет если указать ключевое слово return,
а после выражение которое мы хоти мернуть из функции return a + b*/

// const result = sum(100, 1);
// console.log(result);

/* Если не указать ключевое словов return в функции
 то при вызове такой функции результат всегда будет один значение undefined*/
// function getAgeType(age) {
//   if (typeof age !== "number") {
//     return "Возвраст указан некорректно";
//   }
//   if (age < 1 || age > 125) {
//     return "Такого возраста не может быть";
//   }
//   if (age < 18) {
//     return "Несовершеннолетний";
//   }
//   return "Взрослый";
// }
// console.log(getAgeType(30));

//чтобы при пустом значениив вызове не происходило вывода значения undefined
//запишем следующее условие if
function getSecretMessage(name) {
  if (!name) return; /* если значение name некорректное,
     если при вызове функции ничего не передали или значения null, undefined 
     или пустую строку то в результате приведения к boolean значение преобразутеся
     в false, далее это значение инвертируется в true и в случе некорректных данных
     произойдет  досрочный выход из функции с помощью слова return*/
  return `О, а я тебя знаю! Ты же тот самый ${name}?`;
}
console.log(getSecretMessage());
