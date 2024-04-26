var sliderProduct = new Swiper(".slider__container.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".slider__control .arrow.next",
		prevEl: ".slider__control .arrow.prev",
	},
	effect: 'fade',
	speed: 1000,
});

var sliderRating = new Swiper(".ratings__slider.swiper", {
	slidesPerView: 4,
	spaceBetween: 20,
	loop: true,
	freeMode: true,
	navigation: {
		nextEl: ".ratings__control .arrow.next",
		prevEl: ".ratings__control .arrow.prev",
	},
	speed: 1000,
});

var sliderClient = new Swiper(".client__slider.swiper", {
	slidesPerView: 4,
	spaceBetween: 20,
	loop: true,
	freeMode: true,
	navigation: {
		nextEl: ".client__control .arrow.next",
		prevEl: ".client__control .arrow.prev",
	},
	speed: 1000,
	allowTouchMove: false
});

var sliderNews = new Swiper(".news__slider.swiper", {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	freeMode: true,
	navigation: {
		nextEl: ".news__control .arrow.next",
		prevEl: ".news__control .arrow.prev",
	},
	speed: 1000,
});