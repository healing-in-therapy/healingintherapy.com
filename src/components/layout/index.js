import * as React from 'react';
import { bool, node, string } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import '@reach/skip-nav/styles.css'; //this will show/hide the link on focus
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

      <SkipNavLink style={{ zIndex: 200 }} />

      <Header
        siteTitle={data.site.siteMetadata.title}
        transparent={transparent}
      />

      <SkipNavContent />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
