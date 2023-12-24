// Задание 1. Создать html-страницу с трекбаром.
// Предоставить пользователю возможность изменять положение
// синего указателя. 

let range = document.getElementById("range");
let output = document.getElementById("range-value");

range.oninput = function(){
    output.innerHTML = this.value;
}



// Задание 2. Создать html-страницу с галереей. 
// В один момент времени на экране отображается одно изображение и две кнопки: Назад и Вперед. При нажатии на кнопки
// изображения должны переключатся в указанном порядке. Когда
// следующего/предыдущего изображения нет, то соответствующую
// кнопку необходимо блокировать. Изображения хранить в заранее
// подготовленном массиве.

let arr = [
    'images/js.jpg',
    'images/css.jpg',
    'images/html.jpg'
]

let prev = document.querySelector(".slider-prev");
let next = document.querySelector(".slider-next");

let image = document.querySelector(".slider-item-img");

image.src = arr[0];
let i = 0;

if (i == 0){
    prev.setAttribute('disabled', true);
}

if (i == (arr.length - 1)){
    next.setAttribute('disabled', true);
}

prev.addEventListener('click', ()=>{    
    if (i > 0){
        prev.removeAttribute('disabled');
        i--;
        image.src = arr[i];
        next.removeAttribute('disabled');

        if (i == 0){
            prev.setAttribute('disabled', true);
        }
    }  
})

next.addEventListener('click', ()=>{
    if (i < (arr.length - 1)){
        i++;
        image.src = arr[i];
        prev.removeAttribute('disabled');

        if (i == (arr.length - 1)){
            next.setAttribute('disabled', true);
        }
    }  
})



// Задание 3. Создать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может
// быть развернут только один блок информации.

let titles = document.querySelectorAll('.list-title');
let textes = document.querySelectorAll('.list-text');

titles.forEach(function(title){
    title.addEventListener('click', ()=>{

    })
})




