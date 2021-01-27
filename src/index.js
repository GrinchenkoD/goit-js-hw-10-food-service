import './styles.css';
import menu from './data-base/menu.json';
import dish from './templates/dish.hbs';

const menuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

menuRef.insertAdjacentHTML('beforeend', dish(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

checkboxRef.addEventListener('change', () => {
  if (checkboxRef.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    bodyRef.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});

const value = localStorage.getItem('theme');
if (value === Theme.DARK) {
  checkboxRef.checked = true;
  bodyRef.classList.add('dark-theme');
}
