import { Link, useStaticQuery } from 'gatsby';
import React from 'react';

const items = [{
  name: 'Home',
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

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social {
            id
            name
            url
          }
        }
      }
    }
  `);

  const {
    author,
    social
  } = data.site.siteMetadata;

  return (
    <footer>
      <div>
        <ul>
          {items.map(({ name, to }) => (
            <li key={name}>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Follow</h3>

        {(() => {
          if (social.length === 0) {
            return null;
          }

          return (
            <ul>
              {social.map(({ id, name, url }) => (
                <li key={id}>
                  <a href={url} rel="noopener noreferrer" target="_blank">{name}</a>
                </li>
              ))}
            </ul>
          );
        })()}
      </div>

      <div>
        &copy; {new Date().getFullYear()} {author}
      </div>
    </footer>
  );
}

export default Footer;
