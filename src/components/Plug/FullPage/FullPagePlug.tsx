import React from 'react';

import PlugImage from '@assets/plug-image.svg';
import { useStyles } from './styles';

interface Props {
  message?: any;
}

export const FullPagePlug = ({ message }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.title}>
          {'Technical work is currently underway'}
        </div>
        <div className={classes.text}>{'Sorry for the inconvenience'}</div>
        <div className={classes.imageContainer}>
          <PlugImage width="824" height="453" viewBox="0 0 824 453" />
        </div>
        {message && <div className={classes.text}>{message}</div>}
      </div>
    </div>
  );
};
