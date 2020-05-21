'use strict';


// Добавляем новый элемент в список
function addElement() {
	let text = prompt('Введите название элемента');

	console.log(text); // потом удалить 

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
	console.log('Удалить элемент');
	console.log(element);

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
});