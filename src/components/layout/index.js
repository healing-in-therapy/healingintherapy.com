import 'normalize.css';
import { graphql, useStaticQuery } from 'gatsby';
import { bool, node, string } from 'prop-types';
import React from 'react';

import { Footer, Header, SEO } from 'components';

import styles from './style/layout.module.scss';

const defaultProps = {
  transparent: false,
};

const propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  transparent: bool,
};

function Layout(props) {
  const {
    children,
    title,
    transparent,
  } = props;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <SEO title={title} />

      <Header
        siteTitle={data.site.siteMetadata.title}
        transparent={transparent}
      />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
