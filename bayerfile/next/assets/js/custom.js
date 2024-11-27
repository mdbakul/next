$(function () {
    "use strict";

    $('.preloader__logo img').addClass('logo-blink');
    function id(v) {
        return document.getElementById(v);
    }
    function loadbar() {
        var ovrl = id("loading"),
            prog = id("tp-loading-line"),
            img = document.querySelectorAll('.preloader__logo img'),
            c = 0,
            tot = img.length;

        if (tot === 0) return doneLoading();

        function imgLoaded() {
            c += 1;
            var perc = Math.floor((100 / tot) * c) + "%";
            prog.style.width = perc;

            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            setTimeout(function () {
                if ($("#loading").length) {
                    $("#loading").fadeOut(500);
                }
            }, 100);
        }

        img.forEach(function (image) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = image.src;
        });
    }
    loadbar();

    // header move to offcanvus-area
    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }

    // Sidebar Js
    $(".tp-menu-bar").on("click", function () {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function () {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
        let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
        mobileNavContainer.innerHTML = navContent;
        let arrow = $(".tp-main-menu-mobile .menu-item-has-children > a");
        arrow.each(function () {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

            self.append(function () {
                return arrowBtn;
            });

            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tp-submenu").slideToggle();
            });

        });
    }


    /*====after click sub menu open in mobile =====*/
    $("ul>li>ul").parent("li").addClass("menu-item-has-children");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });

    /*====after click sub menu open in mobile =====*/
    $(".header__menu--menu2 ul>li>ul").parent("li").addClass("menu-item-has-children menu-item-has-children2");
    // drop down menu width overflow problem fix
    $('ul').parent('li').on('hover', function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({
                left: newpos
            });
        }
    });

    $('.header__menu li a').on('click', function (e) {
        var element = $(this).parent('li');
        if (screen.width < 1200) {
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(300, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(300, "swing");
                element.siblings('li').children('ul').slideUp(300, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(300, "swing");
            }
        }
    })

    //Header   	
    var fixed_top = $(".header__bottom");
    $(window).on('scroll', function () {
        if (screen.width > 1200) {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("header-fixed animated fadeInDown");
            } else {
                fixed_top.removeClass("header-fixed animated fadeInDown");
            }
        }
    });


    // case slider start here
    $('.case__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Odometer compnay overview
    $(".odometer").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (
                    var i = 0; i < document.querySelectorAll(".odometer").length; i++
                ) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });

    // case slider start here
    $('.testmonial__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.sponsor__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });


    // case slider start here
    $('.service2__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    var $grid = $(".casegallery__grid").isotope({
        transitionDuration: "0.9s",

    });
    // sort items on button click
    $(".item").on("click", function () {
        var filterValue = $(this).attr("data-sort-by");
        $grid.isotope({ filter: filterValue });
    });

    $(".item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // case slider start here
    $('.client__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // case slider start here
    $('.clientfeedback__slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Search option start here
    $(document).on("click", ".searchbar .icon svg, .closer", function () {
        $(".orginalsearch").toggleClass("active");
    });

    // scroll up start here         

    // popup start here
    $(document).ready(function () {
        // PoPuP 
        $('.popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });
        $("body").each(function () {
            $(this).find(".img-pop").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });
    })


    // scroll up start here
    $(function () {
        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".scrollToTop").css({
                    bottom: "2%",
                    opacity: "1",
                    transition: "all .5s ease",
                });
            } else {
                $(".scrollToTop").css({
                    bottom: "-30%",
                    opacity: "0",
                    transition: "all .5s ease",
                });
            }
        });
        //Click event to scroll to top
        $(".scrollToTop").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                500
            );
            return false;
        });
    });// scroll up start here
    $(function () {
        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".scrollToTop").css({
                    bottom: "2%",
                    opacity: "1",
                    transition: "all .5s ease",
                });
            } else {
                $(".scrollToTop").css({
                    bottom: "-30%",
                    opacity: "0",
                    transition: "all .5s ease",
                });
            }
        });
        //Click event to scroll to top
        $(".scrollToTop").on("click", function () {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                500
            );
            return false;
        });
    });

    // wow animation
    new WOW().init();

});


