let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;
  const interval = 3000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function autoSlide() {
    nextSlide();
  }
 
  setInterval(autoSlide, interval);

  showSlide(currentSlide);
