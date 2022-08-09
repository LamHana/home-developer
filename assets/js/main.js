function scrollNav() {
    var navbar = document.getElementById('header');
    var scrollValue = window.scrollY;

    if (scrollValue < 0.800000011920929) {
        navbar.classList.remove('scroll-active');
        document.getElementById("header__nav-login-btn").style.padding = "6.5px 3px 7px 3px";
    }
    else {
        navbar.classList.add('scroll-active');
        document.getElementById("header__nav-login-btn").style.padding = "6px 2px 6px 2.5px";
    }
}
window.addEventListener('scroll', scrollNav);

var showNav = document.querySelector('.header__btn-menu');
var ul = document.querySelector('.header__nav-container');
showNav.addEventListener("click", function () {
    ul.classList.toggle('display-flex');
});

var listLi = document.querySelectorAll('.list-item');
listLi.forEach((item) => {
    item.onclick = function () {
        ul.classList.remove('display-flex');
    };
});