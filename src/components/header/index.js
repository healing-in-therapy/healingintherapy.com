import { Link } from 'gatsby';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import * as styles from './style/header.module.scss';

const defaultProps = {
  siteTitle: '',
  transparent: false,
};

const propTypes = {
  siteTitle: string,
  transparent: bool,
};

let lastKnownScrollPosition = 0;
let ticking = false;

function Header(props) {
  function onScroll(event) {
    lastKnownScrollPosition = global.window.scrollY;

    if (ticking) {
      return;
    }

    global.window.requestAnimationFrame(() => {
      if (lastKnownScrollPosition > 60) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }

      ticking = false;
    });

    ticking = true;
  }

  const { siteTitle, transparent: initialTransparent } = props;

  const items = [
    {
      name: 'Individuals',
      to: '/individuals',
    },
    {
      name: 'Couples',
      to: '/couples',
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Contact',
      to: '/contact',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [transparent, setTransparent] = useState(initialTransparent);

  useEffect(() => {
    if (!initialTransparent) {
      return () => {};
    }

    global.window.addEventListener('scroll', onScroll);

    return () => {
      global.window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <header
      className={classNames({
        [styles.header]: true,
        [styles.headerOpen]: isOpen,
        [styles.headerTransparent]: transparent,
      })}
    >
      <nav className={styles.navbar}>
        <Link className={styles.logoLink} to="/">
          <svg className={styles.logo} viewBox="0 0 100 100">
            <g
              transform="matrix(1.1210762715387137,0,0,1.1210762715387137,-0.8968610305952416,-0.44843054870829724)"
              fill="currentColor"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M65.9,56.8c2-2.9,3.5-6.2,4.2-9.8c0.2-1.1-0.5-2.2-1.7-2.5c-1.1-0.2-2.2,0.5-2.5,1.7c-1.7,8.5-8.2,15-16.4,16.8    c-2.1-6.7-1.6-12.8,1.5-18.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,6.7-13.5,15.3-18.1c0,0-4,5-6.4,9.1c-2.4,4.1-4.2,8.4-4.2,8.4    c3.6-0.5,7.2-2.1,10.3-4.7c4.8-4,7.7-9.8,7.9-15.9c0-1-0.7-1.9-1.6-2.1c-3.2-0.7-6.7-0.4-9.9,0.7C55.6,11.5,46.8,1.6,46.4,1.1    c-0.4-0.4-1-0.7-1.6-0.7c-0.6,0-1.2,0.3-1.6,0.7c-1,1.1-24.1,27.3-24.2,41c0,5.6,1.8,10.7,4.8,14.9C9.4,60,0.8,65.7,0.8,72.6    c0,8.6,15.6,17.6,44.6,17.6c28.9,0,44.6-9.1,44.6-17.6C90,65.7,80.8,59.8,65.9,56.8z M56.3,65.5c7.9,1,11.8,2.6,13,3.5    c-1.8,1.6-10.4,4.1-23.9,4.1c-13.4,0-22-2.5-23.9-4.1c1.1-0.9,4.8-2.5,12-3.5c0.2,0,0.4-0.1,0.6-0.2c3.3,1.5,6.9,2.4,10.7,2.4    c3.9,0,7.5-0.9,10.9-2.4C55.9,65.4,56.1,65.5,56.3,65.5z M44.9,5.7c2.8,3.3,8.8,10.7,13.8,18.4c-1,0.6-1.9,1.2-2.8,1.9    c-4.8,4-7.7,9.8-7.9,15.9c0,0.1,0,0.2,0,0.3c-0.2,0.2-0.4,0.3-0.5,0.6c-0.2,0.3-0.3,0.6-0.5,0.9c-0.6-1.8-1.6-3.6-2.8-5.3    c-3.3-4.5-8.1-7.4-13.3-8.1c-1-0.1-2,0.5-2.3,1.6c-1.2,4.8,0,10.2,3.3,14.7c3.1,4.2,7.5,7,12.2,7.9c-0.1,2.9,0.3,6,1.2,9.1    c-0.2,0-0.4,0-0.5,0c-11.9,0-21.5-9.6-21.5-21.5C23.4,32.8,37.7,14.1,44.9,5.7z M45.4,86C21.6,86,5,79,5,72.6    c0-4.7,9.1-9.6,22.1-11.9c0.3,0.3,0.6,0.5,0.9,0.8c-7.8,1.6-11.7,4.2-11.7,7.6c0,8.9,26.1,9.2,29.1,9.2S74.5,78,74.5,69    c0-3.6-4.3-6.2-12.6-7.7c0.3-0.3,0.6-0.5,0.9-0.8c13.6,2.3,23,7.2,23,12.1C85.8,79,69.2,86,45.4,86z"></path>
              </g>
            </g>
          </svg>

          {siteTitle}
        </Link>

        <button
          className={styles.navbarMenu}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Menu
        </button>

        <ul className={styles.navList}>
          {items.map(({ name, to }) => (
            <li className={styles.navListItem} key={name}>
              <Link className={styles.navLink} to={to}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <ul
          className={classNames(styles.navListMobile, {
            [styles.navListMobileIsOpen]: isOpen,
          })}
        >
          {items.map(({ name, to }) => (
            <li className={styles.navListMobileItem} key={name}>
              <Link className={styles.navLink} to={to}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
