let ageCounter = 0;

function createPopup(){
    
    let container = document.createElement('div');
    let id = 'age_' + ageCounter;

    container.classList.add('age');
    container.setAttribute('id', id) // id="age_0"
    container.innerHTML = `
        <div class="age-content">
            <div class="age_text">
                <p>Сайт доступен только для лиц старше 18 лет</p>
                <h6>Я СТАРШЕ 18 ЛЕТ</h6>     
            </div>                      
            <div class="age_button">
                <div class="buttonYes" onmouseenter="headerMouseEvent(this, true)" onmouseleave="headerMouseEvent(this)">Да</div>
                <div class="buttonNo" onmouseenter="headerMouseEvent(this, true)" onmouseleave="headerMouseEvent(this)">Нет</div>
            </div>
        </div>`;
    
    ageCounter++;

    $('#ageCheck').html(container);
    container.style.display = 'flex';

    let closeButton = $('#' + id).children().children().children('.buttonYes');
    $(closeButton).on('click', function(){                      //удаляем окно
        document.getElementById(id).remove();           
    });
    $('.buttonNo').on('click', function(){
        window.location.href = 'https://www.google.com/';
    });
   
}

function headerMouseEvent(el, event){
    
    if(event){
        $(el).addClass('active')
    }else{
        $(el).removeClass('active')
    }
}

//Слайдер сисек - начало
let images = [
    './boobs/boobs1.jpg',
    './boobs/boobs2.jpg',
    './boobs/boobs3.jpg',
    './boobs/boobs4.jpg',
    './boobs/boobs5.jpg'
];

let ind = 0;

function next(){
    let slider = document.getElementById('image');
    if (ind > images.lenght - 1) {
        ind = 0;
    }else{
        if(ind >=4){
            ind = 0;
        }else{
        ind++;   
        }
    }
    
    slider.src = images[ind];
}

function back(){
    let slider = document.getElementById('image');
    if (ind < 0) {
        ind = images.lenght - 1;
    }else{
        if(ind <=0){
            ind = 4;
        }else{
        ind--;   
        }
    }
    slider.src = images[ind];
}
//Слайдер сисек - конец
//Кнопка вверх - начало
function upTop(){

    let upButton = $('#up');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1500){
            upButton.addClass('show');
        }else{
            upButton.removeClass('show');
        }
  });  

upButton.on('click', function(el){
    el.preventDefault();
    $('body,html').animate({scrollTop:0},500);
});
//Кнопка вверх - конец
//Плавный поиск - начало
function href(){
    $("#headerButton").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}
//Плавный поиск - конец
//Авторизация - начало
function logIn(){
    const login = $('#login').val();
    let pass = $('#password').val();

    localStorage.setItem(login, pass);
    console.log(localStorage.getItem(login))

    let keys = Object.keys(localStorage);
    for(let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
    }
    $('#answer').html('В локалсторедж записал логин - '+login+' и пароль - '+pass);
}
//Авторизация - конец


// window.addEventListener('scroll', function() {
//   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
// });




function scrollFooter(){

    let scroll = window.pageYOffset;

    if (scrollTop() = 2500){
        $('.footer').addClass('active');
    }else{
        $('.footer').removeClass('active');
    }

    console.log(window.pageYOffset);
}







$(function () {
    console.log('work it');
    //Защита от детей
    // createPopup();
    // scrollFooter();
    // upTop();
    // href();

});


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_slide
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_image_grid