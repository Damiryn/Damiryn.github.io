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
                <div class="buttonYes" onmouseenter="mouseEvent(this, true)" onmouseleave="mouseEvent(this)">Да</div>
                <div class="buttonNo" onmouseenter="mouseEvent(this, true)" onmouseleave="mouseEvent(this)">Нет</div>
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

function mouseEvent(el, event){
    
    if(event){
        $(el).addClass('active')
    }else{
        $(el).removeClass('active')
    }
}

function headerMouseEvent(el, event){
    
    if(event){
        $(el).addClass('active')
    }else{
        $(el).removeClass('active')
    }
}


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
    ind++;
    if (ind >= images.lenght) {
        ind = 0;
    }
    slider.src = images[ind];
    console.log(images);
    console.log(ind);
}

function back(){
    let slider = document.getElementById('image');
    ind--;
    if (ind < 0) {
        ind = images.lenght - 1;
    }
    slider.src = images[ind];
    console.log(images);
    console.log(ind);
}

function upTop (){
    $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  
}

function href(){
    $("#headerButton").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
}







function frameOnLoad() { // Resize
    const iframe = document.getElementById('frameBeerContent');
    const frameDocument = iframe.contentWindow.document;
    const html = frameDocument.getElementsByTagName('html')[0];
    $(iframe).css('min-height', html.offsetHeight);
}


function showFrame(path) {
    const iframe = document.getElementById('frameBeerContent');

    iframe.src = 'landing/' + path + '.html';

    iframe.contentWindow.onload = () => {
        console.log('Frame on load')
        frameOnLoad();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    iframe.contentWindow.onload();
}

$(function () {
    //Защита от детей
    createPopup();

    // upTop ();
    href();
    // Получаем путь из URL браузера, и по нему отрисовываем страницу. 
    // URL должен содержать формат ?ID=id
    const path = window.location.search.replace('?', '');
    const gettingPath = path.split('=')[1];

    if (window.location.search) {
        // Показываем нужный фрейм
        showFrame(gettingPath);
    } else {
        const iframe = document.getElementById('frameBeerContent');
        iframe.contentWindow.onload = () => {
            console.log('Frame on load')
            frameOnLoad();
        }
    }


});









// let slideIndex = 0;
// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot");

// function nextSlide() {
//   console.log(slideIndex);

//   if (slideIndex > slides.length - 1) {
//     slideIndex = 0;
//   } else {
//     slideIndex++;
//   }

//   showSlides(slideIndex);
// }

// function prevSlide() {
//   console.log(slideIndex);

//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   } else {
//     slideIndex--;
//   }

//   showSlides(slideIndex);
// }

// function currentSlide(index) {
//   slideIndex = index;
//   showSlides(slideIndex);
// }

// function showSlides(itemIndex) {
//   for (const slide of slides) {
//     slide.style.display = "none";
//   }

//   for (const dot of dots) {
//     dot.classList.remove('active');
//   }

//   slides[itemIndex].style.display = "block";
//   dots[itemIndex].classList.add('active');
// }



// // Thumbnail image controls


// $(function(){
//   showSlides(slideIndex);
// });


  // $('.buttonYes').on('moueselive' function(){
  //       addClass('active');
  //   })

//   let images = [
//     'https://sun9-32.userapi.com/impf/c824201/v824201969/173424/ayWCFmi538s.jpg',
//     'https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBQQlFefFKc0MgAocMwl9XZKou32VgeBqf_Q&usqp=CAU'
// ];
// let num = 0;
// function next(){
//     let slider = document.getElementById('image');
//     num++;
//     if (num >= images.lenght) {
//         num = 0;
//     }
//     slider.src = images[num];
// }
// function back(){
//     let slider = document.getElementById('image');
//     num--;
//     if (num < 0) {
//         num = images.lenght-1;
//     }
//     slider.src = images[num];
// }


