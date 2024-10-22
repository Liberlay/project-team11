const slider = document.querySelector('.reviews-list');
const slides = document.querySelectorAll('.reviews-item');
const dots = document.querySelectorAll('.slider-dot-container');
const activeDots = document.querySelectorAll('.slider-dot-active');

let current = 0;
let cyclingInterval;

const setCurrSlide = i => {
  slider.style.transform =
    window.innerWidth < 768
      ? `translateX(-${i * 100}%)`
      : `translateX(calc(-${i * 50}% - ${i * 9}px))`;
  activeDots[current].classList.remove('is-active');
  current = i;
  activeDots[current].classList.add('is-active');
};

const startCycling = () => {
  clearInterval(cyclingInterval);

  cyclingInterval = setInterval(() => {
    const totalFrames =
      window.innerWidth < 768 ? 3 : window.innerWidth < 1280 ? 2 : 1;
    if (current + 1 < totalFrames) {
      setCurrSlide(current + 1);
    } else {
      setCurrSlide(0);
    }
  }, 3000);
};

startCycling();

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    setCurrSlide(i);
    startCycling();
  });
});

window.addEventListener('resize', () => setCurrSlide(0));
