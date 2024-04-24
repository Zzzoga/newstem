// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// MODAL NAV
	// document.querySelector('.burger').addEventListener('click', e => {
	// 	e.preventDefault()
	// 	if (!e.target.closest('.burger').classList.contains('active')) {
	// 		e.target.closest('.burger').classList.add('active')
	// 		document.querySelector('.modal__nav').classList.add('active')
	// 		document.querySelector('body').classList.add('hidden')
	// 		document.querySelector('header').classList.add('nav__active')
	// 		document.querySelector('a.logo img').src = '../img/logo_color.svg'
	// 	} else {
	// 		e.target.closest('.burger').classList.remove('active')
	// 		document.querySelector('.modal__nav').classList.remove('active')
	// 		document.querySelector('body').classList.remove('hidden')
	// 		document.querySelector('header').classList.remove('nav__active')
	// 		document.querySelector('a.logo img').src = '../img/logo.svg'
	// 	}
	// })

	// MODAL PRODUCT
	function showHideModal(type, btn, modal, close) {
		if (type == 'product') {
			document.querySelectorAll(btn).forEach(btn => {
				btn.addEventListener('click', e => {
					e.preventDefault()
					document.querySelector(modal).classList.add('active')
					document.querySelector(modal).querySelector('.modal__product__img img').src = e.target.closest('a.slide__btn.interval').dataset.imgUrl
					document.querySelector('body').classList.add('hidden')
				})
			})
	
			document.querySelector(close).addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.remove('active')
				document.querySelector('body').classList.remove('hidden')
			})
		} else if (type == 'call') {
			document.querySelectorAll(btn).forEach(btn => {
				btn.addEventListener('click', e => {
					e.preventDefault()
					document.querySelector(modal).classList.add('active')
					document.querySelector('body').classList.add('hidden')
				})
			})
	
			document.querySelector(close).addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.remove('active')
				document.querySelector('body').classList.remove('hidden')
			})
		} else if (type == 'news') {
			document.querySelectorAll(btn).forEach(btn => {
				btn.addEventListener('click', e => {
					e.preventDefault()
					document.querySelector(modal).classList.add('active')
					document.querySelector('body').classList.add('hidden')

					document.querySelector(modal).querySelector('.modal__news__preview img').src = e.target.closest('.news__content').querySelector('.hidden__preview img').src 
					document.querySelector(modal).querySelector('h3.modal__news__title').innerHTML = e.target.closest('.news__content').querySelector('h3.news__title').innerHTML
					document.querySelector(modal).querySelector('.modal__news__p').innerHTML = e.target.closest('.news__content').querySelector('.hidden__detail__text').innerHTML
					document.querySelector(modal).querySelector('.modal__news__photos').innerHTML = ''
					if (e.target.closest('.news__content').querySelector('.hidden__photos img') != null) {
						e.target.closest('.news__content').querySelectorAll('.hidden__photos img').forEach(img => {
							document.querySelector('.modal__news__photos').insertAdjacentHTML('beforeEnd', `<img src="${img.src}" alt="">`)
						})
					}
				})
			})
	
			document.querySelector(close).addEventListener('click', e => {
				e.preventDefault()
				document.querySelector(modal).classList.remove('active')
				document.querySelector('body').classList.remove('hidden')
			})
		}
	}

	showHideModal('product', 'a.slide__btn.interval', '.modal.modal__product', '.modal.modal__product .modal__close')
	showHideModal('call', 'a.modal__form', '.modal.modal__call', '.modal.modal__call .modal__close')
	showHideModal('news', 'h3.news__title', '.modal.modal__news', '.modal.modal__news .modal__close')

	// ACCORDEON
	document.querySelectorAll('.a__header').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			if (!e.target.closest('.accordeon__item').classList.contains('active')) {
				e.target.closest('.accordeon__item').classList.add('active')
				e.target.closest('.accordeon__item').style.height = 56 + 18 + document.querySelector('.a__body').offsetHeight + 'px'
			} else {
				e.target.closest('.accordeon__item').classList.remove('active')
				e.target.closest('.accordeon__item').style.height = '56px'
			}
		})
	})

	// PRODUCT SLIDER BUY BTN EVENT
	function buyBtnEvent(btn, wrapper, icon) {
		document.querySelectorAll(btn).forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.closest(wrapper).querySelector('.hidden__buy__links').classList.contains('active')) {
					e.target.closest(wrapper).classList.add('active')
					e.target.closest(wrapper).querySelector('.hidden__buy__links').classList.add('active')
					e.target.closest(wrapper).querySelector(icon).innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94995 4.94952L14.8494 14.849" stroke="white" stroke-width="1.40903"/><path d="M4.94971 14.8492L14.8492 4.94975" stroke="white" stroke-width="1.40903"/></svg>`
				} else {
					e.target.closest(wrapper).classList.remove('active')
					e.target.closest(wrapper).querySelector('.hidden__buy__links').classList.remove('active')
					e.target.closest(wrapper).querySelector(icon).innerHTML = `<svg width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4906 17.9784C23.9305 18.4087 24.1767 18.9694 24.1767 19.587C24.1767 20.8157 23.1757 21.817 21.9466 21.817C20.7207 21.817 19.717 20.8134 19.717 19.587C19.717 18.9552 19.9993 18.333 20.4699 17.9165L13.0846 17.765C13.6768 18.183 14.0294 18.8594 14.0294 19.587C14.0294 20.8157 13.0284 21.817 11.7994 21.817C10.5735 21.817 9.56978 20.8134 9.56978 19.587C9.56978 18.8325 9.96279 18.1192 10.59 17.7135L7.32898 17.6466L8.29844 13.871L4.73401 2.8497H1V1H6.0738L6.62871 2.71703H26.2175C27.3669 2.71703 28.1452 3.73879 27.9772 4.84784L26.832 12.3078C26.7043 13.1407 25.9698 14.0202 24.8127 14.0398L10.2074 13.7814L9.69129 15.8518L25.9787 16.1864L25.9425 18.0288L23.4906 17.9784ZM24.0548 4.56673V12.1832L24.8269 12.197C24.9319 12.1774 24.9938 12.1005 25.0042 12.0332L26.1494 4.57327L26.1502 4.56673H24.0548ZM22.205 12.1505V4.56673H20.3207V12.1174L22.205 12.1505ZM18.4714 12.0844V4.56673H16.5871V12.0513L18.4714 12.0844ZM14.7374 12.0182V4.56673H12.8531V11.9852L14.7374 12.0182ZM11.0034 11.9525V4.56673H7.54933L9.93202 11.9332L11.0034 11.9525ZM11.7994 19.2071C11.5868 19.2071 11.4195 19.3747 11.4195 19.587C11.4195 19.8024 11.5845 19.9673 11.7994 19.9673C12.0117 19.9673 12.1797 19.7997 12.1797 19.587C12.1797 19.3774 12.0094 19.2071 11.7994 19.2071ZM21.9466 19.2071C21.734 19.2071 21.5667 19.3747 21.5667 19.587C21.5667 19.8024 21.7317 19.9673 21.9466 19.9673C22.1589 19.9673 22.327 19.7997 22.327 19.587C22.327 19.3774 22.1566 19.2071 21.9466 19.2071Z" fill="white" stroke="#71C639"/></svg>`
				}
			})
		})
	}

	buyBtnEvent('a.slide__btn.buy', '.slide__buy__wrapper', 'a.slide__btn.buy span.icon')
	buyBtnEvent('.footer__buy', '.footer__control', '.footer__buy__icon')
	

	// TOP SLIDER PROGRESSBAR FUNCTION
	let i = 1
	document.querySelectorAll('.top__slider__text__item').forEach(item => {
		item.dataset.slideNum = i++
	})

	var observeObject = function () {
		var _class = {
			init: function (selector, callback) {
				var element = document.querySelectorAll(selector);
				try {
					var observer = new MutationObserver(function (mutations) {
						mutations.forEach(function (mutation) {
							callback(mutation.target, mutation.attributeName, mutation.oldValue);
						});		
					});
					element.forEach(element => {
						observer.observe(element, {
							attributes: true,
							subtree: true,
							attributeOldValue: true
						});
					})
					
				} catch (z) {
					element.forEach(element => {
						element.addEventListener('DOMAttrModified', function (e) {
							callback(e.target, e.attrName, e.prevValue);
						}, false);
					})
				}
			}
		};
	
		return _class;
	}();
	
	$(function () {
		observeObject.init('.top__slider__text__item', function (target, name, oldValue) {
			document.querySelectorAll('.top__slider__text__item').forEach(item => {
				if (item.classList.contains('swiper-slide-active')) {
					const currentNum = item.dataset.slideNum*1
					
					switch (currentNum) {
						case 1:
							document.querySelector('span.current').innerHTML = '1'
							document.querySelector('.progress__line').style.width = '33%'
							break;
					
						case 2:
							document.querySelector('span.current').innerHTML = '2'
							document.querySelector('.progress__line').style.width = '67%'
							break;
					
						case 3:
							document.querySelector('span.current').innerHTML = '3'
							document.querySelector('.progress__line').style.width = '100%'
							break;
					
						default:
							break;
					}

				}
			})
		});
	});

	// BUMBLE IMG PARALLAX
	if (document.documentElement.clientWidth > 1024) {
		let bg = document.querySelector('img.bumble');
		window.addEventListener('mousemove', function(e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;  
			bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		});
	}
	
	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')
})


