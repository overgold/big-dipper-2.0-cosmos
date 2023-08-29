import React from 'react';
import { useStyles } from './NotificationPlug.style';
import { Marquee } from '@src/components/Marquee/Marquee';

interface NotificationPlugProps {
  message?: string;
}

export const NotificationPlug = ({ message }: NotificationPlugProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Marquee text={message!} />
    </div>
  );
};
