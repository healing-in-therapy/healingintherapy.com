import { node } from 'prop-types';
import * as React from 'react';

import * as styles from './style/row.module.scss';

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
