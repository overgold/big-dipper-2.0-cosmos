import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core';
import VipcoinGold from '@assets/logo.svg';
import { Networks } from '@src/components/nav/components';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  className?: string;
  actionHeight?: number;
}> = ({
  className, actionHeight,
}) => {
  const classes = useStyles();

  return (
    <Box
      boxShadow={3}
      className={classnames(className, classes.root)}
    >
      <div
        style={{
          height: actionHeight,
        }}
      >
        <VipcoinGold
          width="218"
          height="100"
          viewBox="0 0 211 37"
        />
      </div>
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;
