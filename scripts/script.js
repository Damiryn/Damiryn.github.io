//Объекты (карточки)
const boxes = [{
		title: 'Стих 1',
		text: 'Вкусный нежный холодок Так и просится в роток. Есть ванильный, шоколадный, Есть с клубничкой, мармеладный. Весь большой ассортимент Тает быстренько — в момент. Любят все давным-давно Лёд хрустящий — ЭСКИМО!',
		autor: 'Дарт Вейдер',
		hasButton: false,
		color: 'red',

	},
	{
		title: 'Стих 2',
		text: 'Брат мороженое кушал, А меня совсем не слушал. Я прошу его: — Сережка!  Дай попробовать немножко! Тот ванильный аромат, Как прохладный водопад. Я мороженое очень Есть люблю и днем и ночью. — Дай разочек укусить — Я дам бантик поносить, У меня еще есть брошка… Ну, не жадничай, Сережка! Знаешь, как тебя люблю я?!. Хочешь, в щечку поцелую?',
		autor: 'Гендальф',
		hasButton: true,
		color: 'green',
	},
	{
		title: 'Стих 3',
		text: 'Белый пломбир, словно горсточка снега. Сладкого снега – упавшего с неба. Будто бы феи в снежки там играли. И в мой стаканчик снежинки бросали. Так, что с мороженым всё мне понятно. Главное, кушать его так приятно.',
		autor: 'Тони Старк',
		hasButton: false,
		color: 'blue',
	}
];

function createCardBoxes() {
	let html = '';
	let button = `<div style="margin-left: 8px">
						<button>Подробнее</button>
					</div>`;

	for (const box of boxes) {
		html += `
		<div class="box-container" onmouseenter="mouseEvent(this, true)" onmouseleave="mouseEvent(this)">
			<div>
				<div class="box-title">
					${box.title}
				</div>

				<div class="box-content ${box.color}">
					${box.text}
				</div>
			</div>

			<div class="box-autor">
				<div>
					Автор :
				</div>
				<div class="autor">
					${box.autor}
				</div>
				${hasButton(box.hasButton)}
			</div>

		</div>`;
	}

	function hasButton(box) {
		if (box) {
			return button;
		}

		return '';
	}
	$('#data_container').html(html);
}


function mouseEvent(el, event){
	
	// $(el).on('mouseenter', function(){
	if(event){
		$(el).addClass('size')
	}else{
		$(el).removeClass('size')
	}

	// //if(this){
	// 	$(el).addClass('size')
	// }else{
	// 	$(el).removeClass('size')
	// }

 // console.log(el);
 // console.log(event);
}



//типа ДЗ

let snouden = {}
let i = 0;

function snoudenStyle(){
	let name = $('.name').val();
	snouden.name = name;
	let from = $('.from').val();
	snouden.from = from;
	let age = $('.age').val();
	snouden.age = age;
	let texts = $('.texts').val();
	snouden.texts = texts;


	let SS = `
		<div id="snowdenBox_${i}" class="snowdenBox">
		<span class="close">&times;</span>
		<div>${snouden.name}</div>
		<div>${snouden.from}</div>
		<div>${snouden.age}</div>
		<div>${snouden.texts}</div>
		</div>
		`
		i++;

	$('#snoudenStyleBox').append(SS);
	

	let close = $('#snowdenBox_' + i);		//??
	
	$('.close').on('click', function(){						
		$(this).parent().replaceWith();
		console.log('Work It');		
	});

	console.log(close);
	console.log(i);
	console.log(snouden);
}



//Добавляем хедер из масива
let menuLinks = [
	'Home',
	'Media',
	'Contancs',
	'Follow',
];

function generateMenuLinks (){
	let html = '';

	for (const items of menuLinks){
		html += `<a href="">${items}</a>`;
	}
 	return html;

}

//Добавить нижний хэдер
function addHeader (){
	let textHader = prompt('Название заголовка?');
	let header = `
			<span>
			<a class="addMenu">${textHader}</a>
			<button class="dilete" onclick="dellist(this.parentNode)">Удалить</button>
			</span>`;

	$('.downmenu').append(header);
}

//Поменять цвета текста
function Selectors(){

	$('.items1 li:first').css('color', 'blue');
	$('.items1 li:last').css('color', 'blue');
	$('i+b').css('color', 'blue');
	$('[value="Добавить задачу"]').css('background-color','pink');
};

function SelOff(){

	$('.items1 li:first').css('color', 'black');
	$('.items1 li:last').css('color', 'black');
	$('i+b').css('color', 'red');
	$('[value="Добавить задачу"]').css('background-color','#add9fe');
};

