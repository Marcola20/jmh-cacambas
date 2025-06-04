tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        azulescuro: '#042B4A'
      },
      maxWidth: {
        container: '1200px'
      },
      padding: {
        'container': '1.5rem'
      }
    }
  }
}

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  spaceBetween: 30,
  centeredSlides: false,
  slidesPerView: 2,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
  }
});
