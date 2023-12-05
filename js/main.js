function Mosaic($) {

    $("#nanogallery").nanogallery2({
        kind: "flickr",
        userID: "196065796@N06",
        flickrAPIKey: "f4f94fbdb120ec475cdd81096bbdac38",
        album: "72177720312982507",
        // GALLERY AND THUMBNAIL LAYOUT
        galleryMosaic: [                       // default layout
            {w: 2, h: 2, c: 1, r: 1},
            {w: 1, h: 1, c: 3, r: 1},
            {w: 1, h: 1, c: 3, r: 2},
            {w: 1, h: 2, c: 4, r: 1},
            {w: 2, h: 1, c: 5, r: 1},
            {w: 2, h: 2, c: 5, r: 2},
            {w: 1, h: 1, c: 4, r: 3},
            {w: 2, h: 1, c: 2, r: 3},
            {w: 1, h: 2, c: 1, r: 3},
            {w: 1, h: 1, c: 2, r: 4},
            {w: 2, h: 1, c: 3, r: 4},
            {w: 1, h: 1, c: 5, r: 4},
            {w: 1, h: 1, c: 6, r: 4}
        ],
        galleryMosaicXS: [                     // layout for XS width
            {w: 2, h: 2, c: 1, r: 1},
            {w: 1, h: 1, c: 3, r: 1},
            {w: 1, h: 1, c: 3, r: 2},
            {w: 1, h: 2, c: 1, r: 3},
            {w: 2, h: 1, c: 2, r: 3},
            {w: 1, h: 1, c: 2, r: 4},
            {w: 1, h: 1, c: 3, r: 4}
        ],
        galleryMosaicSM: [                     // layout for SM width
            {w: 2, h: 2, c: 1, r: 1},
            {w: 1, h: 1, c: 3, r: 1},
            {w: 1, h: 1, c: 3, r: 2},
            {w: 1, h: 2, c: 1, r: 3},
            {w: 2, h: 1, c: 2, r: 3},
            {w: 1, h: 1, c: 2, r: 4},
            {w: 1, h: 1, c: 3, r: 4}
        ],
        galleryMaxRows: 1,
        galleryDisplayMode: 'rows',
        gallerySorting: 'random',
        thumbnailDisplayOrder: 'random',

        thumbnailHeight: '180', thumbnailWidth: '220',
        thumbnailAlignment: 'scaled',
        thumbnailGutterWidth: 2, thumbnailGutterHeight: 0,
        thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

        thumbnailToolbarImage: null,
        thumbnailToolbarAlbum: null,
        thumbnailLabel: {display: false},

        // DISPLAY ANIMATION
        // for gallery
        galleryDisplayTransitionDuration: 1500,
        // for thumbnails
        thumbnailDisplayTransition: 'imageSlideUp',
        thumbnailDisplayTransitionDuration: 1200,
        thumbnailDisplayTransitionEasing: 'easeInOutQuint',
        thumbnailDisplayInterval: 60,

        // THUMBNAIL HOVER ANIMATION
        thumbnailBuildInit2: 'image_scale_1.15',
        thumbnailHoverEffect2: 'image_scale_1.15_1',
        touchAnimation: true,
        touchAutoOpenDelay: 500,

        // LIGHTBOX
        viewerToolbar: {display: false},
        viewerTools: {
            topRight: 'rotateLeft, rotateRight, fullscreenButton, closeButton'
        },

        // GALLERY THEME
        galleryTheme: {
            thumbnail: {background: '#F2C6C5'},
        },

        // DEEP LINKING
        locationHash: false
    });
}

