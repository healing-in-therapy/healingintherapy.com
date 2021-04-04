import * as React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import * as styles from './style/hero.module.scss';

function Hero() {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, quality: 90)
        }
      }
    }
  `);

  const image = getImage(hero);

  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage className={styles.hero} {...bgImage}>
      <div className={styles.heroContentContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Find restoration, a new life.</h1>
          <div className={styles.heroSubtitle}>
            Affordable, private online therapy
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default Hero;
