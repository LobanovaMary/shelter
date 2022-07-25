const modalWindow = () => {
  const petCards = document.querySelector('.pets__card-container');
  const overlay = document.querySelector('.overlay-card');
  const body = document.querySelector('body');

  let activeModal = '';

  const showModal = (card) => {
    const id = card.closest('.pet-card').dataset.id;
    activeModal = document.getElementById(`${id}`);
    activeModal.classList.add('modal-window--active');
    overlay.style.width = `${window.innerWidth}px`;
    overlay.classList.remove('overlay--hidden');
    body.classList.toggle('hidden');

    activeModal
      .querySelector('.modal-window__close')
      .addEventListener('click', closeModal);
  };

  const closeModal = () => {
    activeModal.classList.remove('modal-window--active');
    activeModal = '';
    overlay.classList.add('overlay--hidden');
    body.classList.toggle('hidden');
  };

  petCards.addEventListener('click', (e) => {
    showModal(e.target);
  });

  overlay.addEventListener('click', closeModal);
};

export default modalWindow;
