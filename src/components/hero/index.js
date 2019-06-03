import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

import styles from './style/hero.module.scss';

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2448) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      className={styles.hero}
      fluid={data.hero.childImageSharp.fluid}
    >
      <div className={styles.heroContentContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Journey to Healing</h1>
          <div className={styles.heroSubtitle}>Find restoration, a new life.</div>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default Hero;
