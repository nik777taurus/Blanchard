let dropdownButtons = document.querySelectorAll('.add-panel__button');
let dropdownLists = document.querySelectorAll('.add-panel__sub-wrapper');
let dropdownWrappers = document.querySelectorAll('.add-panel__main-item');
let dropdownPics = document.querySelectorAll('.add-panel__button-pic');
let closeIndex = null;

dropdownButtons.forEach(
  (button) => {
    button.addEventListener('click', () => {
      let existance = [];
      let openIndex;

      for (let wrapper of dropdownWrappers) {
        if (wrapper.contains(button)) {
          existance.push(true);
        } else existance.push(false);
      }

      openIndex = existance.indexOf(true);

      checkingEqualIndex(openIndex, closeIndex);

      closeIndex = openIndex;
    })
  }
)

function closingList(closeIndex) {
  dropdownPics[closeIndex].classList.remove('add-panel__button-pic--active');

  dropdownLists[closeIndex].classList.remove('add-panel__sub-wrapper--active');
}

function openingList(openIndex) {
  dropdownPics[openIndex].classList.toggle('add-panel__button-pic--active');

  dropdownLists[openIndex].classList.toggle('add-panel__sub-wrapper--active');
}

function checkingEqualIndex(openIndex, closeIndex) {
  if (closeIndex !== openIndex) {
    if (closeIndex !== null) {
      closingList(closeIndex);

      openingList(openIndex);
    } else {
      openingList(openIndex);
    }
  } else {
    openingList(openIndex);
  }
}
