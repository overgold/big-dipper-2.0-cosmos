import React from 'react';
import { MsgIssue } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { convertCoinFromSatoshi } from '@src/utils/coinFormatting';
import { Typography } from '@material-ui/core';

const MsgIssueComponent = (props: { message: MsgIssue }) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgIssue"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          amount: `${convertCoinFromSatoshi(
            message.amount
          )} ${message.asset.toLocaleUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default MsgIssueComponent;
