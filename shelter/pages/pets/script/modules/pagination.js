const pagination = () => {
  const btnRight = document.querySelector('.pagination__btn-right');
  const btnRightAll = document.querySelector('.pagination__btn-right-all');
  const btnLeft = document.querySelector('.pagination__btn-left');
  const btnLeftAll = document.querySelector('.pagination__btn-left-all');
  const slides = document.querySelectorAll('.pet-card__page');
  const countSlide = document.querySelector('.counter');

  const maxSlides = slides.length - 1;
  let curSlide = 0;

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
    countSlide.textContent = `${Number(slide) + 1}`;
  };

  goToSlide(0);

  const blockLeftBtn = () => {
    btnLeftAll.classList.add('pagination__controls--not-active');
    btnLeft.classList.add('pagination__controls--not-active');
  };
  const blockRightBtn = () => {
    btnRightAll.classList.add('pagination__controls--not-active');
    btnRight.classList.add('pagination__controls--not-active');
  };
  const unblockLeftBtn = () => {
    btnLeftAll.classList.add('pagination__controls--active');
    btnLeft.classList.add('pagination__controls--active');
    btnLeftAll.classList.remove('pagination__controls--not-active');
    btnLeft.classList.remove('pagination__controls--not-active');
  };
  const unblockRightBtn = () => {
    btnRightAll.classList.add('pagination__controls--active');
    btnRight.classList.add('pagination__controls--active');
    btnRightAll.classList.remove('pagination__controls--not-active');
    btnRight.classList.remove('pagination__controls--not-active');
  };

  const nextSlide = () => {
    if (curSlide === maxSlides) {
      blockRightBtn();
    } else {
      unblockLeftBtn();
      if (curSlide === maxSlides - 1) blockRightBtn();

      curSlide++;
    }
    goToSlide(curSlide);
  };
  const prevSlide = () => {
    if (curSlide === 0) {
      blockLeftBtn();
    } else {
      unblockRightBtn();
      if (curSlide === 1) blockLeftBtn();

      curSlide--;
    }
    goToSlide(curSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  btnRightAll.addEventListener('click', () => {
    goToSlide(maxSlides);
    unblockLeftBtn();
    blockRightBtn();
    curSlide = maxSlides;
  });
  btnLeftAll.addEventListener('click', () => {
    goToSlide(0);
    blockLeftBtn();
    unblockRightBtn();
    curSlide = 0;
  });
};

export default pagination;
