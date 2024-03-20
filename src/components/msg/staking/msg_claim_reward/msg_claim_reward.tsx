import React from 'react';
import { MsgClaimReward } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { formatNumber } from '@src/utils/format_token';
import { Typography } from '@material-ui/core';

const MsgClaimRewardComponent = (props: { message: MsgClaimReward }) => {
  const { message } = props;
  const parsedAmount = message.amounts
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
        i18nKey="message_contents:MsgClaimReward"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default MsgClaimRewardComponent;
