// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

let number1 = +prompt("Введите первое число диапазона", "");
let number2 = +prompt("Введите последнее число диапазона", "");
let sum = 0;

while (number1 <= number2){
    sum = sum + number1;
    number1++;
}

alert (`Сумма всех чисел ${sum}`);


// 2. Запросить 2 числа и найти только наибольший общий
// делитель.

// let number1 = +prompt("Введите первое число", "");
// let number2 = +prompt("Введите второе число", "");

// while (number1 != 0 && number2 != 0){
//     if (number1 > number2){
//         number1 = number1 % number2;
//     } else if (number1 < number2){
//         number2 = number2 % number1;
//     }
    
// }

// alert (`Наибольший общий делитель ${number1 + number2}`);



// 3. Запросить у пользователя число и вывести все делители
// этого числа.

// let number = +prompt("Введите число", "");
// let devider = [];

// for (let index = 1; index <= number; index++) {
    
//     if (number % index == 0){
//         devider.push(index);
//     }
    
// }
// alert (`Все делители введенного числа: ${devider}`)


// 4. Определить количество цифр в введенном числе.

// let number = prompt("ыыедите число", "");

// let quantaty = 0;

// for (let index = 0; index < number.length; index++) {
//     quantaty = quantaty + 1;
    
// }

// alert (`Количество цифр в числе: ${quantaty}`)



// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, 
// что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let index = 1; index <= 10; index++) {
//     let number = +prompt(`Введите ${index}е число`);
    
//     if (number > 0){
//         positive++;
//     }
//     if (number < 0){
//         negative++;
//     } 
//     if (number == 0){
//         zero++;
//     } 
//     if(number % 2 == 0){
//         even++
//     } 
//     if(number % 2 !== 0){
//         odd++
//     }

// }

// alert(`положительных: ${positive}, отрицаткльных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}`)


// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, 
// решить пример, вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.



// do {
//     let number1 = prompt("Введите число 1", "");
//     let number2 = prompt("Введите число 2", "");
//     let sign = prompt("Введите знак +, -, * или /", "");


//     let result = eval(`${number1} ${sign} ${number2}`);
//     alert(result);

// } while (confirm ("Еще один пример?"));


// 7. Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифрычисла и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).


// let number = prompt("Введите число", "");
// let moveNumber = +prompt("Укажите на сколько цифр сдвинуть", "");

// alert(number.slice(moveNumber) + number.slice(0, moveNumber))



// 8. Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.

// const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let currentDay = 0;

// while (confirm(`${days[currentDay]}. Хотите увидеть следующий день?`)){
//     currentDay++;
//     if (currentDay > 6){
//         currentDay = 0;
//     }
    
// }



// 9. Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.

// let table = [];

// for (let index = 2; index <= 9; index++) {
//     table.push(`\n Таблица умножения на ${index}\n`);
//     for (let factor = 1; factor <= 10; factor++) {
//         table.push(`${index} * ${factor} = ${index * factor}\n`);
//     }
   
// }
// alert(table.join(''));


// 10. Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


// let number = +alert("Загадайте число от 0 до 100");
// let N = 50;
// let start = 0;
// let finish = 100;


// while(number !== N ){
//     let result = prompt(`Ваше число > ${N}, < ${N} или == ${N}?`)
//     if(result == ">"){
//         start = N;
//         N = Math.ceil((finish - start)/2 + start); 
//     } else if(result == "<"){
//         finish = N;
//         N = Math.ceil((finish - start)/2 + start);
//     } else {
//         break;
//     }
// }
// alert(`Вызагадали ${N}`)

