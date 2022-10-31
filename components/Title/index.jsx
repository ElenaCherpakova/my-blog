import React from 'react';
import styles from './index.module.scss';
import cl from 'classnames';

const Title = ({ className, children }) => {
  return <title className={cl(className, styles.title)}>{children}</title>;
};


export default Title;