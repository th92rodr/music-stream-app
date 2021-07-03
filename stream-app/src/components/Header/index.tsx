import React, { createRef, useState } from 'react';

// styles
import './styles.scss';

// icons
import { ReactComponent as IconChevronDown } from '../../assets/icons/icon-chevron-down.svg';

export const Header: React.FC = () => {
  const dropdownRef = createRef<HTMLDivElement>();
  const dropdownMenuRef = createRef<HTMLUListElement>();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function ToggleDropdownMenu() {
    if (dropdownRef.current && dropdownMenuRef.current) {
      if (dropdownRef.current.classList.contains('open')) {
        dropdownMenuRef.current.style['display'] = 'none';
      } else {
        dropdownMenuRef.current.style['display'] = 'block';
      }

      dropdownRef.current.classList.toggle('open');
    }
  }

  // close dropdown menu when there is a click outside of it
  document.addEventListener('click', function (event) {
    if (event.target && dropdownRef.current && dropdownMenuRef.current) {
      const isClickInside = dropdownRef.current.contains(event.target as Node);

      if (!isClickInside) {
        dropdownMenuRef.current.style['display'] = 'none';
        dropdownRef.current.classList.remove('open');
      }
    }
  });

  return (
    <header className='header'>
      <div className='search'>
        <div className='search__inactive'>
          <input className='search__inactive__input' type='text' placeholder='Search' />
        </div>
      </div>

      {isLoggedIn ? (
        <div className='user'>
          <div className='user__info'>
            <span className='user__info__img'>
              <img src='' alt='' loading='lazy' />
            </span>
            <span className='user__info__name'>John Doe</span>
          </div>

          <div className='user__actions'>
            <div className='dropdown' ref={dropdownRef}>
              <button onClick={ToggleDropdownMenu}>
                <IconChevronDown />
              </button>
              <ul className='dropdown__menu' ref={dropdownMenuRef}>
                <li>
                  <a href='#'>Account</a>
                </li>
                <li>
                  <a href='#'>Settings</a>
                </li>
                <li>
                  <a href='#'>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className='sign__in__button'>
          <button>Sign In</button>
        </div>
      )}
    </header>
  );
};
