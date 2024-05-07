//Модальное окно

let modal = document.getElementById('modal_Window');
let btn = document.getElementById("open-modal_window__btn");
let span = document.getElementsByClassName("modal_window__close")[0]
let bodyOne = document.querySelector('body');
let closeBtn = document.getElementsByClassName("send")[0]

btn.addEventListener("click", function(){
    modal.style.display = "block";
    bodyOne.classList.toggle('lock');
});

span.addEventListener("click", function(){
    modal.style.display = "none";
    bodyOne.classList.remove('lock');
});

window.addEventListener("click", function(event){
    if (event.target == modal){
        modal.style.display = "none";
        bodyOne.classList.remove('lock');
    }
});

closeBtn.addEventListener('click', function(){
    modal.style.display = "none";
    bodyOne.classList.remove('lock');
});



//Бургер-меню



let burgerIcon = document.querySelector('.burger__icon');
let menu = document.querySelector('.menu_big');
let body = document.querySelector('body');
burgerIcon.addEventListener('click', function(){
burgerIcon.classList.toggle('active');
menu.classList.toggle('active');
body.classList.toggle('lock');


});

menu.addEventListener('click', function(){
if (burgerIcon.classList.contains('active')) {
    burgerIcon.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
}
});

document.getElementById('main').addEventListener('click', function() {
burgerIcon.classList.remove('active');
menu.classList.remove('active');
body.classList.remove('lock');
});



// ТАБЫ

let tabs = document.querySelectorAll(".tabs p");
let tabContents = document.querySelectorAll(".tab-block");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});




//Аккордеон

const accordion = document.getElementsByClassName('accordion_contentBox');

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}

let tabBtnThree = document.querySelectorAll(".point");

tabBtnThree.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnThree = item;

        tabBtnThree.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtnThree.classList.add("active");
    });
});




// СЛАЙДЕРЫ

const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
// Создадим массив всех изображений
const imgArr = ['style/pictures/slide1.png','style/pictures/slide2.png','style/pictures/slide3.png'];
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];
    //Обновляем точки
    updateDots(index);
    
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});

/*(function () {
    let mas = ['1/3', '2/3', '3/3'];
    let n = 0;
    let but = document.getElementsByClassName("slider__nav-right")[0];
    let div = document.getElementsByClassName("divdiv")[0];
    but.onclick = function () {
        div.innerHTML = mas[n % mas.length];
        n++;
    }
    but.click();
})();*/







// ФИЛЬТРЫ

const list = document.querySelector('.list'), 
        items = document.querySelectorAll('.blocks__item')

function filter(){
    list.addEventListener("click", event => {
        const targetId = event.target.dataset.id
        
        switch(targetId){
            case 'all':
                getItems('blocks__item')
                break

            case 'cosmitic':
                getItems(targetId)
                break

            case 'capital_repairs':
                getItems(targetId)
                break

            case 'euro_renovation':
                getItems(targetId)
                break

            case 'design':
                getItems(targetId)
                break         
        }
    })
}

filter()

function getItems(className){
    items.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}

let costBtnFour = document.querySelectorAll(".list p");

costBtnFour.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtnFour = item;

        costBtnFour.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtnFour.classList.add("active");
    });
});