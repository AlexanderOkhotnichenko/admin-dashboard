export function toggleClass(elem, className) {
  elem.classList[(elem.classList.contains(className)) ? 'remove' : 'add'](className);
}