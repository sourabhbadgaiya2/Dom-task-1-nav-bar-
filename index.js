const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.style.height = '100%';
  ul.style.display = 'flex';
  menu.style.display = 'none';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  nav.style.height = '10%';
  ul.style.display = 'none';
  menu.style.display = 'block';
  close.style.display = 'none';
});
