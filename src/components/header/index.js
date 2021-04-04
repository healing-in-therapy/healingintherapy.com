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

  const {
    siteTitle,
    transparent: initialTransparent,
  } = props;

  const items = [{
    name: 'Individuals',
    to: '/individuals',
  }, {
    name: 'Couples',
    to: '/couples',
  }, {
    name: 'Groups',
    to: '/groups',
  }, {
    name: 'Rehabilitation',
    to: '/rehabilitation',
  }, {
    name: 'About',
    to: '/about',
  }, {
    name: 'Contact',
    to: '/contact',
  }];

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
        <Link
          className={classNames(
            styles.navLink,
            styles.navLink
          )}
          to="/"
        >
          {siteTitle}
        </Link>

        <button
          className={styles.navbarMenu}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Menu
        </button>

        <ul
          className={styles.navList}
        >
          {items.map(({ name, to }) => (
            <li className={styles.navListItem} key={name}>
              <Link className={styles.navLink} to={to}>{name}</Link>
            </li>
          ))}
        </ul>

        <ul
          className={classNames(
            styles.navListMobile,
            {
              [styles.navListMobileIsOpen]: isOpen,
            }
          )}
        >
          {items.map(({ name, to }) => (
            <li className={styles.navListMobileItem} key={name}>
              <Link className={styles.navLink} to={to}>{name}</Link>
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
