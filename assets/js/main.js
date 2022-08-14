// add background color for header when scrolling web page
function scrollNav() {
    var navbar = document.getElementById("header");
    var scrollValue = window.scrollY;
    // console.log(scrollValue);

    if (scrollValue < 0.800000011920929) {
        navbar.classList.remove("scroll-active");
        document.getElementById("header__nav-login-btn").style.padding =
            "6.5px 3px 7px 3px";
    } else {
        navbar.classList.add("scroll-active");
        document.getElementById("header__nav-login-btn").style.padding =
            "6px 2px 6px 2.5px";
    }
}
window.addEventListener("scroll", scrollNav);

// open-close: burger button
const menuBtn = document.querySelector('.header__btn-menu');
const navBar = document.querySelector(".header__nav-container");
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active__btn-menu');
    navBar.classList.toggle("display-flex");
});

// Purpose: optimized for users
// var listLi = document.querySelectorAll(".list-item");
// listLi.forEach((item) => {
//     item.onclick = function () {
//         navBar.classList.remove("display-flex");
//     };
// });

// slick
$(document).ready(function () {
    $(".slick-track").slick({
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
    });
});

// Intersection Observer API for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const job = entry.target.querySelector(".developer-content__job");
        const slogan = entry.target.querySelector(".developer-content__slogan");
        const describe = entry.target.querySelector(".developer-content__describe");
        const chat = entry.target.querySelector(".developer-content__chat");
        const dImg1 = entry.target.querySelector(".developer-img1");
        const dImg2 = entry.target.querySelector(".developer-img2");
        const dImg3 = entry.target.querySelector(".developer-img3");
        const dImg4 = entry.target.querySelector(".developer-img4");
        const dImg5 = entry.target.querySelector(".developer-img5");
        const dImg6 = entry.target.querySelector(".developer-img6");
        const dImg7 = entry.target.querySelector(".developer-img7");

        if (entry.isIntersecting) {
            job.classList.add("developer-content__job--animation");
            slogan.classList.add("developer-content__slogan--animation");
            describe.classList.add("developer-content__describe--animation");
            chat.classList.add("developer-content__chat--animation");
            dImg1.classList.add("developer-img1--animation");
            dImg2.classList.add("developer-img2--animation");
            dImg3.classList.add("developer-img3--animation");
            dImg4.classList.add("developer-img4--animation");
            dImg5.classList.add("developer-img5--animation");
            dImg6.classList.add("developer-img6--animation");
            dImg7.classList.add("developer-img7--animation");
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        job.classList.remove("developer-content__job--animation");
        slogan.classList.remove("developer-content__slogan--animation");
        describe.classList.remove("developer-content__describe--animation");
        chat.classList.remove("developer-content__chat--animation");
        dImg1.classList.remove("developer-img1--animation");
        dImg2.classList.remove("developer-img2--animation");
        dImg3.classList.remove("developer-img3--animation");
        dImg4.classList.remove("developer-img4--animation");
        dImg5.classList.remove("developer-img5--animation");
        dImg6.classList.remove("developer-img6--animation");
        dImg7.classList.remove("developer-img7--animation");
    });
});
observer.observe(document.getElementById("home"));

// scrollspy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header__nav-container li .list-item');
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight - 300;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header__nav-container li .list-item[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
