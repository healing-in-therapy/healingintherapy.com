import { node } from 'prop-types';
import * as React from 'react';

import * as styles from './style/section.module.scss';

const propTypes = {
  children: node.isRequired,
  title: node,
};

function Section(props) {
  const { children, title } = props;

  return (
    <div className={styles.section}>
      {title && <h2>{title}</h2>}

      {children}
    </div>
  );
}

Section.propTypes = propTypes;

export default Section;
