$(document).ready(function () {
    //   Initialize Swiper
    var swiper = new Swiper(".deals-swipper", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    })

    var swiper = new Swiper(".products-swiper", {
        spaceBetween : 60,
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1080: {
                slidesPerView: 2,
            },
            1500: {
                slidesPerView: 3,
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    // fill header data 
    var swiperWrapper = document.getElementById('swiperWrapper')
    var swiperSlide = [
        {
            src: 'assest/img/deal.JPG',
            title: 'برمجة',
            desc: 'هع افضل الخبراء بمجال البرمجة'
        },
        {
            src: 'assest/img/deal.JPG',
            title: 'تسويق',
            desc: 'هع افضل الخبراء بمجال البرمجة'
        },
        {
            src: 'assest/img/deal.JPG',
            title: 'تصميم',
            desc: 'هع افضل الخبراء بمجال البرمجة'
        },
        {
            src: 'assest/img/deal.JPG',
            title: 'تدريب',
            desc: 'هع افضل الخبراء بمجال البرمجة'
        }
    ]
    swiperSlide.forEach((item, index) => {
        if (index % 2 == 0) swiperWrapper.innerHTML += `
        <div class="swiper-slide">
                <img src=${item.src} alt="">
                <div class="cover right">
                    <div class="container">
                    <div class="line animated bounceInLeft"></div>
                        <div class="header-content">
                            <h2 class="header-item-title">${item.title}</h2>
                            <h6 class="header-item-description">${item.desc}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `
        else swiperWrapper.innerHTML += `
        <div class="swiper-slide">
                <img src=${item.src} alt="">
                <div class="cover left">
                    <div class="container">
                    <div class="line animated bounceInLeft"></div>
                        <div class="header-content">
                            <h2 class="header-item-title">${item.title}</h2>
                            <h6 class="header-item-description">${item.desc}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

});
