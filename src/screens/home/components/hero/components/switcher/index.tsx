import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { SwitcherType } from '../../types';

interface ISwitcher {
  type: SwitcherType;
  setType: (type: SwitcherType) => void;
}

const Switcher = ({ type, setType }: ISwitcher) => {
  const { t } = useTranslation('home');
  const { classes } = useStyles();

  return (
    <div className={classes.switcher}>
      <div
        onClick={() => setType(SwitcherType.price)}
        className={`${classes.switcherItem} ${
          type === SwitcherType.price ? classes.switcherItemActive : ''
        }`}
      >
        {t(`${SwitcherType.price}`)}
      </div>
      <div
        onClick={() => setType(SwitcherType.capitalization)}
        className={`${classes.switcherItem} ${
          type === SwitcherType.capitalization ? classes.switcherItemActive : ''
        }`}
      >
        {t(`${SwitcherType.capitalization}`)}
      </div>
    </div>
  );
};

export default Switcher;
