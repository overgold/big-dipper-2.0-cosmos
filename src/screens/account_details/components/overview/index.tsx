import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography, Dialog } from '@material-ui/core';

import { useScreenSize } from '@hooks';

import CopyIcon from '@assets/icon-copy.svg';
import ShareIcon from '@assets/icon-share.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Box } from '@components';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { isNil } from 'lodash';
import { walletInfo } from './walletInfo';
import { ShareInfo } from './Share';

const Overview: React.FC<{
  className?: string;
  withdrawalAddress: string;
  address: string;
  accountData: any;
}> = ({ className, address, withdrawalAddress, accountData }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const {
    open,
    addressSelected,
    handleClose,
    handleOpen,
    handleCopyToClipboard,
  } = useOverview(t);

  return (
    <>
      {!isNil(accountData.walletOverview) &&
        ShareInfo(addressSelected, open, handleClose)}
      <Box className={classnames(className, classes.root)}>
        {!isNil(accountData.walletOverview) && (
          <div className={classnames(classes.list)}>
            {walletInfo(accountData.walletOverview, t).map(wallet => (
              <div
                key={wallet.title}
                className={classnames(classes.copyText, classes.item)}
              >
                <Typography variant="body1" className="label">
                  <strong>{wallet.title}</strong>
                </Typography>
                <div className="detail">
                  {wallet.isDetail && (
                    <>
                      <CopyIcon
                        onClick={() => handleCopyToClipboard(wallet.value)}
                        className={classes.actionIcons}
                      />
                      <ShareIcon
                        onClick={() => handleOpen(wallet.value)}
                        className={classes.actionIcons}
                      />
                    </>
                  )}
                  <Typography variant="body1" className="value">
                    {!isDesktop
                      ? getMiddleEllipsis(wallet.value, {
                          beginning: 15,
                          ending: 5,
                        })
                      : wallet.value}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        )}
      </Box>
    </>
  );
};

export default Overview;
