import React from 'react';
import { MsgCancelSell } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { Typography } from '@material-ui/core';
import { convertCoinFromSatoshi } from '@src/utils/coinFormatting';

const MsgCancelSellComponent = (props: { message: MsgCancelSell }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCancelSell"
        components={[
          <b />,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          amount: `${convertCoinFromSatoshi(
            message.amount
          )} ${message.denom.toLocaleUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default MsgCancelSellComponent;
