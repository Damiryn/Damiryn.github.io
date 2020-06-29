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
                <div class="buttonYes">Да</div>
                <div class="buttonNo">Нет</div>
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






function frameOnLoad() { // Resize
    const iframe = document.getElementById('content');
    const frameDocument = iframe.contentWindow.document;
    const html = frameDocument.getElementsByTagName('html')[0];
    $(iframe).css('min-height', html.offsetHeight);
}

$(function () {
    //Защита от детей
    createPopup();

    // Получаем путь из URL браузера, и по нему отрисовываем страницу. 
    // URL должен содержать формат ?ID=id
    const path = window.location.search.replace('?', '');
    const gettingPath = path.split('=')[1];

    if (window.location.search) {
        // Показываем нужный фрейм
        showFrame(gettingPath);
    } else {
        const iframe = document.getElementById('content');
        iframe.contentWindow.onload = () => {
            console.log('Frame on load')
            frameOnLoad();
        }
    }


});

function showFrame(path) {
    const iframe = document.getElementById('content');

    iframe.src = 'pages/' + path + '.html';

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



  // $('.buttonYes').on('moueselive' function(){
  //       addClass('active');
  //   })
