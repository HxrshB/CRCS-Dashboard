const button = document.querySelector('.dropdown-button');
const menu = document.querySelector('.dropdown-menu');

button.addEventListener('click', () => {
  menu.classList.toggle('show');
});
