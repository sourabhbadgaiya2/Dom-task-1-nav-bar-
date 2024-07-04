const button = document.querySelector('button');
const h2 = document.querySelector('h2');
var check = 0;

button.addEventListener('click', () => {
  if (check == 0) {
    h2.innerHTML = 'Friends';
    h2.style.color = 'green';
    button.innerHTML = 'UnFollow';
    button.style.backgroundColor = 'green';
    check = 1;
  } else {
    h2.innerHTML = 'Stranger';
    h2.style.color = 'tomato';
    button.innerHTML = 'Follow';
    button.style.backgroundColor = 'tomato';
    check = 0;
  }
});
