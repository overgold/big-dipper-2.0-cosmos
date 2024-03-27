import React from 'react';
import { MsgClaimReward } from '@models';
3;
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { Typography } from '@material-ui/core';

const MsgSquashHistoryComponent = (props: { message: MsgClaimReward }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSquashHistory"
        components={[
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
      />
    </Typography>
  );
};

export default MsgSquashHistoryComponent;
