// BURGER
let menuBtn = document.querySelector('.menu__btn');
let body = document.querySelector('body');
let header = document.querySelector('header');
let menu = document.querySelector('.menu');

if (document.querySelector('.menu__btn')) {
	menuBtn.addEventListener('click', function() {
		menu.classList.toggle('active');
		body.classList.toggle('overflow-hidden');
	})

	document.addEventListener('keydown', function(event) {
		if (event.code == 'Escape') {
			for (let i = 0; i < menu.classList.length; i++) {
				if (menu.classList[i] == 'active') {
					menu.classList.remove('active');
					body.classList.remove('overflow-hidden');
				}
			}
		}
	});

	document.body.addEventListener('click', function(element) {
		if (!element.target.closest('header')) {
			for (let i = 0; i < menu.classList.length; i++) {
				if (menu.classList[i] == 'active') {
					menu.classList.remove('active');
					body.classList.remove('overflow-hidden');
				}
			}
		}
	})
}


// ANIMATE
const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	
	function animOnScroll(element) {
		for (let i=0; i<animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 8;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect()
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}

	setTimeout(() => {
		animOnScroll()
	}, 300)
}