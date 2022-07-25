import pets from './pets.js';

const renderCard = () => {
  const petsSlider = document.querySelector('.pets__slider-content');

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffle(pets);

  const cards = pets.map((item, index) => {
    return `
    <div class="pet-card__wrapper">
    <div class="pet-card"  data-id="${item.breed}${index}">
   
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
  <div class="modal-window"  id="${item.breed}${index}">
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
    </div>`;
  });

  let extraItem = `
  <div class="pet-card__wrapper">
  <div class="pet-card"  data-id="${pets[3].breed}8">
 
  <img
    src="${pets[3].img}"
    alt="${pets[3].breed}"
    class="pet-card__img"
  />
  
  <h3 class="pet-card__title">${pets[3].breed}</h3>
  <button class="btn-secondary btn-secondary--not-fill">
    Learn more
  </button>
</div>
<div class="modal-window"  id="${pets[3].breed}8">
<img
 src="${pets[3].img}"
  alt="${pets[3].breed}"
 class="modal-window__img"
 />
 <div class="modal-window__wrapper">
 <div class="modal-window__close" ></div>
  <div class="modal-window__title-wrapper">
  <h3 class="modal-window__title">${pets[3].breed}</h3>
  <h4 class="modal-window__sub-title">${pets[3].breed} - ${pets[3].type}</h4>
   </div>
   <p class="modal-window__description">
  ${pets[3].description}
  </p>
  <ul class="modal-window__list">
  <li class="modal-window__item"><b> Age:</b>${pets[3].age}</li>
 <li class="modal-window__item">
  <b>Inoculations:</b>${pets[3].inoculations}
  </li>
  <li class="modal-window__item"><b>Diseases:</b>${pets[3].diseases}</li>
   <li class="modal-window__item"><b>Parasites:</b>${pets[3].parasites}</li>
  </ul>
  </div>
  </div>
  </div>`;

  petsSlider.insertAdjacentHTML(
    'afterbegin',
    `${cards.join(' ')} ${extraItem}`
  );
};

export default renderCard;
