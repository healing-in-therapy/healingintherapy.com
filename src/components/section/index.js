import { node } from 'prop-types';
import React from 'react';

import styles from './style/section.module.scss';

const propTypes = {
  children: node.isRequired,
};

function Section(props) {
  const {
    children,
  } = props;

  return (
    <div className={styles.section}>
      {children}
    </div>
  );
}

Section.propTypes = propTypes;

export default Section;
