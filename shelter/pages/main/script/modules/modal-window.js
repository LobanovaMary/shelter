const modalWindow = () => {
  const petCards = document.querySelector('.pets__slider-content');
  const overlay = document.querySelector('.overlay-card');
  const body = document.querySelector('body');

  let activeModal = '';

  const showModal = (card) => {
    const id = card.closest('.pet-card').dataset.id;

    activeModal = document.getElementById(`${id}`);
    activeModal.classList.add('modal-window--active');
    overlay.classList.remove('overlay--hidden');
    overlay.style.width = `${window.innerWidth}px`;
    // overlay.style.height = `${window.innerHeight}px`;
    body.classList.toggle('hidden');
  };

  const closeModal = () => {
    activeModal.classList.remove('modal-window--active');
    activeModal = '';
    overlay.classList.add('overlay--hidden');
    body.classList.toggle('hidden');
  };

  petCards.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-window__close')) {
      closeModal();
      return;
    }
    showModal(e.target);
  });
  overlay.addEventListener('click', closeModal);
};

export default modalWindow;
