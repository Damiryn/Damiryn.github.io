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


function addHeader (){
	let textHader = prompt('Название заголовка?');
	let header = `
			<span>
			<a class="addMenu">${textHader}</a>
			<button class="dilete" onclick="dellist(this.parentNode)">Удалить</button>
			</span>`;

	$('.downmenu').append(header);
}

function addTasks (){
	let textTasks = $('#addTasks').val();
	let task = `
			<div class="addTasks">
				<div>${textTasks}
				<button class="dilete" onclick="dellist(this.parentNode.parentNode)">x</button>
				</div>
			</div>`;

	$('#Tasks').append(task);
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

// Zadacha


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

	$('#Telephone').append('Общая сумма покупки = ',SumMyPorchases);


};

//function delRezultTelepphone{ 	$('#Telephone').empty(); };

	//$('#Telephone').html(SummaTell ());



/*	function SummaTell() {

const rate_tax = 0.1;
const rate_tel = 100;
const rate_acc = 10;
const bank_balans = 500;

let tell = 0;

	let	stel = rate_acc + rate_tel + (rate_tel * rate_tax);
		console.log (stel);
		

		while (tell < bank_balans) {
				console.log ('Yes, buy!');
				tell = bank_balans - stel;
			    console.log (tell);
                
        if (tell > bank_balans){
				console.log ('No balans');
		
			};	

		};
return tell;
	
};

SummaTell ();

		if (stel > bank_balans){
				console.log ('No balans');
				};	

	for (let stel = 0; stel < bank_balans; stel = stel + stel){
			if (stel < bank_balans){
						
			} else {
				
			}
		};*/

let menuLinks = [
	'Home',
	'Media',
	'Contancs',
	'Follow',
];

function generateMenuLinks (){
	let html = '';

	for (const items of menuLinks){
		html += `<a href="#">${items}</a>`;
	}
 	return html;

}

let user = '';

function setValue(){
	let value = prompt('Who are you?');

	$('#Value').html(value);
}

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

//функция "запуска страницы", всегда должна быть в конце!
$(function(){
	
	$('#menuLinks').append(generateMenuLinks ());

	if (!localStorage.getItem('name')){
		localStorage.setItem ('name', 'Damir');
	} else {
		user= localStorage.getItem('name');
	}

	$('#userName').html(user);
});