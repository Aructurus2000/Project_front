/* Циклы - while, do wile и for, перываени цикла break. Продолжение цикла continue */
// Циул wile
// let count = 0; // Счетчик цикла

// while (count < 10) {
//   console.log(count);
//   count++;
// }
/* когда нужно выполнить код  из тела цикла как минимум 
1 раз даже если условие в круглых скобках будет изначально ложным
do while*/
// let count = 0; // Счетчик цикла

// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// Цикл for

// for (let i = 0; i < 4; i++) {
//   alert(i);
// }

// использование break - прерывание
// console.log("Цикл сейчас начнется...");
// for (let i = 0; i < 10; i++) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Цикл прерван досрочно");
//     break;
//   }
// }
// console.log("...цикл закончен!");

// использование continue - продолжение цикла

console.log("Цикл сейчас начнется...");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
console.log("...цикл закончен!");
