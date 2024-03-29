$(document).ready(function () {

// ===================================================
//                    HOME PAGE
// ===================================================

// ================ HEADER ANIMATION ================

var delayTouch = $(".touch"),
    allName = $(".allName"),
    jobTitle = $(".jobTitle");

TweenMax.from(delayTouch, 0.5, {autoAlpha: 0, ease:Power1.easeOut, delay: 0.3})
TweenMax.from(allName, 0.5, {autoAlpha: 0, ease:Power1.easeOut, delay: 0.8})
TweenMax.from(jobTitle, 0.5, {autoAlpha: 0, ease:Power1.easeOut, delay: 1.2})

// Init ScrollMagic.
var controller = new ScrollMagic.Controller();

// Pin name.
var pinNameScene = new ScrollMagic.Scene({
  triggerElement: '#text-hero',
  triggerHook: 0,
  duration: '30%'
})
.setPin('#text-hero', {pushFollowers: false})
.addTo(controller)

// Pin name again.
var pinNameScene2 = new ScrollMagic.Scene({
  triggerElement: '#about',
  triggerHook: 0.7
})
.setPin('#text-hero', {pushFollowers: false})
.addTo(controller)

// Loop through each title.
$('.fade-in').each(function() {

  // Build a tween.
  var tweenHomePage = TweenMax.from($(this), 0.5, {autoAlpha: 0, y: "+=30", ease:Power1.easeIn});

  // Build scene
  var pageTitlesScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.8,
    reverse: false
  })
  .setTween(tweenHomePage)
  // .addIndicators({
  //   name: "fade scene",
  //   colorTrigger: "black",
  //   colorStart: "black", 
  //   colorEnd: "black"
  // })
  .addTo(controller)
});

// ===================================================
//                  PAGE HEADER ANIMATION
// ===================================================

var header = $("#content-header"),
    titleHeader = $("#header-title");

TweenMax.from(header, 0.8, {autoAlpha: 0, y: -400, ease:Power1.easeOut, delay: 0.3})
TweenMax.from(titleHeader, 0.9, {autoAplha: 0, y: -200, delay: 0.5, ease:Power1.easeOut, delay: 0.3})

// ===================================================
//                  PROJECTS PAGE
// ===================================================

// ================ CARD ANIMATION ================

$('.fade-in-cards').each(function() {

  // Build a tween.
  var tweenProjectCards = TweenMax.from($(this), 0.2, {autoAlpha: 0, y: "+=30", ease:Power1.easeIn, delay: 0.2});

  var cardsAnimation = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7,
    reverse: false
  })
  .setTween(tweenProjectCards)
  .addTo(controller)

})

// ===================================================
//                  ABOUT PAGE
// ===================================================

var inspirationTitle = $(".description-title"); 
var inspirationText = $(".description");

TweenMax.from(inspirationTitle, 1.5, {autoAlpha: 0, x: -30, ease:Power1.easeOut, delay: 1})
TweenMax.from(inspirationText, 1.5, {autoAlpha: 0, x: 30, ease:Power1.easeOut, delay: 1})

// ===================================================
//                   HAMBURGER MENU
// ===================================================

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

});


// “Experience is not what happens to a man; it is what a man does with what happens to him.”
// ― Aldous Huxley

// “And, when you want something, all the universe conspires in helping you to achieve it.”
// ― Paulo Coelho, The Alchemist

// “It's the possibility of having a dream come true that makes life interesting.”
// ― Paulo Coelho, The Alchemist

// “When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”
// ― Paulo Coelho, The Alchemist

      //  <h2>“And, when you want something, all the universe conspires</h2>
      //   <h2>in helping you to achieve it.”</h2>
      //   <h3>- Paulo Coelho, The Alchemist</h3>