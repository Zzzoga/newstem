var topSlider = new Swiper(".top__slider__text.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var sliderProduct = new Swiper(".slider__container.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".slider__control .arrow.next",
		prevEl: ".slider__control .arrow.prev",
	},
	effect: 'fade'
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
});

var sliderModal = new Swiper(".partners__wrapper.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 53,
	loop: true,
	freeMode: true,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	breakpoints: {
        992: {
          spaceBetween: 86,
        },
        1180: {
          spaceBetween: 106,
        },
		1600: {
			spaceBetween: 142,
		},
    },
});

var sliderModal = new Swiper(".suggestion__slider.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	freeMode: true,
	navigation: {
		nextEl: ".suggestion__control .arrow.next",
		prevEl: ".suggestion__control .arrow.prev",
	},
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 2,
			spaceBetween: 22,
		},
    },
});
