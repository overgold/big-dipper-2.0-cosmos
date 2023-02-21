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
import { isEmpty } from 'lodash';
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
      <ShareInfo
        address={addressSelected}
        open={open}
        handleClose={handleClose}
      />
      <Box className={classnames(className, classes.root)}>
        {!isEmpty(accountData.walletOverview) && (
          <div className={classnames(classes.list)}>
            {walletInfo(accountData.walletOverview, t).map(walletItem => (
              <div
                key={walletItem.title}
                className={classnames(classes.copyText, classes.item)}
              >
                <Typography variant="body1" className="label">
                  <strong>{walletItem.title}</strong>
                </Typography>
                <div className="detail">
                  {walletItem.isDetail && (
                    <>
                      <CopyIcon
                        onClick={() => handleCopyToClipboard(walletItem.value)}
                        className={classes.actionIcons}
                      />
                      <ShareIcon
                        onClick={() => handleOpen(walletItem.value)}
                        className={classes.actionIcons}
                      />
                    </>
                  )}
                  <Typography variant="body1" className="value">
                    {!isDesktop && walletItem.isDetail
                      ? getMiddleEllipsis(walletItem.value, {
                          beginning: 15,
                          ending: 5,
                        })
                      : walletItem.value}
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
