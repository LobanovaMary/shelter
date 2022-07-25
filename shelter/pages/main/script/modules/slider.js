const slider = () => {
  const btnLeft = document.querySelector('.pets__slider-btn-left');
  const btnRight = document.querySelector('.pets__slider-btn-right');
  const carousel = document.querySelector('.pets__slider-content');
  const cards = document.querySelectorAll('.pet-card__wrapper');

  const moveLeft = () => {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
  };
  const moveRight = () => {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
  };

  const changeElementLeft = (times) => {
    for (let i = 0; i < times; i++) {
      let item = document.querySelector(
        '.pets__slider-content > .pet-card__wrapper:last-child'
      );
      carousel.prepend(item);
    }
  };

  const changeElementRight = (times) => {
    for (let i = 0; i < times; i++) {
      let item = document.querySelector(
        '.pets__slider-content > .pet-card__wrapper:first-child'
      );
      carousel.append(item);
    }
  };

  btnLeft.addEventListener('click', moveLeft);
  btnRight.addEventListener('click', moveRight);

  carousel.addEventListener('animationend', (animation) => {
    if (animation.animationName === 'move-left') {
      carousel.classList.remove('transition-left');
      changeElementLeft(3);
    }
    if (animation.animationName === 'move-right') {
      carousel.classList.remove('transition-right');
      changeElementRight(3);
    }

    if (animation.animationName === 'move-left-middle') {
      carousel.classList.remove('transition-left');
      changeElementLeft(2);
    }
    if (animation.animationName === 'move-right-middle') {
      carousel.classList.remove('transition-right');
      changeElementRight(2);
    }

    if (animation.animationName === 'move-left-small') {
      carousel.classList.remove('transition-left');
      changeElementLeft(1);
    }
    if (animation.animationName === 'move-right-small') {
      carousel.classList.remove('transition-right');
      changeElementRight(1);
    }

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
  });
};

export default slider;
