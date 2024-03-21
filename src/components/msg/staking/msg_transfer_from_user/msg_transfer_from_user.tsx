import React from 'react';
import { MsgWithdraw } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { convertCoinFromSatoshi } from '@src/utils/coinFormatting';
import { Typography } from '@material-ui/core';

const MsgTransferFromUserComponent = (props: { message: MsgWithdraw }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgTransferFromUserComponent"
        components={[
          <b />,
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          amount: `${convertCoinFromSatoshi(message.amount)} stOVG`,
        }}
      />
    </Typography>
  );
};

export default MsgTransferFromUserComponent;
