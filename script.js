/*▶JavaScript объекты — сравнение, копирование, объединение, деструктуризация, остаточные параметры. */

// Объект это ссылочный тип данных
// const obj1 = { age: 10 };
// const obj2 = { age: 10 };

// console.log(obj1 === obj2); //false

// const obj1 = { name: "Александр" };
// const obj2 = obj1;

// obj2.name = "Максим";

// console.log(obj1); //хранят значение по ссылке

// Сравнение двух объектов
// const obj1 = {
//   name: "Александр",
//   age: 28,
// };

// const obj2 = {
//   name: "Александр",
//   age: 28,
// };

// // функция для сравнения объектов (поверхностное сравнение)
// const areObjectsEqual = (object1, object2) => {
//   // одинаковое ли кол-во свойств в объектах
//   const keys1 = Object.keys(object1); //массив ключей
//   /*Встроенная функция Object.keys() позволяет
//   получить массив ключей объекта в массив имен свойств*/
//   const keys2 = Object.keys(object2);

//   console.log("Длина keys1", keys1.length);
//   // получить длину массива можно с помощью .length
//   console.log("Длина keys2", keys2.length);

//   //сравнение двух длин массивов
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   //пройдемся по ключам первого объекта
//   for (const key in object1) {
//     // значение свойства первого объекта не равно свойствам второго объекта
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log("Равны ли объекты obj1 и obj2:", areObjectsEqual(obj1, obj2));

// такое решение будет отлично работать с плоскими объектами
//если же в объекты будут вложены другие объекты то проверка на эквивалентность не срабоатет
// так как внутренние объекты будут сравниваться по ссылки и всегда вернут значение как false

/** Глубокое сравнение объектовеобходимо применить метод рекурсии -
 * это когда функция вызывает сама себя */

// const obj1 = {
//   name: "Александр",
//   age: 28,
//   adres: {
//     city: "Москва",
//     zipcode: 12345,
//   },
// };

// const obj2 = {
//   name: "Александр",
//   age: 28,
//   adres: {
//     city: "Москва",
//     zipcode: 12345,
//   },
// };

// //если добавить еще вложенных объектов результат будет все равно true

// const areObjectsEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1); //массив ключей
//   const keys2 = Object.keys(object2);

//   console.log("Длина keys1", keys1.length);
//   console.log("Длина keys2", keys2.length);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   // для глубокого сравнения нужно переписать следующую часть кода
//   for (const key in object1) {
//     //выражения переместим в отдельные переменные
//     const value1 = object1[key];
//     const value2 = object2[key];
//     // результат проврки типов value1 и  value2
//     const areValuesObjects =
//       typeof value1 === "object" && typeof value2 === "object";
//     if (areValuesObjects) {
//       return areObjectsEqual(value1, value2);
//       // функция areObjectsEqual() внутри использовала саму себя (рекурсия)
//     }

//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log("Равны ли объекты obj1 и obj2:", areObjectsEqual(obj1, obj2));

// Клонирование объекта
// const obj1 = { name: "Александр" };
// const obj2 = obj1;

// obj2.name = "Максим";

// console.log("obj1: ", obj1);
// console.log("obj2: ", obj2);

/* чтобы получить настоящую копию объекта мы можем перебрать
 ключи свойств первого объекта через цикл for in*/
// const obj1 = { name: "Александр" };
// const obj2 = {};

// for (const key in obj1) {
//   obj2[key] = obj1[key];
//   // на каждой итерации цикла в изначально пустой объект obj2
//   //запишем свойства из объекта obj1
// }

// obj2.name = "Максим";

// console.log("obj1: ", obj1);
// console.log("obj2: ", obj2);

// => чтобы не писать постоянно такой код при необходимости копировать объкт
// есть свойство Object.assign()

// const obj1 = { name: "Александр" };
// const obj2 = Object.assign({}, obj1);
// // можно передать вторым третьим или четвертым аргументом сколько угодно объектов
// // все их свойства перейдут в заданный целевой объект
// // передаем два аргумента начальный целевой (пока пустой объект)
// // а второй аргумент это объект свойства которого скопируются в целевой объект

// obj2.name = "Максим";

// console.log("obj1: ", obj1);
// console.log("obj2: ", obj2);

// в js есть еще один короткий способ копирования объектов называемый оператор расширения
// Spread оператор (...)
// const obj1 = { name: "Александр" };
// const obj2 = { ...obj1 };

// obj2.name = "Максим";

// console.log("obj1: ", obj1);
// console.log("obj2: ", obj2);

// Объединение объектов
//используем все тот же Objec.assign({, obj1, obj2})

// const obj1 = { name: "Александр" };
// const obj2 = { age: 28 };
// const obj3 = {
//   isDeveloper: true,
//   name: "Максим",
// };

// // если какие-то из имен свойств будут повторятся, то в конечный объект
// // попадет значение из послденего объекта

// const user = Object.assign({}, obj1, obj2, obj3);

// console.log("user:", user);

//   для объединения мы также можем использовать Spread оператор (...)

// const obj1 = { name: "Александр" };
// const obj2 = { age: 28 };
// const obj3 = {
//   isDeveloper: true,
//   name: "Максим",
// };

// const user = { ...obj1, ...obj2, ...obj3 };

