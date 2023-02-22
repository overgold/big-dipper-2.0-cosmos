import { Dialog, Typography } from '@material-ui/core';
import React from 'react';
import { Box } from '@components';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { useStyles } from './styles';
import QRCode from 'qrcode.react';
import { useOverview } from './hooks';
import useTranslation from 'next-translate/useTranslation';

export interface ShareInfoType {
  address: string;
  open: boolean;
  handleClose: () => void;
}

export const ShareInfo = ({ address, open, handleClose }: ShareInfoType) => {
  const url = `${process.env.NEXT_PUBLIC_URL}accounts/${address}`;
  const hashTags = ['overgoldexplorer', 'overgold'];
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <Dialog
      maxWidth="xl"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Box className={classes.dialog}>
        <Typography variant="body1" align="center">
          {t('scanForAddress')}
        </Typography>
        <QRCode
          value={address}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          renderAs="svg"
        />

        <div className="dialog__share--wrapper">
          <Typography variant="body1">{t('shareTo')}</Typography>
          <div className={classes.icons}>
            <FacebookShareButton
              url={url}
              quote={address}
              hashtag={hashTags[0]}
              className="share-buttons"
            >
              <FacebookIcon round />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              title={address}
              hashtags={hashTags}
              className="share-buttons"
            >
              <TwitterIcon round />
            </TwitterShareButton>

            <TelegramShareButton
              url={url}
              title={address}
              className="share-buttons"
            >
              <TelegramIcon round />
            </TelegramShareButton>

            <WhatsappShareButton
              url={url}
              title={address}
              separator=":: "
              className="share-buttons"
            >
              <WhatsappIcon round />
            </WhatsappShareButton>
            <EmailShareButton
              url={url}
              subject="address"
              body={address}
              separator=":: "
              className="share-buttons email"
            >
              <EmailIcon round />
            </EmailShareButton>
          </div>
        </div>
      </Box>
    </Dialog>
  );
};
