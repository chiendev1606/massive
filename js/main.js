// set up owl carousel
$('.intro__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 750,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.feedback__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 750,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.clients__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        760: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})

// set up wow js
const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: false,
    scrollContainer: null
});
wow.init();

// set up cout up js
$('.result__number').countUp();


//----- window scroll => progress-bar active, header white active, navbar active ---
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('#headerMassive .nav-link');
const skillGroup = document.getElementById("skillGroup");
const progressBar = document.querySelectorAll(".progress-bar");

// heading white
window.addEventListener("scroll", () => {
    if (window.innerWidth > 760) {
        if (window.scrollY > 60) {
            document.getElementById("navbar").classList.add("headerNav--white");
        } else {
            document.getElementById("navbar").classList.remove("headerNav--white");
        }
    }

});

// progress-bar active
window.addEventListener("scroll", () => {
    const groupPos = skillGroup.getBoundingClientRect().top;
    const screePos = window.innerHeight;
    if (groupPos < screePos) {
        progressBar.forEach(e => {
            const value = e.dataset.progress;
            e.style.width = `${value}%`;
        })
    }
})

// navlink active
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2.5)) {
            current = section.getAttribute("id");
        }
    });
    if (current !== null) {
        navLink.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute('data-active') === current) {
                li.classList.add("active");
            }
        })
    };
});



//------------ add animation when hover -----------

// hover team__overlay ==> add animation
document.querySelectorAll(".team__overplay").forEach(e => {
    e.addEventListener("mouseover", () => {
        (e.children)[0].classList.add("animate__animated", "animate__fadeInDownBig");
        ((e.children)[1].children)[0].classList.add("animate__animated", "animate__fadeInUpBig");
        (e.children)[0].style.setProperty('--animate-duration', '0.3s');
        ((e.children)[1].children)[0].style.setProperty('--animate-duration', '0.3s');
    });
    e.addEventListener("mouseout", () => {
        (e.children)[0].classList.remove("animate__animated", "animate__fadeInDownBig");
        ((e.children)[1].children)[0].classList.remove("animate__animated", "animate__fadeInUpBig");
    });
});

// hover portfolio__overplay ==> add animation
document.querySelectorAll('.portfolio__overplay').forEach(e => {
    const portfolioContent = (e.children)[0];
    e.addEventListener('mouseover', () => {
        (portfolioContent.children)[0].classList.add("animate__animated", "animate__fadeInDown");
        (portfolioContent.children)[0].style.setProperty('--animate-duration', '0.3s');
        (portfolioContent.children)[1].classList.add("animate__animated", "animate__fadeInUp");
        (portfolioContent.children)[1].style.setProperty('--animate-duration', '0.3s');
    })
    e.addEventListener("mouseout", () => {
        (portfolioContent.children)[0].classList.remove("animate__animated", "animate__fadeInDown");
        (portfolioContent.children)[1].classList.remove("animate__animated", "animate__fadeInUp");
    });
});