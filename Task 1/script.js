// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
let value = prompt('Укажите имя', '');
alert ('Привет, ' + value + '!');


// 2. Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.
// let value = prompt('Укажите ваш год рождения', '');
// const currentYear = 2023;
// alert (currentYear - value);

// 3. Запросите у пользователя длину стороны квадрата 
// и выведите периметр такого квадрата. 
// let value = prompt('Укажите длину стороны квадрата', '');
// alert (value * 4);

// 4. Запросите у пользователя радиус окружности и выведите
// площадь такой окружности
// let value = prompt('Укажите радиус', '');
// alert ((value**2)*3.14);

// 5. Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчитайте скорость, 
// с которой необходимо двигаться, чтобы успеть вовремя.
// let length = prompt('Укажите расстояние', '');
// let time = prompt('Укажите время', '');
// alert (length / time);

// 6. Реализуйте конвертор валют. Пользователь 
// вводит доллары, программа переводит в евро. 
// Курс валюты храните в константе.
// let value = prompt('Укажите сумму в долларах', '');
// const euro = 0.933613;
// alert (value * euro + ' евро');

// 7. Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером 
// в 820 Мб помещается на флешку.
// let value = prompt('Укажите объем флешки в Гб', '');
// alert (Math. floor (value * 1024 / 820));

// 8. Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется
// let value = prompt('Укажите сумму', '');
// let chocolate = prompt('Укажите стоимость шоколадки', '');
// alert ('Можно купить: ' + Math.floor(value / chocolate) + '\nОстаток: ' + value % chocolate);

// 9. Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).
// let value = prompt('Укажите трехзначное число', '');
// let firstNumber = Math.trunc(value / 100).toString();
// let secondNumber = (Math.trunc(value / 10) % 10).toString();
// let thirdNumber = (value % 10).toString();
// alert (thirdNumber + secondNumber + firstNumber);

// 10. Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.
// let value = prompt('Укажите целое число', '');
// alert (value % 2 == 0 ? 'Четное' : 'Нечетное');