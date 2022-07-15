function scrollNav() {
    var navbar = document.getElementById('header');
    var scrollValue = window.scrollY;

    if (scrollValue < 0.800000011920929) {
        navbar.classList.remove('scroll-active');
        document.getElementById("login-btn").style.padding = "7px 1px";
    }
    else {
        navbar.classList.add('scroll-active');
        document.getElementById("login-btn").style.padding = "6px 0px";
    }
}

window.addEventListener('scroll', scrollNav);