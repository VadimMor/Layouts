//Скролл с интро
let buttonIntro = document.getElementById('scroll');

buttonIntro.addEventListener('click', function (element) {
    let introHeight = document.getElementById('intro').clientHeight + 1;

    window.scrollTo({
        top: introHeight,
        behavior: 'smooth',
    })
})


// Плавный скролл из меню
const buttonsScroll = document.querySelectorAll('.menu__link');

for (let i=0; i<buttonsScroll.length; i++) {
    buttonsScroll[i].addEventListener('click', function (element) {
        element.preventDefault();

        let idBlock = element.target.getAttribute('href').substr(1)

        if (idBlock == 'header') {
            let introHeight = document.getElementById('intro').clientHeight + 1;

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: document.getElementById(idBlock).getBoundingClientRect().top + window.pageYOffset - 124,
                behavior: 'smooth'
            });
        }
    })
}


// Фиксация меню
window.addEventListener('scroll', function() {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let introHeight = document.getElementById('intro').clientHeight;
    let header = document.getElementById('header');

    if (windowScroll >= introHeight) {
        header.classList.add('fixed');
        document.getElementById('about').style.marginTop = 124 + 'px';
    } else {
        header.classList.remove('fixed')
        document.getElementById('about').style.marginTop = 0 + 'px'
    }
})


// Меню нажатие 
let navToggle = document.getElementById('nav_toggle');

if (navToggle) {
    navToggle.addEventListener('click', function(element) {
        element.preventDefault();

        this.classList.add('fixed');
        document.getElementById('nav').classList.add('fixed');
    });
}


// Анимация
let animationItems = document.querySelectorAll('.anim-items');

if (animationItems.length > 0) {
    window.addEventListener('scroll', animationOnScroll);

    function animationOnScroll() {
        for (let i=0; i<animationItems.length; i++) {
            const animationItem = animationItems[i];
            const animationItemHeight = animationItem.offsetHeight;
            const animationItemOffset = offset(animationItem).top
            const animationStart = 4;

            let animationPoint = window.innerHeight - animationItemHeight / animationStart;

            if (animationItemHeight > window.innerHeight) {
                animationPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animationItemOffset - animationPoint) && (pageYOffset < animationItemOffset - animationItemHeight)) {
                animationItem.classList.add('_active');
            }
        }   
    }

    function offset(element) {
        const rect = element.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {top: rect.top + scrollTop}
    }

    animationOnScroll();
}