/*Объекты  ▶Объекты в JavaScript. Свойства объекта —
 чтение, добавление, удаление, проверка наличия и перебор.*/

// const user = {};
// const secondEmptyObject = new Object();

// const user = {
//   login: "iamsuperhero",
//   password: "qwerty",
//   "regisration date": "11.01.2024",
//   age: 33,
//   adress: {
//     city: "Москва",
//     zipCode: 555444,
//   },
//   sayHi: () => console.log("Привет!"),
// };
// Чтение свойсвты объкта

// к любому свойству объекта можно получить доступ несколькими способаи:
// console.log(user.login); //имя объктв, имя свойства
// console.log(user["regisration date"]); //для случаев когда имя содержит пробел или дефис
// user.sayHi(); //вызов метода

// Добавление свойств объекта

// const user = {};

// // добавить свойство объекту
// user.name = "Александр";
// user["is developer"] = true;
// console.log(user);

// // изменение значения свойства
// user.name = "Максим";
// console.log(user);
// //удаление свойства

// delete user.name;
// delete user["is developer"];
// console.log(user);

// const name = "Александр";
// const age = 28;

// const user = { name, age };

// console.log(user);

//Особенности мен свойств объектов
// формально в качестве имени свойтсва мы можем использовать число
// const obj = {
//     123: 'Example',
// }
// console.log(obj['123']) //ключи объектов (имена свойств) всегда являются строками

/*Имена свойств так и их значения могут быть вычисляемыми */
// const propName = prompt("Свойство с киким именем добавить в объект");
// const propValue = prompt(`Какое значение записать в свойство ${propName}`);

// const obj = {
//   [propName]: propValue,
//   // чтобы имя свойства было вычисляемой сущностью, а не статической строкой нужно сипользовать []
// };

// console.log(obj);

// проверка существования свойств в объекте специальный оператор in

// const user = {
//   name: "Алекссандр",
//   age: 28,
// };

// console.log("isDeveloper" in user);
// имя свойства_in_имя объекта

// Перебрать свойства объекта через цикл

const user = {
  name: "Александр",
  age: 28,
  isDeveloper: true,
};
// итерирование по объектам цикл for in

for (const key in user) {
  // переменная для записи значений in имя объекта
  console.log(key); //имя свойства перебираемого объекта
  // значение свойства перебрать можно с помощью следующей кострукции
  console.log(user[key]);
}
// так перебираются только ключи (имена свойств)
