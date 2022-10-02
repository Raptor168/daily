import Swiper from '../vendor/swiper-bundle.min.js';

	// Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

const swiper1 = new Swiper('.slider-hero', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		centerInsufficientSlides: true,
		height: 200,


		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			disabledClass: 'swiper-button-disabled',
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			type: 'bullets',
			clickable: false,
			dynamicBullets: true,
		},
	});

const swiper2 = new Swiper('.slider-cards', {
		// Optional parameters
		// slidesPerView: 1,
		direction: 'horizontal',
		loop: false,
		// centeredSlides: true,
		// centeredSlidesBounds: true,
		// centerInsufficientSlides: true,
		// height: 200,
		breakpoints: {
			0: {
				slidesPerView: 1.3,
				centeredSlides: true,
				// slidesOffsetBefore: '25%',
				// slidesOffsetAfter: '25%',
			},
			576: {
				slidesPerView: 1.5,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 3,
			},
			1000: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}


		// If we need pagination
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: 'bullets',
		// 	clickable: true,
		// },

		// // Navigation arrows
		// navigation: {
		// 	disabledClass: 'swiper-button-disabled',
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },

		// // And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// 	type: 'bullets',
		// 	clickable: false,
		// 	dynamicBullets: true,
		// },
	});
