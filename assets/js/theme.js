(function ($) {
    'use strict';

     //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

// Preloader
   $(document).ready(function() {
      setTimeout(function(){
         $('.loader_bg').fadeToggle();
      }, 1000);
   });

   $.fn.progressBar = function () {
    return this.each(function () {
      var $init = $(this);
  
      $init.addClass("progress-bar");
  
      var progressBarDefault = {
        duration: 10000,
        endNumber: 100
      };
  
      var settings = $.extend(progressBarDefault, $init.data());
  
      $init.each(function () {
        var $el = $(this);
  
        var $number = $("<span>", $el).addClass("progress-bar__number");
        $el.append($number);
  
        var $slice_bar = $("<div>", $el).addClass("slice-bar");
        $el.append($slice_bar);
  
        var $slice_fill = $("<div>", $el).addClass("slice-fill");
        $el.append($slice_fill);
  
        var $bar = $("<div>", $el.find(".slice-bar")).addClass("bar");
        $el.find(".slice-bar").append($bar);
  
        var $fill = $("<div>", $el.find(".slice-fill")).addClass("fill");
        $el.find(".slice-fill").append($fill);
  
        var _size = $el.width();
        var _number = settings.endNumber;
        var _rate = settings.duration / 100;
        var _val = $number.text();
        var _rotate = 0;
  
        $slice_bar.css(
          "clip",
          "rect(0," + _size + "px," + _size + "px," + _size / 2 + "px)"
        );
  
        $bar.css("clip", "rect(0," + _size / 2 + "px," + _size + "px,0)");
  
        var runTimes = setInterval(function () {
          if (_val === _number) {
            clearInterval(runTimes);
            return false;
          }
  
          _val++;
          _rotate = (_val / 100) * 360;
  
          if (_rotate > 180) {
            $fill.css({
              clip: "rect(0," + _size / 2 + "px," + _size + "px,0)",
              transform: "rotate(" + _rotate + "deg)"
            });
          } else {
            $bar.css("transform", "rotate(" + _rotate + "deg)");
          }
  
          $number.text(_val + "%");
        }, _rate);
      });
    });
  };
  
  $('[data-init="progressBar"]').progressBar();
  

    $('.hero-slide').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dotsEach:false,
        dots: false,
        nav: false,
        margin: 0,
        center:false,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })


    $('.service').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: true,
        nav: false,
        margin: 0,
        center:false,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    // testimonial Active

    $('.testi-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dotsEach:true,
        dots: true,
        nav: false,
        margin: 0,
        center:false,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    // about Active

    $('.feature').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: true,
        nav: false,
        dotsEach:true,
        center: false,
        margin: 0,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    $('.testimonial').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: true,
        nav: false,
        center: false,
        margin: 0,
        navText: [""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })



     // Barnd Active


    $('.blog').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: true,
        nav: true,
        center: false,
        margin: 0,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    $('.brand').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: true,
        nav: true,
        center: false,
        margin: 0,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })




      // Team Share
    $(".team2-icon").on("click", function () {
        $(this).toggleClass("active");
        $(".team2-icon").not(this).removeClass("active");
      });


    /*  Cart Plus Minus Button
    /*----------------------------------------*/
    
    $('.ctnbutton').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      } 

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>',
        scrollSpeed: 900,
        animation: 'fade'
    })


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $('.accordion a').on('click', function (j) {
            var dropDown = $(this).closest("li").find("p");

            $(this).closest(".accordion").find("p").not(dropDown).slideUp();

            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });

         /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {
            
            var $portfolio = $('.image_load');
    
            $portfolio.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
    
            $('.menu-filtering li').on('click', function () {
                $('.menu-filtering li').removeClass('current_menu_item');
                $(this).addClass('current_menu_item');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector,
                });
            });
    
        }
    });


        //=====< barfiller script >====
        $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });
        $('#bar3').barfiller({
            duration: 7000
        });
        $('#bar4').barfiller({
            duration: 7000
        });


        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });

    // Calendar Picker
    $(document).ready(function() {
        const nextYear = new Date().getFullYear() + 1;
        const myCalender = new CalendarPicker('#myCalendarWrapper', {
            min: new Date(),
            max: new Date(nextYear, 10),
            locale: 'en-US',
            showShortWeekdays: false
        });
    
        const currentDateElement = document.getElementById('current-date');
        const currentToDateStringElement = document.getElementById('current-toDateString');
    
        function updateDateDisplay(currentValue) {
            currentDateElement.textContent = currentValue.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
    
            currentToDateStringElement.textContent = currentValue.toDateString();
    
            console.log(`The current value of the calendar is: ${currentValue}`);
        }
    
        updateDateDisplay(myCalender.value);
    
        myCalender.onValueChange((currentValue) => {
            updateDateDisplay(currentValue);
        });
    });



    // scroll up

    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }

     // Sidebar
        
     "use strict";
     jQuery(document).ready(function () {
         $('.nav-btn a i').on('click', function () {
             $('.xs-sidebar-group').addClass('isActive');
         });
 
         $('.xs-overlay').on('click', function () {
             $('.xs-sidebar-group').removeClass('isActive');
         });
         
         $('.close-side-widget').on('click', function () {
             $('.xs-sidebar-group').removeClass('isActive');
         });
     });



})(jQuery);
