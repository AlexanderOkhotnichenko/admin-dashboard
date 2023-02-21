export function countUp() {
  const formatter = new Intl.NumberFormat('en-US');
  let elements = document.querySelectorAll('#count-up-number');
  let time = 5;

  elements.forEach((element) => {
    element.textContent = '0';

    const updateCount = () => {
      const number = parseInt(element.getAttribute('data-value'));
      const value = +element.textContent;

      const increment = number / 200;
      if (value < number) {
        element.textContent = formatter.format(`${Math.ceil(value + increment)}`);
        setTimeout(updateCount, time);
      }
    }
    updateCount();
  })
}