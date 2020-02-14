$(document).ready(function() {
	$('#block1').outBlock('load', {
		    btnOpen: ".openblock1", //Кнопка для открытия
			color: "black", //цвет
			closecolour: "blue", //цвет крестика закрытия
			background:"#a4eaff91", //цвет элемента
			backColour: '#a4eaff4f' //цвет заднего плана
		});

	$('#block2').outBlock('load', {
		    btnOpen: ".openblock2", //Кнопка для открытия
			color: "black", //цвет
			minWidthbox: '85vw', //минимальная ширина блока
			closecolour: "red", //цвет крестика закрытия
			background:"pink", //цвет элемента
			backColour: '#ffc0cb96' //цвет заднего плана
		});

	$('#block3').outBlock('load', {
		    btnOpen: ".openblock3", //Кнопка для открытия
			closecolour: "blue", //цвет крестика закрытия
			background:"transparent", //цвет элемента
			topin: '10%', //отступ сверху
			shadowBox: "none", //тень от блока
			borderRadius:"none", //скгругление углов
		    maxWidthbox: '50%', //максимальная ширина блока
		    backColour: 'rgb(57, 81, 119)' //цвет заднего плана
		});

	$('#block4').outBlock('load', {
			color: "black", //цвет текста
			closecolour: "blue", //цвет крестика закрытия
			heightBox:"25%", //высота
			background:"#a4eaff4f", //цвет элемента
			backColour: '#a4eaff4f' //цвет заднего плана
		});

	$('.opentwo').click(function(event) {
		$('#block1').outBlock('hide');
		$('#block4').outBlock('show');
	});
});

