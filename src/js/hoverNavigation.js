export function hoverNavigation() {
  const list = document.querySelectorAll('.navigation-item');

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove('hover-active');
      this.classList.add('hover-active');
    });
  }

  list.forEach((item) => {
    item.addEventListener('mouseenter', activeLink);
  });
}