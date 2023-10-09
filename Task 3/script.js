// Задание 1
// Создать объект, описывающий автомобиль (производитель,
// модель, год выпуска, средняя скорость), и следующие функции
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let car = {
//     manufacturer: 'Hyundai',
//     model: 'Creta',
//     year: 2022,
//     avSpeed: 80,

//     showInfo(){
//         alert(`Производитель: ${this.manufacturer}\nМодель: ${this.model}\nГод выпуска: ${this.year}\nСредняя скорость: ${this.avSpeed}`);
//     },

//     getTimeTravel(){
//         let timeTravel = wayLength/this.avSpeed;
//         let stopsNumber = Math.floor(timeTravel/4);
//         let timeTravelWithStops = timeTravel + stopsNumber;
//         alert(`На дорогу понадобится не менее: ${timeTravelWithStops} часов`);
//     }
// }

// car.showInfo();

// let wayLength = prompt('Введите расстояние в км', '');
// car.getTimeTravel();



// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


let fraction1 = {};

fraction1['nominator'] = +prompt('Введите числитель первой дроби','');
fraction1['denominator'] = +prompt('Введите знаменатель первой дроби','');

let fraction2 = {};

fraction2['nominator'] = +prompt('Введите числитель второй дроби','');
fraction2['denominator'] = +prompt('Введите знаменатель второй дроби','');

console.log(fraction1);
console.log(fraction2);

function sum(){
    if (fraction1.denominator == fraction2.denominator){
        let fractionSum = (fraction1.nominator + fraction2.nominator)/fraction1.denominator;}
        // else {
        //    let fractionSum = ((fraction1.nominator * fraction2.denominator) + (fraction2.nominator * fraction1.denominator))/(fraction1.denominator*fraction2.denominator); 
        // }

        alert(`Сумма дробей: ${this.fractionSum}`);
    }

sum();



