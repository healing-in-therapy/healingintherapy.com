import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import * as styles from './style/footer.module.scss';

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
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <ul className={styles.footerList}>
          {items.map(({ name, to }) => (
            <li
              className={styles.footerListItem}
              key={name}
            >
              <Link
                className={styles.footerLink}
                to={to}
              >{name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.footerHeader}>Follow</h3>

        {(() => {
          if (social.length === 0) {
            return null;
          }

          return (
            <ul className={styles.footerList}>
              {social.map(({ id, name, url }) => (
                <li
                  className={styles.footerListItem}
                  key={id}
                >
                  <a
                    className={styles.footerLink}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >{name}</a>
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
