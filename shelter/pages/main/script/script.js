import burgerMenu from './modules/burger-menu.js';
import modalWindow from './modules/modal-window.js';
import renderCard from './modules/render-cards.js';
import slider from './modules/slider.js';

const init = () => {
  renderCard();
  burgerMenu();
  window.onload = modalWindow();
  slider();
};
init();
