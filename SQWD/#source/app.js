// SWIPER
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			if (index+1<10) {
				return '<span class="' + className + '">' + `0${index + 1}` + "</span>";
			} else {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			}
		},
	}
});
var swiper = new Swiper(".mySwiper2", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


// MENU
const menuButton = document.querySelector('.hamburger__btn');
let header = document.querySelector('header');
let menuBox = document.querySelector('.menubox');
let body = document.querySelector('body');

if (menuButton) {
	menuButton.addEventListener('click', function(element) {
		header.classList.toggle('active');
		body.classList.toggle('overflow-hidden')
	})

	document.body.addEventListener('click', function(element) {
		if (header.classList == 'active') {
			if (!element.target.closest('header')) {
				header.classList.remove('active');
				body.classList.remove('overflow-hidden')
			}
		}
	})


	document.addEventListener('keydown', function(event) {
		if (header.classList == 'active') {
			if (event.code == 'Escape') {
				header.classList.remove('active');
				body.classList.remove('overflow-hidden')
			}
		}
	});
}

window.addEventListener('scroll', function() {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let headerWidth = header.offsetWidth;
	if (headerWidth <= 768) {
		if (windowScroll > 54) {
			header.style.cssText = `
				background: #252525;
				border-bottom: 2px solid #4caf50;
			`
		} else {
			header.removeAttribute('style')
		}
	} else {
		if (windowScroll > 54) {
			header.style.cssText = `
				padding-top: 24px;
				background: #252525;
				border-bottom: 2px solid #4caf50;
			`
		} else {
			header.removeAttribute('style')
		}
	}
})