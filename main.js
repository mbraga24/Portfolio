$(".navigationBar a, #sectionScroll a").on("click", function(e) {
  if(this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
})


// “Experience is not what happens to a man; it is what a man does with what happens to him.”
// ― Aldous Huxley

// “And, when you want something, all the universe conspires in helping you to achieve it.”
// ― Paulo Coelho, The Alchemist

// “It's the possibility of having a dream come true that makes life interesting.”
// ― Paulo Coelho, The Alchemist

// “When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”
// ― Paulo Coelho, The Alchemist