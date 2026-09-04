// ------------------------------------------------
// Project Name: Axio Coming Soon Template
// Project Description: Axio - awesome coming soon template to kick-start your project
// Tags: mix_design, axio, coming soon, under construction, template, coming soon page, html5, css3
// Version: 4.0.1
// Build Date: April 2017
// Last Update: July 2026
// Author: mix_design
// Author URI: https://mixdesigntemplates.gumroad.com/
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. Animated Headline
//  3. ParticlesJS Backgrounds
//  4. Vegas Settings
//  5. KBW-Countdown Settings
//  6. Mailchimp Notify Form
//  7. Stay-in-touch Form
//  8. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //

  setTimeout(function(){
    $(".loader").addClass('fade-dark');
    $(".loader__logo").removeClass('slideInDown').addClass('flipOutY');
    $(".loader__caption").removeClass('slideInUp').addClass('fadeOutDown');
  },1000);

  setTimeout(function(){
    $(".loader").addClass('loaded');
  },1700);

  setTimeout(function(){
    $("#main").addClass('loaded');
  },1900);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Animated Headline Start
  // --------------------------------------------- //
  var animationDelay       = 2500,
      revealDuration       = 600,
      revealAnimationDelay = 1500;

  function initHeadline() {
    animateHeadline($('.headline__title'));
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function(){
      var headline = $(this);
      var spanWrapper = headline.find('.words-wrapper'),
        newWidth = spanWrapper.width() + 10
      spanWrapper.css('width', newWidth);

      setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    $word.parents('.words-wrapper').animate({ width : '2px' }, revealDuration, function(){
      switchWord($word, nextWord);
      showWord(nextWord);
    });
  }

  function showWord($word, $duration) {
    $word.parents('.words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
      setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
    });
  }

  function takeNext($word) {
    return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
  }

  function takePrev($word) {
    return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass('is-visible').addClass('is-hidden');
    $newWord.removeClass('is-hidden').addClass('is-visible');
  }

  setTimeout(function(){
    initHeadline();
  },600);
  // --------------------------------------------- //
  // Animated Headline End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  // Stars BG - particlesJS
  var bgndTriangles = $('#stars-js');
  if (bgndTriangles.length) {
    particlesJS('stars-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };

  // Particles BG - particlesJS
  var bgndParticles = $('#particles-js');
  if (bgndParticles.length) {
    particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 180,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
  };

  // Polygon BG - particlesJS
  var bgndPolygons = $('#polygons-js');
  if (bgndPolygons.length) {
    particlesJS('polygons-js', {
      "particles": {
        "number": {
          "value": 24,
          "density": {
            "enable": true,
            "value_area": 650
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.2324947488255008,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.48724632738080703,
            "opacity_min": 0.06496617698410762,
            "sync": false
          }
        },
        "size": {
          "value": 19.728691040806815,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 7.308694910712106,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 4249.041961293636,
            "rotateY": 3206.8241217310456
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/custom/yoga-natural-retreat.jpg" },
        { src: "img/custom/aventura-natural-catarata.jpg" },
        { src: "img/custom/parrillada-dj-ronny-woods.jpg" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2026, 12, 15), format: 'D'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // n8n Forms Start
  // --------------------------------------------- //
  var n8nWebhooks = window.AXIO_N8N_WEBHOOKS || {};

  function getFormPayload($form) {
    var payload = {
      source_site: 'axio.wstudio3d.com',
      page_url: window.location.href,
      submitted_at: new Date().toISOString()
    };

    $.each($form.serializeArray(), function(_, field) {
      payload[field.name] = field.value;
    });

    return payload;
  }

  function showFormState($scope, $form, successSelector, errorSelector, isSuccess) {
    var selector = isSuccess ? successSelector : errorSelector;

    $scope.find('.reply-group').removeClass('is-visible');
    $form.addClass('is-hidden');
    $scope.find(selector).addClass('is-visible');

    setTimeout(function() {
      $scope.find(selector).removeClass('is-visible');
      $form.delay(300).removeClass('is-hidden');
      if (isSuccess) {
        $form.trigger('reset');
      }
    }, 5000);
  }

  function postFormToN8n(event, options) {
    event.preventDefault();

    var $form = $(event.currentTarget);
    var webhookUrl = n8nWebhooks[options.webhookKey];

    if (!webhookUrl) {
      console.warn('Missing n8n webhook URL for form:', options.webhookKey);
      showFormState(options.$scope, $form, options.successSelector, options.errorSelector, false);
      return false;
    }

    $.ajax({
      type: 'POST',
      url: webhookUrl,
      data: JSON.stringify(getFormPayload($form)),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done(function() {
      showFormState(options.$scope, $form, options.successSelector, options.errorSelector, true);
    }).fail(function() {
      showFormState(options.$scope, $form, options.successSelector, options.errorSelector, false);
    });

    return false;
  }

  $('#notify-form').on('submit', function(event) {
    return postFormToN8n(event, {
      webhookKey: 'subscription',
      $scope: $('.notify'),
      successSelector: '.subscription-ok',
      errorSelector: '.subscription-error'
    });
  });

  $('#stayintouch-form').on('submit', function(event) {
    return postFormToN8n(event, {
      webhookKey: 'stayintouch',
      $scope: $('.stayintouch'),
      successSelector: '.stayintouch-ok',
      errorSelector: '.stayintouch-error'
    });
  });

  $('#contact-form').on('submit', function(event) {
    return postFormToN8n(event, {
      webhookKey: 'contact',
      $scope: $('.contact'),
      successSelector: '.contact-ok',
      errorSelector: '.contact-error'
    });
  });
  // --------------------------------------------- //
  // n8n Forms End
  // --------------------------------------------- //

});
