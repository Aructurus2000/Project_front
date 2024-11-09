/* Строки в JavaScript.
 Методы at, replace, slice, includes, repeat, trim, split.
 Длина строки length. */

// const name = "Александр";
// const emptyStr = "";
// const strWithOneSpace = " ";

// console.log(`Длина строки '${name}': `, name.length); //length обычное свойство содержащее в значении число
// console.log(`Длина строки '${emptyStr}': `, emptyStr.length);
// console.log(`Длина строки '${strWithOneSpace}': `, strWithOneSpace.length);

// получаем конкретный символ из строки по его индексу

// const name = "Александр";
// //получаем первый симол из строки
// console.log(name[0]);
// //получаем последний символ из строки
// console.log(name[name.length - 1]);

// Метод at прмименяется к строке, как к объекту name.at
// в аргументах принимает число номер позиции на примере индекса
// const name = "Александр";

// console.log(name.at(0)); //получим первый символ
// console.log(name.at(1)); //получим второй символ
// console.log(name.at(-1)); // первый символ с конца

// методы изменения регистра символов строки
// const text = "КаКоЙтоТеКсТ";
// // C нижним регистром
// console.log(text.toLowerCase());
// // C верхним регистром
// console.log(text.toUpperCase());

// // Избавление строки от пробелов в начале и конце
// const message = "    Привет    ";

// console.log(`Строка "${message} имеет длину ${message.length} символов`);

// const messageFrontend = message.trim(); // метод обрезает пробелы в начале ив конце messahe.trim()

// console.log(
//   `Строка "${messageFrontend} имеет длину ${messageFrontend.length} символов`
// );

// // для точечного отсечения
// const message = "        привет     ";

// const messageFormatedBefore = message.trimStart();
// console.log(
//   `Сообщение "${messageFormatedBefore}" имеет длину ${messageFormatedBefore.length}`
// );

// const messageFormatedAfter = message.trimEnd();
// console.log(
//   `сообщение "${messageFormatedAfter}"имеет длину ${messageFormatedAfter.length}`
// );

// Метод indexOf позволяет получить индекс первого символа подстроки в строке

// const message = "Пробуем найти ~это выражение~ в этом прпедложении";

// console.log(message.indexOf("~это выражение~")); //14
// console.log(message.indexOf("П")); //0
// console.log(message.indexOf("всвмвмвм")); //-1 несуществующая строка всегда выдает данное значение

// const message = "Пробуем найти ~это выражение~ в этом прпедложении";

// /*
//  Такие првоерки на наличие подстроки в строке делают следующим образом
//  */
// console.log(message.indexOf("всвмвмвм") !== -1); //false - подстрока не найдена

// существет более удобный метод
//метод includes

// const message = "Пробуем найти ~это выражение~ в этом прпедложении";

// console.log(message.includes("~это выражение~")); // сразу возвращает boolean значение - true в данном случае

// методы startsWith и endsWith

// const message = 'Начало строки и конец'

// console.log( message.startsWith('Нач')) // начинается строка на указанное значение
// console.log( message.endsWith('Нач')) // оканчивается строка на указанное значение

// Каждому из данных методов можно передать второй аргумент index
// номер позиции символа строки с которой будет происходить поиск вхождения

// const message = "Привет";

// console.log(message.indexOf("ив", 4)); //-1
// console.log(message.includes("ив", 4)); //false
// console.log(message.startsWith("Пр", 0)); //true
// console.log(message.endsWith("ет", 3)); //false
// console.log(message.endsWith("ет", message.length)); //true

// Обрезки строки, способы получить подстроку из строки

// const str = "JavaScript";

// // Метод substring
// console.log(str.substring(0, 4)); //Java
// // метод позволяет передать индексы в любом порядке
// console.log(str.substring(4, 0)); //Java

// // Метод slice
// console.log(str.slice(0, 4)); //Java
// // не позволяет менять индексы местами так чтобы начальный был больше чем конечный
// console.log(str.slice(0, 4)); // пустая строка
// // можно передать отрицательный индекс в методе  slice
// console.log(str.slice(-6)); //Script - получили последние 6 символов с конца

// console.log(str.slice(-6, -3)); // Scr

// const str = "JavaScript";
// // Метод repeat - повторяет строку указанное кол-во раз и возвращает результатом новую строку
// console.log(str.repeat(3));

// // методы для замены подстроки в строке
// const message = "Я изучаю бэкенд, но я еще ничего не знаю про бэкенд";
// // replace() - заменят первую обнаруженную подстроку на то что укажем
// console.log(message.replace("бэкенд", "фронтенд"));
// // // Метод replaceAll -  заменят все вхождениея подстроки
// console.log(message.replaceAll("бэкенд", "фронтенд")); //
// //если втроке будет несколько вхождений подстроки которую хотим заменить
// //в результате будет строка в которой изменение произошли только в первом вхождении этой самой подстроки

//оба метда могут принимать не просто строки, а целые регулярные выражения

// // ЧТобы изменить все вхождения строки не обязательно использовать метод replaceAll
// const message = "Я изучаю бэкенд, но я еще ничего не знаю про бЭкЕнд";

// // достаточно в методе replace первым аргументом написать следующее выражение /бэкенд/g.
// // флаг g - регулярка будет искать с помощью данного флага все совпадения, а не только первое

// // если нужно чтобы регулярное выражение искало вхлждение без учета регистра то в конце регулярного выражения
// // можно добавить флаг i  /бэкенд/gi
// console.log(message.replace(/бэкенд/gi, "фронтенд"));

//Пример
// нужно заменить все цифры в этой строке на символ #

// const str = "+7(999) 999-99-99";
// // чтобы найти все числовые символы в строке \d
// console.log(str.replace(/\d/g, "#"));

// метод split - позволяет разбить строку на массив по указанному разделителю
// который указывается в аргументе
// const str = "Привет, мир!";

// console.log(str.split(", ")); // в качетсве разделителя (", ")

// Все методы разобранные выше не мутируют исходную строку

// const message = " Привет!   ";

// console.log(`
// Сообщение до:
// "${message}"
// `);
// // каждое из этих выражений вернуло в
// //никуда результат с измененной строкой но исходная сущность не поменялась
// message.trim();
// message.toUpperCase();
// message.slice(0, 4);

// console.log(`
// Сообщение до:
// "${message}"
// `);
// строка без изменений

// Если изменить следующим образом то значения будет обновлены

// let message = " Привет!   ";

// console.log(`
// Сообщение до:
// "${message}"
// `);

// message = message.trim();
// message = message.toUpperCase();
// message = message.slice(0, 4);

// console.log(`
// Сообщение до:
// "${message}"
// `);

// можно написать иначе

// let message = " Привет!   ";

// console.log(`
// Сообщение до:
// "${message}"
// `);

// message = message.trim().toUpperCase().slice(0, 4);

// console.log(`
// Сообщение до:
// "${message}"
// `);

/**
 * Выражение с применением метода лишь вернет новый результат
 * если его не записать в переменную то и смыла от метода не будет
 */

//      ЗАДАЧА на методы строк       //

const value = prompt("Введите ваше имя:");

const clearValue = value.trim().toLowerCase;
// обрежеи ненужные пробелы в начале и в конце строки и приводим к нижниму регистру

// если длинна введенного значения равна нулю то ошибка
if (clearValue.length === 0) {
  alert("Ошибка! Имя не может быть пустым.");
}

//фильтрация на запретные слова
// нельзя использовать 'админ' во всех регистрах его вариациях

if (clearValue.includes("админ")) {
  alert("Ошибка! Вы не можете занять это имя");
}
