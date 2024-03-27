import React from 'react';
import { MsgBuyRequest } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { Typography } from '@material-ui/core';
import { formatNumber } from '@src/utils/format_token';
import { convertCoinFromSatoshi } from '@src/utils/coinFormatting';
// import { convertCoinFromSatoshi } from '@src/utils/coinFormatting';

const MsgSellRequestComponent = (props: { message: MsgBuyRequest }) => {
  const { message } = props;
  const amount = convertCoinFromSatoshi(message.amount);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSellRequest"
        components={[
          <b />,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          amount: `${amount} stOVG`,
        }}
      />
    </Typography>
  );
};

export default MsgSellRequestComponent;
