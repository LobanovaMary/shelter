import pets from './pets.js';

const renderCard = () => {
  const petsSlider = document.querySelector('.pets__card-container');

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const renderLarge = () => {
    petsSlider.innerHTML = '';
    let html = '';
    let modals = '';
    let id = 0;
    for (let i = 0; i < 6; i++) {
      shuffle(pets);

      let cards = pets
        .map((item, index) => {
          id += 1;
          pets[index].id = id;
          return `
        <div class="pet-card__wrapper">
        <div class="pet-card"  data-id="${item.breed}${item.id}">
       
        <img
          src="${item.img}"
          alt="${item.breed}"
          class="pet-card__img"
        />
        
        <h3 class="pet-card__title">${item.breed}</h3>
        <button class="btn-secondary btn-secondary--not-fill">
          Learn more
        </button>
      </div></div>
      `;
        })
        .join('');

      modals += pets
        .map((item) => {
          return `
      <div class="modal-window"  id="${item.breed}${item.id}">
      <img
       src="${item.img}"
        alt="${item.breed}"
       class="modal-window__img"
       />
       <div class="modal-window__wrapper">
       <div class="modal-window__close" ></div>
        <div class="modal-window__title-wrapper">
        <h3 class="modal-window__title">${item.breed}</h3>
        <h4 class="modal-window__sub-title">${item.breed} - ${item.type}</h4>
         </div>
         <p class="modal-window__description">
        ${item.description}
        </p>
        <ul class="modal-window__list">
        <li class="modal-window__item"><b> Age:</b> ${item.age}</li>
       <li class="modal-window__item">
        <b>Inoculations:</b> ${item.inoculations}
        </li>
        <li class="modal-window__item"><b>Diseases:</b> ${item.diseases}</li>
         <li class="modal-window__item"><b>Parasites:</b> ${item.parasites}</li>
        </ul>
        </div>
        </div>
        `;
        })
        .join('');

      html += `<div class="pet-card__page" data-page = ${i + 1}>
         ${cards}
       
         </div>
         `;
    }

    petsSlider.insertAdjacentHTML('afterbegin', html);
    petsSlider.insertAdjacentHTML('afterend', modals);
  };

  const renderMedium = () => {
    petsSlider.innerHTML = '';
    let html = '';
    let modals = '';
    let id = 0;
    for (let i = 0; i < 8; i++) {
      shuffle(pets);

      let cards = pets
        .map((item, index) => {
          id += 1;
          pets[index].id = id;
          return `
      <div class="pet-card__wrapper">
      <div class="pet-card"  data-id="${item.breed}${item.id}">
     
      <img
        src="${item.img}"
        alt="${item.breed}"
        class="pet-card__img"
      />
      
      <h3 class="pet-card__title">${item.breed}</h3>
      <button class="btn-secondary btn-secondary--not-fill">
        Learn more
      </button>
    </div>
      </div>`;
        })
        .splice(0, 6)
        .join('');

      modals += pets
        .map((item) => {
          return `
      <div class="modal-window"  id="${item.breed}${item.id}">
      <img
       src="${item.img}"
        alt="${item.breed}"
       class="modal-window__img"
       />
       <div class="modal-window__wrapper">
       <div class="modal-window__close" ></div>
        <div class="modal-window__title-wrapper">
        <h3 class="modal-window__title">${item.breed}</h3>
        <h4 class="modal-window__sub-title">${item.breed} - ${item.type}</h4>
         </div>
         <p class="modal-window__description">
        ${item.description}
        </p>
        <ul class="modal-window__list">
        <li class="modal-window__item"><b> Age:</b> ${item.age}</li>
       <li class="modal-window__item">
        <b>Inoculations:</b> ${item.inoculations}
        </li>
        <li class="modal-window__item"><b>Diseases:</b> ${item.diseases}</li>
         <li class="modal-window__item"><b>Parasites:</b> ${item.parasites}</li>
        </ul>
        </div>
        </div>
        `;
        })
        .splice(0, 6)
        .join('');

      html += `<div class="pet-card__page" data-page = ${i + 1}>
      ${cards}
      </div>`;
    }
    petsSlider.insertAdjacentHTML('afterbegin', html);
    petsSlider.insertAdjacentHTML('afterend', modals);
  };

  const renderSmall = () => {
    petsSlider.innerHTML = '';
    let html = '';
    let modals = '';
    let id = 0;
    for (let i = 0; i < 16; i++) {
      shuffle(pets);

      let cards = pets
        .map((item, index) => {
          id += 1;
          pets[index].id = id;
          return `
      <div class="pet-card__wrapper">
      <div class="pet-card"  data-id="${item.breed}${id}">
     
      <img
        src="${item.img}"
        alt="${item.breed}"
        class="pet-card__img"
      />
      
      <h3 class="pet-card__title">${item.breed}</h3>
      <button class="btn-secondary btn-secondary--not-fill">
        Learn more
      </button>
    </div>
      </div>`;
        })
        .splice(0, 3)
        .join('');

      modals += pets
        .map((item) => {
          return `
      <div class="modal-window"  id="${item.breed}${item.id}">
      <img
       src="${item.img}"
        alt="${item.breed}"
       class="modal-window__img"
       />
       <div class="modal-window__wrapper">
       <div class="modal-window__close" ></div>
        <div class="modal-window__title-wrapper">
        <h3 class="modal-window__title">${item.breed}</h3>
        <h4 class="modal-window__sub-title">${item.breed} - ${item.type}</h4>
         </div>
         <p class="modal-window__description">
        ${item.description}
        </p>
        <ul class="modal-window__list">
        <li class="modal-window__item"><b> Age:</b> ${item.age}</li>
       <li class="modal-window__item">
        <b>Inoculations:</b> ${item.inoculations}
        </li>
        <li class="modal-window__item"><b>Diseases:</b> ${item.diseases}</li>
         <li class="modal-window__item"><b>Parasites:</b> ${item.parasites}</li>
        </ul>
        </div>
        </div>
        `;
        })
        .splice(0, 3)
        .join('');

      html += `<div class="pet-card__page" data-page = ${i + 1}>
      ${cards}
      </div>`;
    }
    petsSlider.insertAdjacentHTML('afterbegin', html);
    petsSlider.insertAdjacentHTML('afterend', modals);
  };

  const renderCards = () => {
    if (window.innerWidth >= 1279) {
      renderLarge();
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1279) {
      renderMedium();
    }
    if (window.innerWidth < 768) {
      renderSmall();
    }
  };
  renderCards();

  window.onresize = renderCards;
};

export default renderCard;
