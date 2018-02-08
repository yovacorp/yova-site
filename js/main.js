$(function() {
    "use strict";

   
    

    function toggleMenuModal() {
    if (menuModalOpen = !menuModalOpen, menu.classList.toggle("menu--active"), body.classList.toggle("is-frozen"), transformicons.toggle(globalClose), globalClose.classList.toggle("global-close--transformed"), null != productToggle && productToggle.classList.contains("menu__nav-link--active")) {
        productToggle.classList.remove("menu__nav-link--active");
        for (var e = 0; e < productWraps.length; e++) productWraps[e].classList.remove("menu__product-wrap--active")
    }
}

function parallaxControl() {
    if (isMediumSize() || null == splash) {
        if (null != parallax)
            for (parallax.disable(), i = 0; i < layers.length; i++) layers[i].removeAttribute("style")
    } else null != parallax ? (parallax.enable(), parallax.updateLayers()) : parallax = new Parallax(splash)
}

function reloadVideoModal() {
    console.log("reload video");
    var e = $(".video-modal__player").html();
    $(".video-modal__player").html(e)
}

function toggleVideoModal() {
    videoModalOpen = !videoModalOpen, videoModal.classList.toggle("video-modal--active"), body.classList.toggle("is-frozen"), videoModalOpen || reloadVideoModal()
}

function setHeaderWatcherSize() {
    return isSmallSize() ? 1 : 30
}

function isSmallSize() {
    return window.innerWidth < 576
}

function isMediumSize() {
    return window.innerWidth < 767
}
var body = document.querySelector("body"),
    header = document.querySelector(".hero-section"),
    headerWatcher = scrollMonitor.create(1),
    menu = document.querySelector(".js-menu"),
    menuToggles = document.querySelectorAll(".js-menu-toggle"),
    productToggle = document.querySelector(".js-product-toggle"),
    productWraps = document.querySelectorAll(".js-product-wrap"),
    globalClose = document.querySelector(".global-close"),
    menuModalOpen = !1,
    videoModalOpen = !1;
headerWatcher.exitViewport(function() {
    header.classList.contains("header--fixed") || (header.classList.add("header--fixed"), globalClose.classList.add("global-close--fixed-header"))
}), headerWatcher.enterViewport(function() {
    header.classList.contains("header--fixed") && (header.classList.remove("header--fixed"), globalClose.classList.remove("global-close--fixed-header"))
});
for (var i = 0; i < menuToggles.length; i++) menuToggles[i].addEventListener("click", function(e) {
    e.preventDefault(), videoModalOpen && toggleVideoModal(), toggleMenuModal()
});
null != productToggle && productToggle.addEventListener("click", function(e) {
    e.preventDefault(), productToggle.classList.toggle("menu__nav-link--active");
    for (var o = 0; o < productWraps.length; o++) productWraps[o].classList.toggle("menu__product-wrap--active")
});



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'http://csmthemes.us3.list-manage.com/subscribe/post?u=9666c25a337f497687875a388&id=5b881a50fb'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> Awesome! We have sent you a confirmation email',
        1: '<i class="fa fa-exclamation-triangle"></i> Please enter a value',
        2: '<i class="fa fa-exclamation-triangle"></i> An email address must contain a single @',
        3: '<i class="fa fa-exclamation-triangle"></i> The domain portion of the email address is invalid (the portion after the @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> The username portion of the email address is invalid (the portion before the @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> This email address looks fake or invalid. Please enter a real email address'
    };


    /* ==========================================================================
   Tweet
   ========================================================================== */


    // $('.tweet').twittie({
    //     username: 'envatomarket', // change username here
    //     dateFormat: '%b. %d, %Y',
    //     template: '{{tweet}} {{user_name}}',
    //     count: 10
    // }, function() {
    //     var item = $('.tweet ul');

    //     item.children('li').first().show().siblings().hide();
    //     setInterval(function() {
    //         item.find('li:visible').fadeOut(500, function() {
    //             $(this).appendTo(item);
    //             item.children('li').first().fadeIn(500);
    //         });
    //     }, 5000);
    // });


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50, //change value here
            numberStep: comma_separator_number_step
        }, 6000);

    }, {
        offset: '80%'

    });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




/* ==========================================================================
   Smooth scroll
   ========================================================================== */
$('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({

                scrollTop: (target.offset().top - 40)
            }, 1000);
            return false;
        }
    }
});


/* ==========================================================================
   Collapse nav bar
   ========================================================================== */

$(".navbar-nav li a").on('click', function() {
    $(".navbar-collapse").collapse('hide');
});



/* ==========================================================================
   Contact form
   ========================================================================== */


var formFields = $('.contact-form form input, .contact-form form textarea');



$(formFields).on('focus', function() {
    $(this).removeClass('input-error');
});

// $('.contact-form form').submit(function(e) {
//     e.preventDefault();
//     $(formFields).removeClass('input-error');
//     var postdata = $('.contact-form form').serialize();
//     $.ajax({
//         type: 'POST',
//         url: 'php/contact.php',
//         data: postdata,
//         dataType: 'json',
//         success: function(json) {

//             if (json.nameMessage !== '') {
//                 $('.contact-form form .contact-name').addClass('input-error');
//             }
//             if (json.emailMessage !== '') {
//                 $('.contact-form form .contact-email').addClass('input-error');
//             }
//             if (json.messageMessage !== '') {
//                 $('.contact-form form textarea').addClass('input-error');
//             }
//             if (json.antispamMessage !== '') {
//                 $('.contact-form form .contact-antispam').addClass('input-error');
//             }
//             if (json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '' && json.antispamMessage === '') {
//                 $('.contact-form').fadeOut('3000', "linear", function() {
//                     $('.contact-form-success').slideToggle();

//                 });
//             }
//         }
//     });
// });




/* ==========================================================================
   Chat button
   ========================================================================== */


$('.sub-form').waypoint(function() {
$('.chat-btn').addClass('fixed');

}, {
offset: '60%'

});




});