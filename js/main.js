
function showContent(section) {
    document.querySelectorAll('.content-section').forEach(content => {
        content.style.display = 'none';
    });
    
    document.querySelectorAll('button[id^="btn-"]').forEach(btn => {
        btn.querySelector('.d-flex').style.color = '#ffab27';
    });
    
    const selectedContent = document.getElementById(section + '-content');
    selectedContent.style.display = 'block';
    selectedContent.style.animation = 'fadeIn 0.5s';
    
    const activeBtn = document.getElementById('btn-' + section);
    activeBtn.querySelector('.d-flex').style.color = '#ffab27';
}


const videoPaths = {
    1: 'videos/slider-1.mp4',
    2: 'videos/slider-2.mp4',
    3: 'videos/slider-3.mp4'
};

function playVideo(videoNumber) {
    const videoPath = videoPaths[videoNumber];
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    
    modalVideoSource.src = videoPath;
    modalVideo.load(); 
    videoModal.show();
    
    if (typeof carousel !== 'undefined') {
        carousel.pause();
    }
}


const videoCarousel = document.getElementById('videoCarousel');
if (videoCarousel) {
    const carousel = new bootstrap.Carousel(videoCarousel, {
        interval: 5000,
        wrap: true
    });
}

(function ($) {
    "use strict";

 
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
   
    new WOW().init();

    
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });

    
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

  
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

  
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });

    
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);