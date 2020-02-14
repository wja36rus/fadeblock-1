(function($){
	jQuery.fn.outBlock = function(method, options) {
		options = $.extend({
btnOpen: "", //Кнопка для открытия
autoOpen: false, //автооткрытие
width:"100%", //высота
height:"100%", //ширина
position: "fixed", //позиция
top: "0", //от верха
zIndex: "999999999", //относительно документа по оси z
color: "white", //цвет текста
closecolour: "white", //цвет крестика закрытия
shadowBox: "#c1c1c1 5px 5px 5px", //тень от блока
maxWidthbox: '25%', //максимальная ширина блока
minWidthbox: '290px', //минимальная ширина блока
heightBox:"auto", //высота
background:"red", //цвет элемента
borderRadius:"10px", //скгругление углов
positionin: 'relative', //позиция
margin: '0 auto', //выравнивание
topin: '25%', //отступ сверху
paddingbox: '10px', //отступ внутри блока
backColour: 'white', //цвет заднего плана
backOpacity: '0.5', //прозрачность заднего плана
}, options);

		$.fn.show = function(){
			$(this).css('display', 'block');
			$('body').css('overflow', 'hidden');
		}

		$.fn.hide = function(){
			$(this).css('display', 'none');
			$('body').css('overflow', 'unset');
		}

		$.fn.load = function(){
			$(this).find('div:first').addClass('load');
if (options.autoOpen) { //если включена опция автооткрытия 
	$(this).css({
		width: options.width,
		height: options.height,
		position: options.position,
		top: options.top,
		zIndex: options.zIndex,
		display: 'block'
	});
} else { // если выключена опция автооктырия
	$(this).css({
		width: options.width,
		height: options.height,
		position: options.position,
		top: options.top,
		zIndex: options.zIndex,
		display: 'none'
	});
}

$(this).find('div:first').css({ 
	background: options.background,
	maxWidth: options.maxWidthbox,
	minWidth: options.minWidthbox,
	height: options.heightBox,
	borderRadius: options.borderRadius,
	position: options.positionin,
	margin: options.margin,
	top: options.topin,
	color: options.color,
	boxShadow: options.shadowBox,
	padding: options.paddingbox
}).prepend('<div class="wrap-img-close">'+ //добавление в первый дочерний див кнопки закрытия
'<svg class="close-btn" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">'+
'<path d="M3 3L24 24M24 3L3 24" stroke="'+options.closecolour+'" stroke-width="5" stroke-linecap="round"/>'+
'</svg>'+
'</div>')
.after('<div class="back"></div>'); //добавление заднего плана

$('.back').css({zIndex: '-1'}); // стилизация кнопки закрытия	
$('.close-btn').css({width: '15px', height: '15px'}); 

$('.close-btn').hover(function() { //анимация кнопки закрытия
	$(this).css({cursor: 'pointer', opacity: '0.5'});
}, function() {
	$(this).css({cursor: 'unset', opacity: '1'});
});

$('.wrap-img-close').css({textAlign: 'right', paddingBottom: '10px'}); // стилизация кнопки закрытия

$(this).find('.back').css({ //стилизация заднего плана
	width: options.width,
	height: options.height,
	background: options.backColour,
	opacity: options.backOpacity,
	position: options.position,
	top: options.top
});

var block_id = $(this).attr('id'); //поиск id  родительского блока
var block_cls = $(this).attr('class'); //поиск class родительского блока

$(options.btnOpen).click('on', function(event) {
	event.preventDefault();

if (!block_id) { //закрытие окна если оно объявлено через класс
	$('.'+block_cls).css('display', 'block');
	$('body').css('overflow', 'hidden');	
} else { //закрытие окна если оно объявлено через id
	$('#'+block_id).css('display', 'block');
	$('body').css('overflow', 'hidden');	
}

});

$('.close-btn').click('on', function(event) { //закрытие окна крестиком
	event.preventDefault();
	$(this).parent().parent().parent().css('display', 'none');
	$('body').css('overflow', 'unset');
});

$('.back').click('on', function(event) { //закрытие окна задним планом
	event.preventDefault();
	$(this).parent().css('display', 'none');
	$('body').css('overflow', 'unset');
});
}

if (method == 'load') {
	$(this).load();
} else if (method == 'show') {
	$(this).show();
} else if (method == 'hide') {
	$(this).hide();
}

};
})(jQuery);