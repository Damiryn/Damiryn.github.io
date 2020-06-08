//Объекты (карточки)
const boxes = [{
		title: 'Заголовок 1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum nibh arcu, et luctus tellus vulputate molestie. Quisque fringilla hendrerit feugiat. Cras eu tellus sed nisl euismod euismod. Sed molestie, dui quis convallis ultrices, mi leo hendrerit enim, in facilisis elit augue in orci. Suspendisse ut gravida augue. Maecenas eu ultrices ex. Nullam purus ipsum, suscipit et ligula nec, ultricies ullamcorper enim. Integer laoreet iaculis magna sit amet malesuada.',
		autor: 'Дарт Вейдер',
		hasButton: false,
		color: 'red',

	},
	{
		title: 'Заголовок 2',
		text: 'Nunc viverra tortor eget elementum tempor. Aenean tincidunt mauris sed pulvinar finibus. Nulla vehicula urna a ligula ullamcorper, nec malesuada mauris feugiat. Praesent dui ante, ultricies a lobortis facilisis, pretium id urna. Nullam quis efficitur lectus. Duis consequat ante nunc, a congue lectus congue nec. Mauris fringilla molestie nisl eu bibendum.',
		autor: 'Гендальф',
		hasButton: true,
		color: 'green',
	},
	{
		title: 'Заголовок 3',
		text: 'Quisque posuere eros et risus tristique accumsan. Curabitur eu consequat est. Etiam eleifend maximus dolor, sit amet cursus risus luctus et. Nunc interdum, tellus vel vestibulum luctus, lacus eros luctus dui, ut vulputate metus metus non quam. Pellentesque efficitur justo at turpis pharetra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae arcu mollis, volutpat nunc sed, molestie leo. Donec sit amet erat fringilla sem sodales bibendum eu nec mauris. Suspendisse ut elit erat.',
		autor: 'Тони Старк',
		hasButton: false,
		color: 'yellow',
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

 console.log(el);
 console.log(event);
}

//типа ДЗ

let snouden = {
		age: 20, 	//$(".age").val(),
		from: 'Moscow', 	//$(".from").val(),
		texts: 'Text text', 	//$(".texts").val(),
}


function snoudenStyle(){
	let SS = `
		<div>${snouden.age}</div>
		<div>${snouden.from}</div>
		<div>${snouden.texts}</div>
	`

	$('#snoudenStyle').append(SS);
}

	console.log(snouden);




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
				<button class="dilete" onclick="dellist(this.parentNode.parentNode)">x</button>
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
	let textModal = prompt('Дай текст')
	
	let id = 'modal_' + modalCounter;

	container.classList.add('modal');
	container.setAttribute('id', id) // id="modal_0"
	container.innerHTML = `
		<div class="modal-content">
   		 	<span class="close">&times;</span>
    		<p>${textModal}</p>								
  		</div>`;
	
	console.log(container);

	modalCounter++;

	$('#modals').html(container);
	container.style.display = 'flex';

	let closeButton = $('#' + id).children().children('span');
	
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
			}else{
				console.log (SumMyPorchases, 'На акк не хватило');
			}
     	};

     	    if ((SumMyPorchases + SumTel) > bank_balans){
				console.log (SumMyPorchases, 'No balans');
			};	

	$('#Telephone').append(SumMyPorchases.toFixed(2));

};

function delRezultTelepphone(){
	$('#Telephone').empty()
	$('#Telephone').html('Общая сумма покупки = ')
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
	console.log(f);
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


//функция "запуска страницы", всегда должна быть в конце!
$(function(){
	
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


