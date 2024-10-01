(function() {
  // Show Menu Toggle Button
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (nav && toggle) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle('show--menu');
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  // Remove Menu Mobile After Click on the Link
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(link => link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show--menu");
  }));

  // Scroll Sections Active Link
  const onScroll = () => {
    const sections = document.querySelectorAll('#nav-menu a');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((currLink) => {
      const val = currLink.getAttribute('href');
      const refElement = document.querySelector(val);
      if (refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos)) {
        document.querySelector('#nav-menu ul li a.active--link')?.classList.remove('active--link');
        currLink.classList.add('active--link');
      } else {
        currLink.classList.remove('active--link');
      }
    });
  };
  window.addEventListener('scroll', onScroll);

  // Change Background Header
  const scrollHeader = () => {
    const header = document.querySelector('.navbar'); // Ensure this selector matches your header class or ID
    header.classList.toggle('scroll--header', window.scrollY >= 200);
  };
  window.addEventListener("scroll", scrollHeader);

  // Show Scroll Top
  const scrollTop = () => {
    const scrollTopBtn = document.getElementById("scroll-top");
    scrollTopBtn.classList.toggle('show--scroll', window.scrollY >= 560);
  };
  window.addEventListener("scroll", scrollTop);

  // Mixitup Filter Portfolio
  const containerEl = document.querySelector('.portfolio__container');
  if (containerEl) {
    const mixer = mixitup(containerEl, {
      selectors: {
        target: '.portfolio__content'
      },
      animation: {
        duration: 400
      }
    });
  }

  // Link Active Portfolio
  const portfolioItems = document.querySelectorAll(".portfolio__item");
  portfolioItems.forEach(item => {
    item.addEventListener("click", (e) => {
      document.querySelector(".active--portfolio")?.classList.remove("active--portfolio");
      e.target.classList.add("active--portfolio");
    });
  });

  // Swiper Initialization
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // GSAP Animations
  gsap.from(".home__img", {opacity: 0, duration: 2, delay: 0.2, x: 60});
  gsap.from(".home__data", {opacity: 0, duration: 2, delay: 0.8, y: 25});
  gsap.from(".home__greeting, .home__name, .home__professional, .home__button", {
    opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: 0.2
  });
  gsap.from(".nav__logo, .nav__toggle", {
    opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: 0.2
  });
  gsap.from(".nav__item", {
    opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: 0.2
  });
  gsap.from(".home__social-icon", {
    opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: 0.2
  });

})();

// Filter Portfolio Items
document.querySelectorAll('.portfolio__filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.portfolio__item').forEach(item => {
      item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  document.body.classList.add('light-theme'); // Default to light-theme
}

themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
});



// Scroll to Timeline
document.querySelector('.about__button').addEventListener('click', () => {
  document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
});

// Car Animation
document.addEventListener("DOMContentLoaded", () => {
  const car = document.querySelector('.car');
  const path = document.querySelector('.path path');
  
  const pathLength = path.getTotalLength();
  car.style.setProperty('--pathLength', pathLength);
  
  car.animate([
    { offsetDistance: '0%' },
    { offsetDistance: '100%' }
  ], {
    duration: 15000, // Adjust duration as needed
    iterations: Infinity
  });
});


