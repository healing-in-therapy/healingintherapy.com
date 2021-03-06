/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { arrayOf, object, string } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import * as React from 'react';

const defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
};

const propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(object),
  title: string.isRequired,
};

function Seo(props) {
  const { description, lang, meta, title } = props;

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'google-site-verification',
          content: 'mVoC9QWrOzA4jIU2bbcDsIOiVRV3DUq7n4JQN4ZZkms',
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = defaultProps;
Seo.propTypes = propTypes;

export default Seo;
