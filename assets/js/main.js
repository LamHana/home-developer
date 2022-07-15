function scrollNav() {
    var navbar = document.getElementById('header');
    var scrollValue = window.scrollY;

    if (scrollValue < 0.800000011920929) {
        navbar.classList.remove('scroll-active');
        document.getElementById("login-btn").style.border = "2px solid transparent";
    }
    else {
        navbar.classList.add('scroll-active');
        document.getElementById("login-btn").style.border = "0px solid transparent";
    }
}

window.addEventListener('scroll', scrollNav);