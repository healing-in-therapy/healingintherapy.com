import { node } from 'prop-types';
import React from 'react';

import styles from './style/row.module.scss';

const propTypes = {
  children: node.isRequired,
};

function Row(props) {
  const { children } = props;

  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

Row.propTypes = propTypes;

export default Row;
