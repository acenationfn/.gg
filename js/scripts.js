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