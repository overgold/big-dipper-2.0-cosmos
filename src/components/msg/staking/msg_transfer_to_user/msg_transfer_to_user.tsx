import React from 'react';
import { MsgTransferToUser } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { Typography } from '@material-ui/core';
import { formatNumber } from '@src/utils/format_token';

const MsgTransferToUserComponent = (props: { message: MsgTransferToUser }) => {
  const { message } = props;
  const parsedAmount = message.amount
    .map(x => {
      return `${formatNumber(
        x.value,
        x.exponent
      )} ${x.displayDenom.toUpperCase()}`;
    })
    .join(', ');

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgTransferTomUser"
        components={[
          <b />,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default MsgTransferToUserComponent;
