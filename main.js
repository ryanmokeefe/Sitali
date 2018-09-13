var windowHeight = $(window).height();


// Snippet - Chris Coyier
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });


// Scroll Down

$(window).scroll(function() {
    if ($(window).scrollTop() < 500)
    {
        $(".scrollDown").addClass("show");
    } else 
    {
        $(".scrollDown").removeClass("show");
    }
});

$(".scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offsetHeight
      }, 500);
});


// Scroll To Top

$(window).scroll(function() {
    if ($(window).scrollTop() <= 700)
    {
        $(".scrollToTop").removeClass("show");
    } else 
    {
        $(".scrollToTop").addClass("show");
    }
});

$(".scrollToTop").click(function() {
    $('html, body').animate({
        scrollTop: 0
      }, 500);
});


// Smooth Fade-out Video 

var h1 = $("h1");
var color = "rgba(0, 0, 0, .9)";

$(window).scroll(function() {
  var decimal = $(window).scrollTop() / windowHeight;
  color = "rgb(0, 0, 0, " + decimal + ")";
  h1.css("background-color", color);
});
  

// Parallax Effect BG 

// var  = $("h1");
// var color = "rgba(0, 0, 0, .9)";

// $(window).scroll(function() {
//   var decimal = $(window).scrollTop() / windowHeight;
//   color = "rgb(0, 0, 0, " + decimal + ")";
//   h1.css("background-color", color);
// });
  


// Hide Video on Scroll

$(window).scroll(function() {
  if ($(window).scrollTop() > windowHeight)
  {
      $(".videoBg").addClass("display-none");
  } else 
  {
      $(".videoBg").removeClass("display-none");
  }
});


// Nav Sticky
// var nav = $(".title-bar");
// var navTop = nav.offset().top;
// $(window).scroll(function() {
//   if ($(window).scrollTop() >= navTop)
//   {
//     nav.addClass("stick");
//   } else {
//     nav.removeClass("stick");
//   }
// })

// var links = $(".pageLinks");
// var linkTop = links.offset().top;
// $(window).scroll(function() {
//   if ($(window).scrollTop() >= linkTop)
//   {
//     links.addClass("stick");
//   } else {
//     links.removeClass("stick");
//   }
// })