//Кнопка Добавить задачу
function addTasks (){
	let textTasks = $('#addTasks').val();
	let task = `
			<div class="addTasks">
				<div>${textTasks}
				<button class="dileteButton" onclick="dellist(this.parentNode.parentNode)">x</button>
				</div>
			</div>`;

	$('#newTasks').append(task);
}


//Функции к кнопкам

//увеличить, уменьшить, проверка
let def = 0;
let isDec = false;

function inc(num) {
	num = num + 1;
	console.log (num);
	def = num;
}
function dec(num) {
	num = num - 1;
	console.log (num);
	def = num;
}

function check (num) {
	if (isDec){
			if (num !== 0) {
					inc (num);
			} 
			else {
					isDec = true;
					dec (num);
			}
	}
	else{
			if (num < 10){
				inc (num);
			}
			else if (num >= 10){
					dec (num);
			}
			else {
				isDec = false;
				dec (num);
			}
	}
} 

//кнопка AddList
let item = 0;
	
while (item < 10) {
	$ ('#itemlist').append(`<li>${item}</li>`);
	console.log (item);
	item++;
}

function list (){
	let text = prompt('Vvedi text');

	console.log(text);

	let html = `
		<li>
			<div class="itemlist">
				<span class="target" onmouseenter="toggleColor(this, true)" onmouseleave="toggleColor(this)">${text}</span>
				<button class="dilete" onclick="dellist(this.parentNode.parentNode)">x</button>
			</div>
		</li>`;

	$('#itemlist').append(html);
}

function dellist (element){
	console.log('Удалить');
	console.log(element);

	$(element).replaceWith();
}

function toggleColor (element, active = false){
	console.log (element, active);

	let activeColor = 'green';
	let defalutColor = 'blue';

	if (active){
		$(element).css('color', activeColor);
	} else {
		$(element).css('color', defalutColor);
	}
}

//Кнопка Записать новое значение
let user = '';

function setValue(){
	let value = prompt('Who are you?');

	$('#Value').html(value);
}

//Кнопка скрыть/показать
function setHide(){
	let hideElement = $('#General');
	let button = $('#HideButton');
	
		if($(button).hasClass('active')){ // if всегда работает тогда когда true...
			$(button).removeClass('active');
			$(button).text('Скрыть');
			$(button).css('color', 'black');
			$(hideElement).show();
		} else {						// ....иначе будет выполнятс else
			$(button).addClass('active');
			$(button).text('Показать');
			$(button).css('color', 'red');
			$(hideElement).hide();
		}

	console.log($(button).hasClass('active'));
	console.log(button);
}

// Popup window Кнопка Показать окно
let modalCounter = 0;

function createPopup(){
	console.log('Popup Window');
	
	let container = document.createElement('div');
	let textModal = prompt('Как тебя зовут?')
	
	let id = 'modal_' + modalCounter;

	container.classList.add('modal');
	container.setAttribute('id', id) // id="modal_0"
	container.innerHTML = `
		<div class="modal-content">
   		 	<div class="modal_text">
    		<p>${textModal}</p>		
    		</div>						
			<div class="modal_button">
   		 	<span class="close">Понятно</span>
   		 	</div>
  		</div>`;
	
	console.log(container);

	modalCounter++;

	$('#modals').html(container);
	container.style.display = 'flex';

	let closeButton = $('#' + id).children().children().children('span');
	
	$(closeButton).on('click', function(){						//удаляем окно
		document.getElementById(id).remove(); 			
	});
}

// Zadacha, калькулятор телефонов
function SummaTell() {

const rate_tax = 0.1;
let bank_balans = $('#bank_balans').val();
let rate_tel = $('#rate_tel').val();
let rate_acc = $('#rate_acc').val();

rate_tel = Number(rate_tel);
rate_acc = Number(rate_acc);

let quantity = 0;

let SumMyPorchases = 0;
let	SumTel = 0;
let SumAcc = 0;
		
		
	SumTel = rate_tel + (rate_tel * rate_tax);
		console.log (SumTel, 'Стоимость телефона');
	SumAcc = rate_acc + (rate_acc * rate_tax);
		console.log (SumAcc, 'Стоимость Аасессуара');

		while (SumMyPorchases < (bank_balans - SumTel)) {
					console.log ('Yes, buy!');
				SumMyPorchases = SumMyPorchases + SumTel;
			    	console.log (SumMyPorchases, 'Сумма покупки');
			   			
			if ((SumMyPorchases + SumAcc) < bank_balans){
				SumMyPorchases = SumMyPorchases + SumAcc;
					console.log (SumMyPorchases, 'Можно добавить акк');
					quantity++;
			}else{
				console.log (SumMyPorchases, 'На акк не хватило');
			}
     	};

     	    if ((SumMyPorchases + SumTel) > bank_balans){
				console.log (SumMyPorchases, 'No balans');
			};	

	$('#quantity').html('Количество = ' + quantity);

	$('#Telephone').html('Общая сумма покупки = ' + SumMyPorchases.toFixed(2));

};

