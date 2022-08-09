const dark = document.querySelector('.dark');
const night = document.querySelector('.night');
const light = document.querySelector('.light');
const sidabar = document.querySelector('.sidebar');
const activeListItem = document.querySelector('.list-item.active');

dark.addEventListener('click', () => {
  sidabar.className = 'sidebar';
  activeListItem = 'list-item active';
});

night.addEventListener('click', () => {
  sidabar.className = 'sidebar night';
  activeListItem = 'list-item active night';
});

light.addEventListener('click', () => {
  sidabar.className = 'sidebar light';
  activeListItem = 'list-item active light';
});
