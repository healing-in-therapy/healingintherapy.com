import { Link } from 'gatsby';
import { string } from 'prop-types';
import React from 'react';

const defaultProps = {
  siteTitle: '',
};

const propTypes = {
  siteTitle: string,
};

function Header(props) {
  const { siteTitle } = props;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">{siteTitle}</Link>
          </li>
          <li>
            <Link to="/individuals">Individuals</Link>
          </li>
          <li>
            <Link to="/couples">Couples</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/rehabilitation">Rehabilitation</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default Header;
