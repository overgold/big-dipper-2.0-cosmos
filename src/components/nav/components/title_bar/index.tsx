import React from 'react';
import classnames from 'classnames';
import VipcoinGold from '@assets/logo.svg';
import { useScreenSize } from '@src/hooks';
import { useStyles } from './styles';

const TitleBar:React.FC<{
  className?: string;
  title: string;
}> = ({
  className,
}) => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();

  return (
    <div className={classnames(className, classes.root)}>
      {isDesktop && <VipcoinGold />}
    </div>
  );
};

export default TitleBar;
