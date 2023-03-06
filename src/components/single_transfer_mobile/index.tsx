import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from './styles';

const SingleTransferMobile: React.FC<{
  className?: string;
  hash: React.ReactNode;
  wallet?: React.ReactNode;
  walletFrom?: React.ReactNode;
  walletTo?: React.ReactNode;
  kind: string;
  amount: string;
  block: React.ReactNode;
  time: string;
}> = ({
  className,
  block,
  hash,
  time,
  wallet,
  walletFrom,
  walletTo,
  kind,
  amount,
}) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hash')}
        </Typography>
        {hash}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('kind')}
        </Typography>
        <Typography variant="body1" className="value">
          {kind}
        </Typography>
      </div>
      {walletFrom && walletTo ? (
        <>
          {' '}
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('walletFrom')}
            </Typography>
            <Typography variant="body1" className="value">
              {walletFrom}
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('walletTo')}
            </Typography>
            <Typography variant="body1" className="value">
              {walletTo}
            </Typography>
          </div>
        </>
      ) : (
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('wallet')}
          </Typography>
          <Typography variant="body1" className="value">
            {wallet}
          </Typography>
        </div>
      )}

      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('amount')}
        </Typography>
        <Typography variant="body1" className="value">
          {amount}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('time')}
        </Typography>
        <Typography variant="body1" className="value">
          {time}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        <Typography variant="body1" className="value">
          {block}
        </Typography>
      </div>
    </div>
  );
};

export default SingleTransferMobile;
