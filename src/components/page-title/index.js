import * as React from 'react';
import { node, string } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import * as styles from './page-title.module.scss';

const propTypes = {
  bgImage: {}.isRequired,
  bgPosition: string,
  title: node.isRequired,
};

function PageTitle(props) {
  const { bgImage, bgPosition = 'center center', title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackgroundImage
          {...bgImage}
          style={{
            backgroundPosition: bgPosition,
            height: 340,
          }}
        ></BackgroundImage>
      </div>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}

PageTitle.propTypes = propTypes;

export default PageTitle;