// console.log("user:", user);

//через asign и Spread оператор (...) происходит поверхностное объединение

// const obj1 = { name: "Александр" };

// const obj2 = {
//   age: 28,
//   address: {
//     city: "Москва",
//   },
// };

// const obj3 = {
//   isDeveloper: true,
//   name: "Максим",
//   address: {
//     zipcode: 12345,
//   },
// };

// const user = { ...obj1, ...obj2, ...obj3 };

// console.log("user:", user);

// особенности при работе с вложенными объектами

// const user = {
//   name: "Александр",
//   age: 28,
//   adress: {
//     city: "Москва",
//     zipcode: 12345,
//   },
// };
// // чтобы вывести значение city (обращение к внутреннему объекту)
// console.log(user.adress?.city); //опциональный оператор  если (?)
// console.log("кака-то текст");

// const guest1 = {
//   name: "Василий",
//   age: 30,
//   orderInfo: {
//     roomType: 2,
//     stayDates: {
//       from: "14.04.2024",
//       to: "21.04.2024",
//     },
//   },
// };

// const guest2 = {
//   name: "Екатерина",
//   age: 25,
// };

// const logGuestInfo = (guest) => {
//   console.log(`
//   Имя: ${guest.name}
//   Возраст: ${guest.age}
//   Дата выезда: ${guest.orderInfo?.stayDates?.to ?? "Не указана"},
//   `);
// };

// logGuestInfo(guest1);
// logGuestInfo(guest2);

//Деструктуризация объекта (синтаксис деструктурирующего присваивания)
// const user = {
//   name: "Александр",
//   age: 28,
//   isDeveloper: true,
// };

// const name = user.name;
// const age = user.age;
// const isDeveloper = user.isDeveloper;

// console.log("name:", name);
// console.log("age:", age);
// console.log("isDeveloper:", isDeveloper);

// следующийй код можно сократить до следующей записи

// const user = {
//   name: "Александр",
//   age: 28,
//   isDeveloper: true,
// };

// const { name, age, isDeveloper } = user;
// //обращение к объекту user, в const {} - объявление константных переменных

// console.log("name:", name);
// console.log("age:", age);
// console.log("isDeveloper:", isDeveloper);

// const logAdress = (city, street, houseNumber, apartmentNumber) => {
//   console.log(`
//     Адрес:
//     г. ${city}, ул. ${street},
//     д. ${houseNumber}, кв. ${apartmentNumber}
//     `);
// };

// logAdress("Москва", "Пушкина", 21, 35);

// const logAdress = (address) => {
//   console.log(`
//     Адрес:
//     г. ${address.city}, ул. ${address.street},
//     д. ${address.houseNumber}, кв. ${address.apartmentNumber}
//     `);
// };

// logAdress({
//   city: "Москва",
//   street: "Пушкина",
//   houseNumber: 21,
//   apartmentNumber: 35,
// });

// когда в коде происходит неоднократное обращение к объекту, когда вытягивается таким образом значение его свойств
// принято использовать синтаксис дестрактурирующего присваивания

// const logAdress = (address) => {
//   const { city, street, houseNumber, apartmentNumber } = address; // данный код можно задать при написании параметров функции
//   console.log(`
//       Адрес:
//       г. ${city}, ул. ${street},
//       д. ${houseNumber}, кв. ${apartmentNumber}
//       `);
// };

// logAdress({
//   city: "Москва",
//   street: "Пушкина",
//   houseNumber: 21,
//   apartmentNumber: 35,
// });

// const logAdress = ({ city, street, houseNumber, apartmentNumber }) => {
//   console.log(`
//         Адрес:
//         г. ${city}, ул. ${street},
//         д. ${houseNumber}, кв. ${apartmentNumber}
//         `);
// };

// logAdress({
//   city: "Москва",
//   street: "Пушкина",
//   houseNumber: 21,
//   apartmentNumber: 35,
// });

/* при деструктуризации есть возможность переименовать
 сущность которую мы вытягиваем из объекта */

// const user = {
//   name: "Александр",
// };

// const admin = {
//   name: "Boss",
// };

// const { name: userName } = user;
// const { name: adminName } = admin;

// console.log("userName: ", userName);
// console.log("adminName: ", adminName);

// const user1 = {
//   name: "Александр",
//   age: 28,
//   city: "Москва",
// };

// const user2 = {
//   name: "Максим",
//   age: 5,
// };

// const { city = "не указан" } = user1;
////при деструктуризации можно использовать значение по умолчанию

// console.log("Город: ", city);

// const user = {
//   city: "Москва",
// };
// const { city: userCity = "не указано" } = user;
// console.log("usertCity:", userCity);

// Остаточные параметры (rest parameters)

// const logUser = (user) => {
//   const { name, age, city, ...otherInfo } = user;
//   // все остальные свойства которые не используются вывести в отдельном виде
//   // остаточные параметры (...otherInfo )

//   console.log(`
//     Имя: ${name}
//     Возрвст: ${age}
//     Город: ${city}
//     `);
//   console.log("Дополнительная информация:", otherInfo);
// };

// logUser({
//   name: "Александр",
//   age: 28,
//   city: "Москва",
//   company: "VK",
//   jobPost: "Фронтенд-разработчик",
// });
