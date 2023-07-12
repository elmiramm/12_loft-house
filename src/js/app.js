import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import mixitup from 'mixitup';

flsFunctions.isWebp();

//--------MixitUp---------
if (document.querySelector(".gallery__inner")) {
	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living',
		}
	});
}
//--------MixitUp-End--------


// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax, Autoplay]);

if (document.querySelector('.slider-section__body')) {
	new Swiper('.slider-section__body', {
		observer: true, //обновляет swiper при изменении элементов слайдера
		observeParents: true, //обновляет swiper при изменении в родительских элементах слайдера
		slidesPerView: 1,
		spaceBetween: 0,
		// slidesPerGroup: 4, //если нужно чтобы кол-во dots было меньше кол-ва slides. Slides будут перелистываться группами
		// centeredSlides: true, //Активный слайд по центру
		loop: true, // pза последним слайдем будет идти заново первый
		watchOverflow: false,
		speed: 800,
		loopAdditionalSlides: 5,
		preloadImage: false,
		// parallax: true,
		simulateTouch: false, //вкл/выкл перетаскинавия на ПК
		pagination: {
			el: '.slider-section__controls .dots',
			clickable: true, //true - можно кликнуть на dotts и перейти на нужный слайд
			dynamicBullets: false, // ]true - dots будут менять размер в зависимости от того насколько далеко расположены от активного dots
		},
		// autoplay: {
		// 	delay: 3000, //Пауза м.д. прокрутками
		// 	stopOnLastSlide: false,
		// 	disabledOnInteraction: false,
		// },
		effect: 'slide', //значение по умолчанию - перелистывает слайды, 'fade' - смена прозрачности
		// navigation: {
		// 	nextEl: '.slider-section .slider-arrow--next',
		// 	prevEl: '.slider-section .slider-arrow--prev',
		// },
		// breakpoints: { //Mobile First - значения от заданной точки и больше 
		// 	279: {
		// 		slidesPerView: 1.1,
		// 		spaceBetween: 15,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	992: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 32,
		// 	},
		// }
	});
}

// ------Swiper-End-------

window.onload = function () {
	document.addEventListener('click', documentActions);

	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;

		// ---------Если кликнули на бургер---------
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger')
				? targetElement
				: targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelectorAll('.menu');
			menuBody.forEach(item => {
				item.classList.toggle('menu--open');
			});

			const body = document.querySelector('body');
			if (body) {
				body.classList.toggle('no-scroll');
			}
		}
		// -------Если кликнули на бургер-End----------
	}
	//------Действия-при-кликах-End-----

}