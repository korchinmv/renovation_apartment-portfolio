//BURGER MENU
const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');

buttonMenu.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonMenu.classList.toggle('burger--active');
};

menuLink.forEach(el => {
	el.addEventListener('click', (e) => {
		menuActive.classList.remove('menu--active');
		buttonMenu.classList.remove('burger--active');
	});
});

//HEADER FIXED
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= 1) {
		header.classList.add('header--fixed');
	} else {
		header.classList.remove('header--fixed');
	}
});

//RANGE - SLIDER
const rangeSlider = document.getElementById('range-slider');
const input = document.getElementById('input1');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: 20,
		step: 1,
		connect: 'lower',
		range: {
			'min': [20],
			'max': [200]
		}
	});
};

rangeSlider.noUiSlider.on('update', function (values, handle) {
	const value = values[handle];
	input.value = Math.round(value);
});

input.addEventListener('change', function () {
	rangeSlider.noUiSlider.set([this.value]);
});

//SWIPER - SLIDER
const slider = document.querySelector('.first-slider');
const slider2 = document.querySelector('.second-slider');

let ourWorks = new Swiper(slider, {
	slidesPerView: '1',

	navigation: {
		nextEl: '.our-works__slider-btn--next',
		prevEl: '.our-works__slider-btn--prev',
	},

	pagination: {
		el: '.our-works__pagination',
		type: 'bullets',
		clickable: true,
	}
});

let ourWorks2 = new Swiper(slider2, {
	slidesPerView: '1',
	wrapperClass: 'second-slider__wrapper',
	slideClass: 'second-slider__slide',

	navigation: {
		prevEl: '.second-slider__btn--prev',
		nextEl: '.second-slider__btn--next',
	}
});

//ACCORDION
document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const btn = self.querySelector('.accordion__btn');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('open');

			if (self.classList.contains('open')) {
				btn.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				btn.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			};
		});
	});
});

//LINK - SCROLL
document.querySelectorAll('a.menu__link, .hero__link, .hero__btn, .footer-main__service-link').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()
		const href = this.getAttribute('href').substring(1);
		const scrollTarget = document.getElementById(href);
		const topOffset = 90;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

///MODAL WINDOWS
const btns = document.querySelectorAll('button.btn');
const modalsOverlay = document.querySelector('.modals__overlay');
const modals = document.querySelectorAll('.modal');
const btnClose = document.querySelector('.modal__close');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault()
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--active');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--active');
		modalsOverlay.classList.add('modals__overlay--active');
	});
});

modalsOverlay.addEventListener('click', (e) => {
	if (e.target == modalsOverlay) {
		modalsOverlay.classList.remove('modals__overlay--active');
		modals.forEach((el) => {
			el.classList.remove('modal--active');
		});
	}
});

btnClose.addEventListener('click', (e) => {
	modals.forEach((el) => {
		el.classList.remove('modal--active');
		modalsOverlay.classList.remove('modals__overlay--active');
	});
});

//INPUT MASK
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

//SCROLL ANIMATION
const scrollItems = document.querySelectorAll('.scroll-item');
const scrollAnimation = () => {
	let windowCenter = (window.innerHeight) + window.scrollY;
	scrollItems.forEach(el => {
		let scrollOffset = el.offsetTop + el.offsetHeight;
		if (windowCenter >= scrollOffset) {
			el.classList.add('animated');
		}
	});
};

scrollAnimation();
window.addEventListener('scroll', () => {
	scrollAnimation();
});
