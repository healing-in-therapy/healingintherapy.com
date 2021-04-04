import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { bool, node, string } from 'prop-types';
import 'normalize.css';

import { Footer, Header, Seo } from 'components';

import './style/layout.module.scss';

const defaultProps = {
  transparent: false,
};

const propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  transparent: bool,
};

function Layout(props) {
  const { children, title, transparent } = props;

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
      <Seo title={title} />

      <Header
        siteTitle={data.site.siteMetadata.title}
        transparent={transparent}
      />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
