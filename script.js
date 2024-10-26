/* Функции alert, prompt и confirm для взаимодействия с пользователем.
Условия switch case. */

// alert("Привет"); // Функция alert() всплывающее окно
//перечисление парамметров как в console.log не работает
// alert(1 + 2 + 3);

// Функция prompt() - вызывает всплывающее окно с текстом и полем ввода
// Принимает один или два параметра, второй параметр значение по умолчанию
// const userAge = +prompt("Сколько тебе лет?", 18);
// // console.log(`Возраст : ${userAge}`);
// // if (userAge >= 18) {
// //   console.log("Доступ разрешен");
// // } else {
// //   console.log("Доступ запрещен");
// // }
// if (userAge === 0) {
//   console.log("Такого возраста не может быть!");
// } else {
//   console.log(`Твой возраст : ${userAge}`);
// }

/* Фунция confirm() - вызывает окно с текстом и
 двумя кнопками используется для подтверждения дейсвтий*/
// const isUserReady = confirm("Ты готов?"); // значеине либо true либо false

// if (isUserReady) {
//   console.log("Начинаем!");
// } else {
//   console.log("Ладно, подождем...");
// }

/* Конструкция switch case*/
// const age = +prompt("Сколько тебе лет?");

// switch (age) {
//   case 0: {
//     console.log("Такого возраста не бывает!");
//     break;
//   }
//   case 18: {
//     console.log("Не верю, покажи паспорт.");
//     break;
//   }
//   case 1000: {
//     console.log("Вампир что ли?");
//     break;
//   }
//   default: {
//     console.log(`Твой возраст: ${age}`);
//   }
// }
/* Происходит последовательная проверка до 
первого истинного значения.
 проверка проходит между значением в switch() 
 и значениями после ключевого слова case
*/

// dВ случае когда нужно проверить диапазон значений

// const age = +prompt("Сколько тебе лет?");

// switch (true) {
//   case age < 1: {
//     console.log("Такого возраста не бывает!");
//     break; // прерывание
//   }
//   case age === 18: {
//     console.log("Не верю, покажи паспорт.");
//     break;
//   }
//   case age > 0 && age <= 125: {
//     console.log(`Твой возраст: ${age}`);
//     break;
//   }
//   case age > 125: {
//     console.log("Вампир что ли?");
//     break;
//   }
//   default: {
//     console.log("Возраст введен некорректно");
//   }
// }
