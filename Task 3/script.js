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


fraction1 = {};

fraction1['nominator'] = +prompt('Введите числитель первой дроби','');
fraction1['denominator'] = +prompt('Введите знаменатель первой дроби','');

fraction2 = {};

fraction2['nominator'] = +prompt('Введите числитель второй дроби','');
fraction2['denominator'] = +prompt('Введите знаменатель второй дроби','');

console.log(fraction1);
console.log(fraction2);

// функция сложения
function sum(){
    let {nominator: nominator1, denominator: denominator1} = fraction1;
    let {nominator: nominator2, denominator: denominator2} = fraction2;

    console.log(nominator1);
    console.log(denominator1);
    console.log(nominator2);
    console.log(denominator2);

    if (denominator1 == denominator2){
        let fractionSum = (nominator1 + nominator2)/denominator1;
        alert(`Сумма дробей: ${fractionSum}`)
    }   else {
           let fractionSum = ((nominator1 * denominator2) + (nominator2 * denominator1))/(denominator1*denominator2); 
           alert(`Сумма дробей: ${fractionSum}`);
        }
}


// функция вычитания
function subtraction(){
    if(fraction1.denominator == fraction2.denominator){
        let fractionSubstraction = (fraction1.nominator - fraction2.nominator)/fraction1.denominator;
        alert (`Разность дробей равна: ${fractionSubstraction}`);
    } else {
        let fractionSubstraction = ((fraction1.nominator * fraction2.denominator) - (fraction2.nominator * fraction1.denominator))/(fraction1.denominator * fraction2.denominator);
        alert (`Разность дробей равна: ${fractionSubstraction}`);
    }
}

// функция умножения
function multiplication(){
    let fractionMultiplication = (fraction1.nominator * fraction2.nominator)/(fraction1.denominator * fraction2.denominator);
    alert (`Произведение дробей равно: ${fractionMultiplication}`);
}

// функция деления
function division(){
    let fractionDivision = (fraction1.nominator * fraction2.denominator)/(fraction1.denominator * fraction2.nominator);
    alert (`Частное дробей равно: ${fractionDivision}`);
}

// функция сокращения объекта-дроби
function reduction(){
    let {nominator: nominator1, denominator: denominator1} = fraction1;
    let {nominator: nominator2, denominator: denominator2} = fraction2;

    let coefficient1 = Math.min(nominator1, denominator1);
    let coefficient2 = Math.min(nominator2, denominator2);

    if (nominator1 == denominator1){
        let reduceFraction1 = 1;
        console.log (reduceFraction1);
        alert (`Первая сокращенная дробь: ${reduceFraction1}`)
    } else {
        
        if (nominator1 % coefficient1 == 0 && denominator1 % coefficient1 == 0){
            nominator1 = nominator1/coefficient1;
            denominator1 = denominator1/coefficient1;
            let reduceFraction1 = (`${nominator1}/${denominator1}`);
            console.log (reduceFraction1);
            alert (`Первая сокращенная дробь: ${reduceFraction1}`)
        } else {
            do {
                if (nominator1 % coefficient1 == 0 && denominator1 % coefficient1 == 0){
                    nominator1 = nominator1/coefficient1;
                    denominator1 = denominator1/coefficient1;
                } else {
                    coefficient1--;
                }
            } while (coefficient1 > 1);

            alert (`Первая сокращенная дробь: ${nominator1}/${denominator1}`);
        }
    }

    if (nominator2 == denominator2){
        let reduceFraction2 = 1;
        console.log (reduceFraction2);
        alert (`Вторая сокращенная дробь: ${reduceFraction2}`)
    } else {
        
        if (nominator2 % coefficient2 == 0 && denominator2 % coefficient2 == 0){
            nominator2 = nominator2/coefficient2;
            denominator2 = denominator2/coefficient2;
            let reduceFraction2 = (`${nominator2}/${denominator2}`);
            console.log (reduceFraction2);
            alert (`Втооая сокращенная дробь: ${reduceFraction2}`)
        } else {
            do {
                if (nominator2 % coefficient2 == 0 && denominator2 % coefficient2 == 0){
                    nominator2 = nominator2/coefficient2;
                    denominator2 = denominator2/coefficient2;
                } else {
                    coefficient2--;
                }
            } while (coefficient2 > 1);

            alert (`Вторая сокращенная дробь: ${nominator2}/${denominator2}`);
        }
    }
}

sum();
subtraction();
multiplication();
division();
reduction();




