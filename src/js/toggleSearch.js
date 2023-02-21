export function toggleSearch() {
  const mobileScreen = window.matchMedia('(max-width: 590px)');
  const search = document.querySelector('.userbar-search');

  if (mobileScreen.matches) {
    search.addEventListener('click', (event) => {
      const currentTarget = event.target;
      const inputTarget = currentTarget.classList.contains('userbar-search-input');

      if (inputTarget) return
      search.classList.toggle('active');
    })
  }
}