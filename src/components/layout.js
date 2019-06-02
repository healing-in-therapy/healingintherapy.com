import { graphql, StaticQuery } from 'gatsby';
import { node } from 'prop-types';
import React from 'react';

import Footer from './footer';
import Header from './header';

const propTypes = {
  children: node.isRequired,
};

function Layout(props) {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>

          <Footer />
        </div>
      )}
    />
  );
}

Layout.propTypes = propTypes;

export default Layout;
