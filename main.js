$(document).ready(function () {

// ===================================================
// HOME PAGE
// ===================================================

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
    var tween = TweenMax.from($(this), 0.5, {autoAlpha: 0, y: "+=30", ease:Power1.easeIn});

    // Build scene
    var pageTitlesScene = new ScrollMagic.Scene({
      triggerElement: this,
      // duration: "100%",
      triggerHook: 0.8
      // reverse: false
    })
    .setTween(tween)
    .addIndicators({
      name: "fade scene",
      colorTrigger: "black",
      colorStart: "black", 
      colorEnd: "black"
      // indent: 100
    })
    .addTo(controller)
  });

// ===================================================
// PROJECTS PAGE
// ===================================================
var header = $("#content-header"),
    titleHeader = $("#header-title"),
    timeLine = new TimelineLite(),
    firstRow = $('.firstRow');
    // console.log(firstRow)

// Header animation.

TweenMax.from(header, 1, {autoAlpha: 0, y: -400, ease:Power1.easeOut})
TweenMax.from(titleHeader, 1, {autoAplha: 0, y: -200, delay: 0.5, ease:Power1.easeOut})

// Cards animation.

timeLine
  .staggerFromTo(firstRow, 0.5, {autoAlpha: 0, y: 100},
    {autoAlpha: 1, y: -300, ease:Power1.easeIn}, 0.3
  );

var secondRow = new ScrollMagic.Scene({
  triggerElement: '.card-4',
  triggerHook: 1
})
.setTween(
  TweenMax.from('.card4', 1,  {autoAlpha: 0, y: 100, ease:Power1.easeIn}, 0.4)
  ).addTo(controller)


// ===================================================
// HAMBURGER MENU
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


// $("#home, #projects, #about, #resume").on("click", function(e) {
//   if(this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate({
//       scrollTop: $(hash).offset().top
//     }, 800);
//   }
// })