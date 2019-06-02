import { Link } from 'gatsby';
import { string } from 'prop-types';
import React from 'react';

import styles from './style/header.module.scss';

const defaultProps = {
  siteTitle: '',
};

const propTypes = {
  siteTitle: string,
};

function Header(props) {
  const { siteTitle } = props;

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

  return (
    <header className={styles.header}>
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