;(function () {

    'use strict';

    // Main Menu Superfish
    var mainMenu = function () {

        $('#fh5co-primary-menu').superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });

    };

    // Offcanvas and cloning of the main menu
    var offcanvas = function () {

        var $clone = $('#fh5co-menu-wrap').clone();
        $clone.attr({
            'id': 'offcanvas-menu'
        });
        $clone.find('> ul').attr({
            'class': '',
            'id': ''
        });

        $('#fh5co-page').prepend($clone);

        // click the burger
        $('.js-fh5co-nav-toggle').on('click', function () {

            if ($('body').hasClass('fh5co-offcanvas')) {
                $('body').removeClass('fh5co-offcanvas');
            } else {
                $('body').addClass('fh5co-offcanvas');
            }
            // event.preventDefault();

        });

        $('#offcanvas-menu').css('height', $(window).height());

        $(window).resize(function () {
            var w = $(window);


            $('#offcanvas-menu').css('height', w.height());

            if (w.width() > 769) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }

        });

    }


    // Click outside of the Mobile Menu
    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('fh5co-offcanvas')) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }
        });
    };


    // Animations

    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '85%'});
    };

    var stickyBanner = function () {
        var $stickyElement = $('.sticky-banner');
        var sticky;
        if ($stickyElement.length) {
            sticky = new Waypoint.Sticky({
                element: $stickyElement[0],
                offset: 0
            })
        }
    };

    // Set the date we're counting down to
    var countDownDate = new Date("December 17, 2023 11:00:00 AM GMT+07:00").getTime();
    var countDownDate_2 = new Date("December 24, 2023 11:00:00 AM GMT+07:00").getTime();

    let count = 1
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in an element with id="demo"
        // document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
        // + minutes + "Minutes " + seconds + "Seconds ";

        // Display the result in an element with id="demo"
        document.getElementById("days").innerHTML = days + " <small>days</small>";
        document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
        document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
        document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";

        // If the count down is finished, write some text
        if (distance < 0 && count < 2) {
            countDownDate = countDownDate_2
            count = 2
        } else if (distance < 0){
            clearInterval(x)
        }

    }, 1000);

    // Document on load.

    $(function () {
        mainMenu();
        offcanvas();
        mobileMenuOutsideClick();
        contentWayPoint();
        stickyBanner();
        Mosaic($)
        const jarallaxPlugin = $.fn.jarallax.noConflict() // return $.fn.jarallax to previously assigned value
        $.fn.newJarallax = jarallaxPlugin // give $().newJarallax the Jarallax functionality


        const btnLove = document.querySelector('.btn-love');
        btnLove.addEventListener('click',function(e) {
            if(this.classList.contains('act')) {
                this.classList.remove('act');
            }
            this.className += " act";

            TweenMax.set('.circle,.small-ornament',{
                rotation:0,
                scale:0,
            })
            TweenMax.set('.ornament',{
                opacity:0,
                scale:1,
            })
            let Tl = new TimelineMax({});
            Tl.to('.icon-heart3',0.1,{
                scale:0,
                ease:Back.easeNone,
            })

            Tl.to('.circle',0.2,{

                scale:1.2,
                opacity:1,
                ease:Back.easeNone,
            })

            Tl.to('.icon-heart3',0.2,{
                delay:0.1,
                scale:1.3,
                color:'#e3274d',
                ease:Ease.easeOut
            })
            Tl.to('.icon-heart3',0.2,{
                scale:1,
                ease:Ease.easeOut
            })

            Tl = new TimelineMax({
                delay:0.1,
            });


            Tl.to('#eclipse',0.2,{

                strokeWidth:10,
                ease:Back.easeNone,
            })
            Tl.to('#eclipse',0.2,{
                strokeWidth:0,
                ease:Back.easeNone,
            })
            Tl = new TimelineMax({
                delay:0.1,
            });
            Tl.to('.small-ornament',0.3,{
                scale:0.8,
                opacity:1,
                ease:Linear.easeOut,
            })
            Tl.to('.small-ornament',0.2,{
                scale:1.2,
                opacity:1,
                rotation:15,
                ease:Ease.easeOut,
            })


            Tl = new TimelineMax({
                delay:0.3,
            });
            Tl.to('.ornament',0.2,{
                opacity:1,
                ease:Ease.easeNone
            })
            Tl.to('.ornament',0.1,{
                scale:0,
                ease:Ease.easeOut
            })

        })
    });


}());