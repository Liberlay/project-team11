const menuOpenBtn = document.querySelector('.mobile-open-btn');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const menuContainer = document.querySelector('.backdrop');
const mobileMenuBtns = document.querySelectorAll('.mobile-menu-list-link');
const mobileShopNowBtn = document.querySelector('.menu-shop-now-btn');

menuOpenBtn.addEventListener('click', () => {
  menuContainer.classList.add('is-open');
});

menuCloseBtn.addEventListener('click', () => {
  menuContainer.classList.remove('is-open');
});

mobileMenuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuContainer.classList.remove('is-open');
  });
});

mobileShopNowBtn.addEventListener('click', () => {
  menuContainer.classList.remove('is-open');
});
