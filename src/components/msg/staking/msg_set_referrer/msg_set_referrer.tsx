import { MsgSetReferrer } from '@models';

import { Typography } from '@material-ui/core';

import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

import React from 'react';

import Link from 'next/link';

import Trans from 'next-translate/Trans';

const MsgSetReferrerComponent = (props: { message: MsgSetReferrer }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSetReferrer"
        components={[
          <Link href={ACCOUNT_DETAILS(message.referrerAddress)}>
            {message.referrerAddress}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.referralAddress)}>
            {message.referralAddress}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
      />
    </Typography>
  );
};

export default MsgSetReferrerComponent;
