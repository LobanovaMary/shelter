import burgerMenu from './modules/burger-menu.js';
import modalWindow from './modules/modal-window.js';
import renderCard from './modules/render-cards.js';
import pagination from './modules/pagination.js';

const init = () => {
  renderCard();
  burgerMenu();
  window.onload = modalWindow();
  pagination();
};
init();
