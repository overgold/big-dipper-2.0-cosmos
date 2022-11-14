import React from 'react';
import Overgold from '@assets/logo.svg';
import { LinearProgress } from '@material-ui/core';
import { useStyles } from './styles';

const InitialLoad = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Overgold
          width="300"
          height="37"
          viewBox="0 0 211 37"
          className={classes.logo}
        />
        <LinearProgress className={classes.divider} />
      </div>
    </div>
  );
};

export default InitialLoad;
