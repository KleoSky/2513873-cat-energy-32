let mainNav = document.querySelector('.main-navigation');
let burger = document.querySelector('.button-burger');

burger.addEventListener('click', function () {
  if (mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');
    burger.classList.remove('button-burger--closed');
    burger.classList.add('button-burger--opened');
  } else {
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove('main-navigation--opened');
    burger.classList.add('button-burger--closed');
    burger.classList.remove('button-burger--opened');
  }
});
