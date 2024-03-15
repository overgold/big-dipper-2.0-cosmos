import React, { useState } from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { useStyles } from './styles';
import { useStats } from './hooks';
import { SwitcherType } from './types';
import Switcher from './switcher';
import LogoArrowIcon from '@assets/turnover.svg';
import LogoIcon from '@assets/loader-logo.svg';

const Stats: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { classes } = useStyles();
  const [switcher, setSwitcher] = useState(SwitcherType.day);
  const { state } = useStats({ statsPeriod: switcher });
  const { t } = useTranslation('home');

  return (
    <Box className={classnames(className, classes.root)}>
      <Switcher type={switcher} setType={setSwitcher} />
      <div className={classes.info}>
        <div className={classes.logoWrapper}>
          <div className={classes.logoContainer}>
            <LogoArrowIcon className={classes.logoArrow} />
            <LogoIcon className={classes.logo} />
          </div>
        </div>
        <div>
          <Typography variant="h4" className={classes.description}>
            {t('turnover')}
          </Typography>
          <div className={classes.descriptionInfo}>
            {`${state.turnover} ${process.env.NEXT_PUBLIC_ASSET}`}
          </div>
        </div>
        <div>
          <Typography variant="h4" className={classes.description}>
            {t('numberOfTransactions')}
          </Typography>
          <div className={classes.descriptionInfo}>
            {state.totalTransaction}
          </div>
        </div>
        <div>
          <Typography variant="h4" className={classes.description}>
            {t('feeCollected')}
          </Typography>
          <div className={classes.descriptionInfo}>
            {' '}
            {`${state.feeCollected} ${process.env.NEXT_PUBLIC_ASSET}`}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Stats;
