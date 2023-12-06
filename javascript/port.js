document.addEventListener('DOMContentLoaded', function () {
    var options = {
      strings: ['Welcome to My Portfolio!', 'I am an aspiring Web Developer.', 'Let me showcase my skills.'],
      typeSpeed: 50,  // typing speed in milliseconds
      backSpeed: 25,  // backspacing speed in milliseconds
      loop: true      // loop the animation
    };

    var typed = new Typed('#typed-output', options);
  });