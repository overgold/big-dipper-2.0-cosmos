import React from 'react';

import { useStyles } from './styles';
interface MarqueeProps {
  text: string;
}

export const Marquee = ({ text }: MarqueeProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className={classes.item}>
          {text}
        </div>
      ))}
    </div>
  );
};
