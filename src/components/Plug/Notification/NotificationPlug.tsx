import React from 'react';
import { useStyles } from './NotificationPlug.style';
import Marquee from 'react-fast-marquee';

interface NotificationPlugProps {
  message?: string;
}

export const NotificationPlug = ({ message }: NotificationPlugProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Marquee pauseOnHover speed={80} className="marquee-container">
        <span className={classes.text}>{message}</span>
      </Marquee>
    </div>
  );
};
