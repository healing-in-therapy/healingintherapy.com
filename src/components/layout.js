import { graphql, useStaticQuery } from 'gatsby';
import { node, string } from 'prop-types';
import React from 'react';

import { SEO } from 'components';

import Footer from './footer';
import Header from './header';

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
    query SiteTitleQuery {
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

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
