/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/


import "../../scss/base/swiper.scss";

const arrOfPaginations = ['studio', '1 bedroom', '2 bedroom', '3 bedroom', '4 bedroom'];
function initSliders() {
	if (document.querySelector('.schema-floor-plans__slider')) {
		new Swiper('.schema-floor-plans__slider', {
			modules: [Navigation, Pagination, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			parallax: {
				enabled: true
			},
			speed: 800,
			pagination: {
				el: ".nav-floor-plans",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (arrOfPaginations[index]) + "</span>";
				},
			},
			navigation: {
				prevEl: '.schema-floor-plans__prev',
				nextEl: '.schema-floor-plans__next',
			},
			breakpoints: {
				320: {
					parallax: {
						enabled: false
					},
					spaceBetween: 30,
				},
				767.98: {
					parallax: {
						enabled: true
					},
					spaceBetween: 0,
				}
			},

			on: {

			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});