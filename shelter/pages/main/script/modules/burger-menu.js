function burgerMenu() {
  const burger = document.querySelector('.header__burger-menu');
  const nav = document.querySelector('.header__nav');
  const list = document.querySelector('.header__nav-list');
  const item = document.querySelectorAll('.header__nav-link');
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const overlay = document.querySelector('.overlay-burger');

  const logo = document.querySelector('.logo');

  const activate = () => {
    !header.style.position
      ? (header.style.position = 'static')
      : (header.style.position = '');

    burger.classList.toggle('header__burger-menu--active');
    nav.classList.toggle('header__nav--active');
    logo.classList.toggle('logo-hide');
    logo.classList.toggle('burger-logo');

    if (list.classList.contains('header__nav-list--active'))
      setTimeout(() => list.classList.toggle('header__nav-list--active'), 600);

    overlay.classList.toggle('overlay--hidden');
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    overlay.style.width = `${window.innerWidth}px`;
    // overlay.style.height = `${window.innerHeight}px`;

    list.classList.toggle('header__nav-list--active');
    body.classList.toggle('hidden');
  };

  const delateOverlay = () => {
    if (window.innerWidth >= 768) {
      if (burger.classList.contains('header__burger-menu--active')) activate();
    }
  };

  [overlay, burger, ...item].forEach((item) => {
    item.addEventListener('click', activate);
  });

  window.onresize = delateOverlay;
}

export default burgerMenu;
