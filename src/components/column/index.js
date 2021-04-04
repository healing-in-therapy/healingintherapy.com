import * as React from 'react';
import { oneOfType, number, string } from 'prop-types';

import * as styles from './style/column.module.scss';

const defaultProps = {
  width: null,
};

const propTypes = {
  width: oneOfType([
    number,
    string,
  ]),
};

function Column(props) {
  const {
    children,
    width,
  } = props;

  return (
    <div
      className={styles.column}
      style={{
        flex: (() => {
          if (typeof width === 'number') {
            return `0 0 ${width}px`;
          }

          if (typeof width === 'string') {
            return 'initial';
          }
        })(),

        width: (() => {
          if (typeof width === 'string') {
            return width;
          }
        })(),
      }}
    >
      {children}
    </div>
  );
}

Column.defaultProps = defaultProps;
Column.propTypes = propTypes;

export default Column;
