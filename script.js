/**JavaScript методы примитивов. Числа.
 *  Объект Math. Округление чисел.
 *  Парсинг чисел из строк. */

// //>примитивы<
// const name = "Александр";
// //string
// const age = 28;
// //number
// const universeStars = 999999999999999999999n;
// //bigInt
// const isDeveloper = true;
// //boolean
// const id = Symbol();
// //symbol
// const dog = null;
// //null
// const future = undefined;
// //undefined

// //>непримитив<
// const user = {};
// //object

// const price = 99.99;
// const rounderPrice = price.toFixed(0); //округляет число toFixed(0)

// console.log(`Округленная цена:`, rounderPrice);
//даже у примитивов могут быть методы как у объектов

// метод toFixed - округляет число до определенного знака
//учет длинны ведет не после разделительного знака дробной части, а с самой первой цифры
// const price = 99.555;

// console.log(" Округление до 0 знаков после запятой:", price.toFixed());
// console.log(" Округление до 1 знака после запятой:", price.toFixed(1));
// console.log(" Округление до 2 знаков после запятой:", price.toFixed(2));

// // можно обращаться к числам напрямую

// console.log((5.011).toFixed(2));

// метод toPrecision

// const num = 100.055;

// console.log(num.toPrecision(4)); // округлил число до 4-х цифр начиная с самой первой
// console.log(num.toFixed(4)); // округлил число только до 4-х знаков после знака дробной части числа

// метод toString - приводит число к формату строки

// const num = 100;
// const numAsString = num.toString();

// console.log("Число:", num);
// console.log("Чисдо в виде строки:", numAsString);

// console.log(typeof num);
// console.log(typeof numAsString);

//у метода toString() есть следующий функционал
// если в аргумент переадть числоБ, оно будет отвечать за систему счисления

// const num = 100;

// console.log(`Число ${num} в двоичной системе счисления:`, num.toString(2));

// матеатические возможности

// console.log(Math); // объект Math

// console.log("Случайное число:", Math.random()); // Math.random рандомное дробное число

// console.log(Math.abs(-1)); //Math.abs - модуль числа
// console.log(Math.abs(2));
// console.log(Math.abs(100));
// console.log(Math.abs(-1000));

// возведение в степень

// console.log(Math.pow(2, 10));
// console.log(2 ** 10);

// // квадратный корень

// console.log(Math.sqrt(16));

// //кубичесчкий корень

// console.log(Math.cbrt(125));

// вычисление минимального и максимального числа

// console.log(Math.min(1, 2, 3, 4, -5, 10, 1111, 100));
// console.log(Math.max(1, 2, 3, 4, -5, 10, 1111, 100));

// округление чисел

// console.log(Math.round(3.49));
// console.log(Math.round(-3.49)); // округляет до ближайшего целого

// console.log(Math.floor(3.49));
// console.log(Math.floor(-3.49)); // округляет вниз до ближайшего целого

// console.log(Math.ceil(3.49));
// console.log(Math.ceil(-3.49)); // округляет вверх до ближайшего целого

// console.log(Math.trunc(3.49));
// console.log(Math.trunc(-3.49)); // округляет до целого в меньшую сторону без учета знака числа
// // отрицательное округляет всегда вверх, а отрицательное всегда вниз

// задача распарсить строку и получить из нее число

// const numberAsString = "100.5px";

// console.log(parseInt(numberAsString));
// console.log(parseFloat(numberAsString));
