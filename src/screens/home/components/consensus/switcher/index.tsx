import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';
import { SwitcherType } from '../types';

interface ISwitcher {
  type: any;
  setType: (type: SwitcherType) => void;
}

const Switcher = ({ type, setType }: ISwitcher) => {
  const { t } = useTranslation('home');
  const { classes } = useStyles();

  return (
    <div className={classes.switcher}>
      <div
        onClick={() => setType(SwitcherType.day)}
        className={`${classes.switcherItem} ${
          type === SwitcherType.day ? classes.switcherItemActive : ''
        }`}
      >
        {t(`${SwitcherType.day}`)}
      </div>
      <div
        onClick={() => setType(SwitcherType.week)}
        className={`${classes.switcherItem} ${
          type === SwitcherType.week ? classes.switcherItemActive : ''
        }`}
      >
        {t(`${SwitcherType.week}`)}
      </div>
      <div
        onClick={() => setType(SwitcherType.month)}
        className={`${classes.switcherItem} ${
          type === SwitcherType.month ? classes.switcherItemActive : ''
        }`}
      >
        {t(`${SwitcherType.month}`)}
      </div>
    </div>
  );
};

export default Switcher;
