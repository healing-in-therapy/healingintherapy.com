import { node } from 'prop-types';
import React from 'react';

import styles from './style/section.module.scss';

const defaultProps = {
  subtitle: null,
};

const propTypes = {
  children: node.isRequired,
  subtitle: node,
  title: node.isRequired,
};

function Section(props) {
  const {
    children,
    subtitle,
    title,
  } = props;

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {(() => {
        if (!subtitle) {
          return null;
        }

        return (
          <div className={styles.sectionSubtitle}>{subtitle}</div>
        );
      })()}

      <div className={styles.sectionContent}>
        {children}
      </div>
    </div>
  );
}

Section.defaultProps = defaultProps;
Section.propTypes = propTypes;

export default Section;
