document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetSection = document.querySelector('#home');
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Enable smooth scrolling
  });
});

document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetSection = document.querySelector('#about');
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Enable smooth scrolling
  });
});

document.querySelector('a[href="#skills"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetSection = document.querySelector('#skills');
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Enable smooth scrolling
  });
});

document.querySelector('a[href="#projects"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetSection = document.querySelector('#projects');
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Enable smooth scrolling
  });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor behavior

  const targetSection = document.querySelector('#contact');
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth' // Enable smooth scrolling
  });
});
/*----------------------------------toggle icon navbar-------------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
/*------------------------------scroll active design------------------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top>= offfset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');
        });
      };
     });

     /*--------------------------------------sticky navbar-----------------------*/
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrolly>100);
    /*-----------------------------remove toggle icon when click navbar link (scroll)--------------------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*-----------------------scroll reveal-------------*/
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
  ScrollReveal().reveal('.home-img,  .skills-container, .projects-box, .contact form', { origin:'bottom'});
  ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
  ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});