function delRezultTelepphone(){
	$('#quantity').empty();
	$('#quantity').html('Количество = ');

	$('#Telephone').empty();
	$('#Telephone').html('Общая сумма покупки = ');
}

//Переключатель картинок ??

function addImage(){

	let clickImg = $('.clickImg').clone().append();
			
	console.log('Hello')
	
	$('#imagecontainer').append(clickImg);
		
		// while(addImage()){
		// 	break;
		// }

		// // if (addImage()){
		// // 	console.log('Yes')
		// // 	return;
		// // }
}



function toggleSidebar() { 
	let f = $('.sideBar').toggleClass('open');
}	




// onmouseenter="toggleImage(this, true)" onmouseleave="toggleImage(this)"
// function toggleImage(el, act){

// 	let = ;
// 	let = ;

// 	if (act){
// 		$(el).css('color', activeColor);
// 	} else {
// 		$(el).css('color', defalutColor);
// 	}

// }



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



//функция "запуска страницы", всегда должна быть в конце!
$(function(){


	$('.input_button').on('click', function(){ 		//Доб. элементов объекта на страницу
	snoudenStyle()
	});

	$('.closeMenu').on('click', function(){
        $('.sideBar').removeClass('open');
    });

	createCardBoxes();

	$('#menuLinks').append(generateMenuLinks ()); // Добавляет массив Create header в конец header

	if (!localStorage.getItem('name')){
		localStorage.setItem ('name', 'Damir');	//Делает Damir под заголовком (кеш браузера)
	} else {
		user= localStorage.getItem('name');
	}

	$('#userName').html(user);

	$('button').on('click', function(){
		let attr = $(this).attr('id');
			console.log(!!attr); 			// !! как '-' на '-'
		
		if (!!attr){
			if (attr === 'HideButton'){		//кнопка скрыть\показать
				setHide();
			}else if(attr === 'createPopup'){
					createPopup();
			}else{
				console.log('No ID');
			}
		}else{
			let text = $(this).text();
			
			switch (text){
				//case "Скрыть": 					// if (condition)
				//case "Показать":  				// if (condition)
				case "AddList":  					// if (condition)
					list ();
					break;
				case "Записать новое значение":
					setValue();
					break;
				case "Поменять цвета":
					Selectors();
					break;							//без брейка работает только 1 из 2 кнопок (либо-либо) потому что проскакивает?
				case "Вернуть как было": 		
					SelOff();
					break;							//без брейка может "сломаться" кнопка и выполнять то что идет следующим
				case "Добавить":
					addHeader ();
			default: 								// else
				console.log(text);
			}
		}

	});

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




// function heartInc(act){
// let rez = 0;

// 	act = act + 1;
// 	console.log (act);
// 	rez = act;
// 	console.log (rez);
// }



// let act = 0;
// 	if (act==0){
// 		act=act+1;
// 	}



// 	console.log(act);
	// if (act){
	// 	h++;
	// }else{
	// 	console.log('no');
	// // 	el = el + 1;
	// console.log(el);
	// act = el;
//}




//Мусор/черновики

//function delRezultTelepphone{ 	$('#Telephone').empty(); };

	//$('#Telephone').html(SummaTell ());

//Переменную можно прокинуть в строку двумя способами `string ${переменная} string` || 'string'+переменная+'string'


/* console.log ("Hello")
document.write("Bye")

let func = function(str, name) {
return str + "_" + name
}
function calc (a){
	return a*2;
}

if (calc (2)>10) {
	console.log ("Right");
}
else {
	console.log ("Miss");
}
function result (){
	let x = prompt ("Number?!");
	if (calc (x)>10) {
		console.log ("Ne smotrel krepkogo oreha");
	}
	else {
		console.log ("Miss");
	}
} */

/*
function HeaderColorc ()

var z = 0;
var x = 5;

while (z < 10) {
    $ ('#itemlist').append(`<li>${z + x}</li>`);
    console.log (z);
    z++;
}; 

//

var z = 0;
var x = 'text';

while (z < 10) {
    $ ('#itemlist').append(`<li>${z + x}</li>`);
    console.log (z);
    z++;
};



let custom = 0;
function ret(a){
	return a * 2;
}

custom = ret(10);
console.log (custom);
*/


