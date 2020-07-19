// Добавляем новый элемент в список
function addElement() {
	let text = prompt('Введите название элемента');

	let html = `
		<li> 
			<div class="itemList">
				<span class="target" onmouseenter="toggleColor(this, true)" onmouseleave="toggleColor(this)">
					${text}
				</span>
				
				<button class="delete" onclick="deleteElement(this.parentNode.parentNode)">x</button>
			</div>
		</li>`;

	$('#itemList').append(html);
}

// Удаляем элемент со страницы
function deleteElement(element) {
	$(element).replaceWith();
}

// Изменяем цвет элемента при наведении мыши
function toggleColor(element, active = false) {
	console.log(element, active);

	let activeColor = 'red';
	let defaultColor = '#333';

	if (active) {
		$(element).css('color', activeColor);
	} else {
		$(element).css('color', defaultColor);
	}
}


function toggleSidebar() { 
	$('#mySidenav').toggleClass('open');
}

function closeNav() {
	$('#mySidenav').removeClass('open');
}

let menuLinks = [
	'Home',
	'Media',
	'Contancs',
	'Follow',
];

function generateMenuLinks() {
	let html = '';

	for (const item of menuLinks) {
		html += `<a class="item-link" href="">${item}</a>`;
	}

	return html;
}

let user = '';

function saveNewValueMatherFucker() {
	let value = prompt('Введите значение');

	$('#matherFuckerValue').html(value);
}

function toggleVisible() {
	console.log('toggleVisible');

	let hideElement = $('#hideContainerRow');
	let button = $('#hideButtonMatherFucker');

	console.log($(button).hasClass('active'));

	if ($(button).hasClass('active')) {
		$(button).removeClass('active');
		$(button).text('Скрыть');
		$(hideElement).show();
		// $(hideElement).css('opacity', 1);
	} else {
		$(button).addClass('active');
		$(button).text('Показать');
		// $(hideElement).css('opacity', 0);
		$(hideElement).hide();
	}

	$(button).toggleClass('active');
}

function calcSum() {
	let bank = $('#bank').val();
	let phones = $('#phones').val();

	console.log(bank);
	console.log(phones);
}

let modalCounter = 0;

function createPopup() {
	let container = document.createElement('div');
	let textModal = prompt('Укажите текст');
	let id = 'modal_' + modalCounter;

	container.classList.add('modal');
	container.setAttribute('id', id); // id="modal_0"
	container.innerHTML = `
		<div class="modal-content">
			<span class="close">&times;</span>
			<p>${textModal}</p>
			<input>
		</div>`;

	modalCounter++;

	$('#modals').html(container);
	container.style.display = 'flex';

	let closeButton = $('#' + id).children().children('.close');
	//  let input = $('#' + id).children().children('input');

	$(closeButton).on('click', function () {
		document.getElementById(id).remove();
	});

	// $(input).on('input', function () {
	// 	console.log($(this).val());
	// });
}


$(function () {
	$('#menuLinks').append(generateMenuLinks());

	$('#menuLinks').children().each(function () {

		$(this).on('mouseenter', () => {
			$(this).css('color', 'red');
		});

		$(this).on('mouseleave', () => {
			$(this).css('color', 'inherit');
		});
	});

	$('#avatarFrame').append('<div class="avatar"></div>');

	if (!localStorage.getItem('name')) { // true | false 
		localStorage.setItem('name', 'Hell');
		// тут код останавливается и дальше не идет 
	} else if (localStorage.getItem('name') === "World") { // true | false 
		console.log('Hello world');
		// тут код останавливается и дальше не идет
	} else {
		// user = localStorage.getItem('name');
	}

	$('#userName').html(user);

	$('#createPopup').on('click', function () {
		createPopup();
	});

	// $('button').on('click', function () {
	// 	let attr = $(this).attr('id');

	// 	if (!!attr) {
	// 		if (attr === 'hideButtonMatherFucker') {
	// 			toggleVisible();
	// 		} else if (attr === 'createPopup') {
	// 			createPopup();
	// 		} else {
	// 			console.log('Айди кнопки не найден');
	// 		}
	// 	} else {
	// 		let text = $(this).text().trim();

	// 		switch (text) {
	// 			case "Скрыть":
	// 			case "Добавить элемент": //  if(condition)
	// 				addElement();
	// 			default:
	// 				console.log(text);
	// 		}
	// 	}
	// });
});
