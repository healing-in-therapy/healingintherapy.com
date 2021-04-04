/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

import { graphql, useStaticQuery } from 'gatsby';
import { string } from 'prop-types';
import Img from 'gatsby-image';
import * as React from 'react';

const propTypes = {
  filename: string.isRequired,
};

function Image(props) {
  const { filename } = props;

  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((image) => image.node.relativePath === filename);

  return (
    <Img
      fluid={image.node.childImageSharp.fluid}
    />
  );
}

Image.propTypes = propTypes;

export default Image;
