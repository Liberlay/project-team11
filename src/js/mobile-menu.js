const menuOpenBtn = document.querySelector('.mobile-open-btn');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const menuContainer = document.querySelector('.backdrop');

menuOpenBtn.addEventListener('click', () => {
  menuContainer.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  menuContainer.classList.remove('is-open');
});
