/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    new SimpleLightbox({
        elements: '#news a.portfolio-box'
    });
});


function goto( link ){
    window.open( link ) ;
}

// load fortnite news
// const RSS_URL = `https://rss.app/feeds/wmbrfT7OZPeT0j13.xml`; // google news feed : fortnite

// $.ajax(RSS_URL, {
//     accepts: {
//         xml: "application/rss+xml"
//     },
//     dataType: "xml",
//     success: function (data) {
//         var no=0;
//         $(data)
//             .find("item")
//             .each(function () {
//                 const el = $(this);                    
               
//                 const template = `
//                 <div class="col-lg-4 col-sm-6">
//                 <div class="portfolio-box" onclick="goto('${el.find("link").text()}')">
//                     <img class="img-fluid" src="${el[0].getElementsByTagName('media:content')[0].getAttribute('url')}" alt="." />
//                     <div class="portfolio-box-caption">
//                         <div class="project-category text-white-50"></div>
//                         <div class="project-name">${el.find("title").text()}</div>
//                     </div>
//                 </div>
//             </div>`;
//                 if(no<10 && no!=4){
//                     document.getElementById('news_content').insertAdjacentHTML("beforeend", template);
//                 }
//                 no=no+1;
//             });
//     }
// });

// =============================
// loading animation
// =============================

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2"),
    maskBG: document.getElementsByClassName("maskbg")[0]
};

let endLoading = false;


const texts = [
    "ACE",
    "NATION"
];

let totalTime = Math.random() * 9 + 4;
const morphTime = totalTime / 2;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    //console.log("textIdx:" + textIndex);
    if (textIndex < texts.length * 2 - 1) {
        requestAnimationFrame(animate);
    }

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }
        doMorph();
    } else {
        doCooldown();
    }
    if (endLoading == true) {            
        elts.maskBG.classList.add('maskbg-transition');
        elts.maskBG.classList.add('maskbg-hidden');
    }

    if (textIndex < texts.length * 2 - 1) {
    } else {
        endLoading = true;
    }
}

animate();

elts.maskBG.addEventListener('transitionend', function() {
    elts.maskBG.classList.remove('box-transition');
}, false);


//========  Scroll Lock ===========//
function disableScroll() {
    // Get the current page scroll position in the vertical direction
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    // Get the current page scroll position in the horizontal direction 
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
        console.log("score to : top:" + scrollTop);
        window.scrollTo({
            top: screenTop,
            left: screenLeft,
            behavior: "instant",
        });
    };
}

function enableScroll() {
    window.onscroll = function () { };
}
disableScroll();
elts.maskBG.addEventListener('transitionend', function () {
    elts.maskBG.classList.remove('maskbg-transition');
    enableScroll();
}, false);


// ================
// rating panel
// ================

function close_panel(){
    $('#myModal').modal().hide() ;
}

function rating_panel(){
    var target = document.getElementById('rating-submit') ;
    target.innerHTML= "<span>Thanks for your reply</span>" +  target.innerHTML;
    var b = document.getElementById('panel_btn') ;
    b.disabled = true;
    setTimeout(close_panel, 3_000);
}
function triggerStar() {
    //var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    //myModal.modal({'backdrop':false})
    $('#myModal').modal({'backdrop':'static'}).show();
    //myModal.show();

}

function trigger_rating_panel(){
    //console.log("-->"+ window.scrollY) ;
    if( window.scrollY>1800){
        setTimeout(triggerStar,1_000) ;
        return ;
    }
    setTimeout(trigger_rating_panel,500) ;
}
trigger_rating_panel() ; // trigger 