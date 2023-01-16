const footerBtn = document.getElementById('footer__btn');
const deskWindowsBtn = document.getElementById('login__desktop--btn');

footerBtn.addEventListener('click', () => {
    const footer = document.getElementById('footer__video');
    
    footer.classList.toggle("active");
})

deskWindowsBtn.addEventListener('click', () => {
    const desktopWindows = document.getElementById('login_desktop--windows');

    desktopWindows.classList.toggle("active");
})

document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
        const desktopWindows = document.getElementById('login_desktop--windows');
        const footer = document.getElementById('footer__video');

        desktopWindows.classList.remove("active");
        footer.classList.remove("active");
    }
})

document.addEventListener("click", (e) => {
    const desktopWindows = document.getElementById('login_desktop--windows');
    const footer = document.getElementById('footer__video');
    const withinBoundariesWindows = e.composedPath().includes(desktopWindows);
    const withinBoundariesFooter = e.composedPath().includes(footer);

    if (!withinBoundariesWindows) {
        desktopWindows.classList.remove("active");

        if (!withinBoundariesFooter) {
            footer.classList.remove("active");
        }
    } 
})

window.addEventListener('scroll', function(e) {
    if (window.pageYOffset >= this.document.getElementById("header").clientHeight / 1.45) {
        this.document.getElementById("header").classList.remove("active")
    } else {
        this.document.getElementById("header").classList.add("active")
    }
});