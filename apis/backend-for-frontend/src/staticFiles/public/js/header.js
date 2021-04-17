// User Actions Dropdown

function HandleUserActions() {
  const dropdown = document.querySelector('.dropdown');
  const dropdown__menu = dropdown.querySelector('.dropdown .dropdown__menu');

  if (dropdown.classList.contains('open')) {
    dropdown__menu.style['display'] = 'none';
  } else {
    dropdown__menu.style['display'] = 'block';
  }

  dropdown.classList.toggle('open');
}

// close user actions dropdown when clicked outside
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');

  const isClickInside = dropdown.contains(event.target);

  if (!isClickInside) {
    const dropdown__menu = dropdown.querySelector('.dropdown .dropdown__menu');
    dropdown__menu.style['display'] = 'none';
    dropdown.classList.remove('open');
  }
});

// Search

// activate search
document.querySelector('.search__inactive__input').addEventListener('focus', function (event) {
  document.querySelector('.search__active').classList.add('active');
  document.querySelector('.search__active__input').focus();
});

// deactivate search on cancel click
document.querySelector('.search__active .cancel').addEventListener('click', function (event) {
  document.querySelector('.search__active').classList.remove('active');
  document.querySelector('.search__active__input').value = '';
});

// deactivate search on ESC
document.onkeydown = function (event) {
  event = event || window.event;
  let isEscape = false;

  if ('key' in event) {
    isEscape = event.key == 'Escape';
  } else {
    isEscape = event.keyCode == 27;
  }

  if (isEscape) {
    document.querySelector('.search__active').classList.remove('active');
    document.querySelector('.search__active__input').value = '';
  }
};

function HandleSearchForm() {
  const value = document.querySelector('.search__active__input').value;
  console.log('input: ', value);
}
