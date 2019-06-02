import 'normalize.css';
import { graphql, useStaticQuery } from 'gatsby';
import { node, string } from 'prop-types';
import React from 'react';

import { SEO } from 'components';

import Footer from './footer';
import Header from './header';
import styles from './style/layout.module.scss';

const propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};

function Layout(props) {
  const {
    children,
    title,
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

      <Header siteTitle={data.site.siteMetadata.title} />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
