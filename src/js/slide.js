var execute;

function start(){
	execute = setTimeout(nextSlider, 4000);
}

function stop(){
	clearTimeout(execute);
}

start();

function nextSlider() {
	var currentSlide = $('.item-slide.item-active');
	var currentIndicator = $('.indicator.current');
	var nextSlide = currentSlide.next();
	var nextIndicator = currentIndicator.next();

	currentSlide.removeClass('item-active');
	currentIndicator.removeClass('current');
	nextSlide.addClass('item-active');
	nextIndicator.addClass('current');

	if(nextSlide.length == 0) {
		$('.item-slide').first().addClass('item-active');
		$('.indicator').first().addClass('current');
	}
	stop();
	start();
}

function prevSlider() {
	var currentSlide = $('.item-slide.item-active');
	var currentIndicator = $('.indicator.current');
	var prevSlide = currentSlide.prev();
	var prevIndicator = currentIndicator.prev();

	currentSlide.removeClass('item-active');
	currentIndicator.removeClass('current');
	prevSlide.addClass('item-active');
	prevIndicator.addClass('current');

	if(prevSlide.length == 0) {
		$('.item-slide').last().addClass('item-active');
		$('.indicator').last().addClass('current');
	}
	stop();
	start();
}

function firstSlider(){
	var currentSlide = $('.item-slide.item-active');
	var currentIndicator = $('.indicator.current');

	var firstSlide = $('.item-slide').first();
	var firstIndicator = $('.indicator').first();

	currentSlide.removeClass('item-active');
	currentIndicator.removeClass('current');
	firstSlide.addClass('item-active');
	firstIndicator.addClass('current');

	stop();
	start();
}

function secondSlider(){
	var currentSlide = $('.item-slide.item-active');
	var currentIndicator = $('.indicator.current');

	var secondSlide = $('.item-slide:nth-child(2)');
	var secondIndicator = $('.indicator:nth-child(2)');

	currentSlide.removeClass('item-active');
	currentIndicator.removeClass('current');
	secondSlide.addClass('item-active');
	secondIndicator.addClass('current');

	stop();
	start();
}

function lastSlider(){
	var currentSlide = $('.item-slide.item-active');
	var currentIndicator = $('.indicator.current');

	var lastSlide = $('.item-slide').last();
	var lastIndicator = $('.indicator').last();

	currentSlide.removeClass('item-active');
	currentIndicator.removeClass('current');
	lastSlide.addClass('item-active');
	lastIndicator.addClass('current');

	stop();
	start();
}

$('#next').click(nextSlider);

$('#prev').click(prevSlider);

$('#indi1').click(firstSlider);

$('#indi2').click(secondSlider);

$('#indi3').click(lastSlider);