import { Link } from 'gatsby';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

import styles from './style/header.module.scss';

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
  const {
    siteTitle,
    transparent
  } = props;

  const items = [{
    name: siteTitle,
    to: '/',
  }, {
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

  const header = useRef(null);

  function onScroll(event) {
    lastKnownScrollPosition = global.window.scrollY;

    if (ticking) {
      return;
    }

    global.window.requestAnimationFrame(() => {
      if (global.window.location.pathname === '/') {
        if (lastKnownScrollPosition > 60) {
          header.current.classList.remove(styles.headerTransparent);
        } else {
          header.current.classList.add(styles.headerTransparent);
        }
      }

      ticking = false;
    });

    ticking = true;
  }

  useEffect(() => {
    global.window.addEventListener('scroll', onScroll);

    return () => {
      global.window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <header
      className={classNames(
        styles.header, {
          [styles.headerTransparent]: transparent,
        },
      )}
      ref={header}
    >
      <nav>
        <ul className={styles.navList}>
          {items.map(({ name, to }) => (
            <li className={styles.navListItem} key={name}>
              <Link className={styles.navListLink} to={to}>{name}</Link>
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
