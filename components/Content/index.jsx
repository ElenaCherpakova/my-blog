import React from 'react';
import styles from './index.module.scss';
import BlockContent from '@sanity/block-content-to-react';
import { clientConfig } from '../../lib/client';
import cl from 'classnames';

const Content = ({ className, body }) => {
  return (
    <div className={cl(className, styles.content)}>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 1000, fit: 'max' }}
        projectId={clientConfig.projectId}
        dataset={clientConfig.dataset}
      />
    </div>
  );
};

export default Content;
