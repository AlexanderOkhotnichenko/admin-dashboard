import { toggleClass } from "./toggleClass";

export function toggleButtonNavigation() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const buttonToggle = document.querySelector('.userbar-button');

  buttonToggle.addEventListener("click", function () {
    toggleClass(buttonToggle, 'not-active');
    toggleClass(buttonToggle, 'active');

    header.classList.toggle('active');
    main.classList.toggle('active')
  });
}