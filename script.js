/*Виды функциий. Стрелочные функции.*/

// console.log(sum(2, 3));
/* Главная особеность function declaration функции в то что такую функцию можно
использовать до ее фактического объявления */
// function sum(a, b) {
//   return a + b;
// }
// function declaration имеется возможность ее перезаписать
// function logMessage() {
//   console.log("Привет!");
// }
// function logMessage() {
//   console.log("Пока!");
// }

// logMessage();

/* Внутри function declaration можем полчить доступ к неявной переменной arguments,
 в которой, в формате массива будут перечислены значения переданные в функции 
 аргументов*/
// function logAll() {
//   console.log(arguments);
// }
// logAll("Привет", 555, false);

/* function expression - когда функция записана как функциональное выражение,
 например присвоенно к переменной*/
// const logHello = function() {
//     console.log('Привет!')
// }
// logHello()
// такую функцию нельзя переопределить если не let
// такую функцию нельзя использовать до объявления

// function arrow
// const logHello = () => {
//   console.log("Привет!");
// };

// logHello();

// такую функцию нельзя использовать до объявления
// не имеет доступа к неявной переменной arguments
// нет своего контекста с использованием this

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(1, 2));
// отличие стрелочной функции - неявный возврат из функции если записать в одну строку
// const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// можно присвоить одну переменную другой
// const fn1 = () => {
//   return "Я функция fn1";
// };
// const fn2 = fn1;

// console.log(fn2());

// функции можно передавать из одной фунции в другую - callback

// const logMessage = (actionBefore, actionAfter) => {
//   actionBefore();
//   console.log("Привет");
//   actionAfter();
// };

// const fn1 = () => console.log("before");
// const fn2 = () => console.log("after");
// logMessage(fn1, fn2);

// Аналогичная запись кода
// const logMessage = (actionBefore, actionAfter) => {
//     actionBefore();
//     console.log("Привет");
//     actionAfter();
//   };

//   logMessage(
//     () => console.log("before"),
//     () => console.log("after")
//     )

// Функция может возвращать результатом другую функцию
// const validate = (hasAccess) => {
//   if (hasAccess) {
//     return () => console.log("Доступ разрешен :)");
//   } else {
//     return () => console.log("Доступ запрещен :)");
//   }
// };

// const logMessage = validate(true);
// logMessage();

// const validate = (hasAccess) =>
//   hasAccess
//     ? () => console.log("Доступ разрешен :)")
//     : () => console.log("Доступ запрещен :)");

// const logMessage = validate(true);
// logMessage();
