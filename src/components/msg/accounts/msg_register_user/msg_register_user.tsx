import React from 'react';
import { MsgRegisterUser } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgRegisterUserComponent = (props: { message: MsgRegisterUser }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgRegisterUser"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.holder_wallet)}>
            {message.holder_wallet}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.ref_reward_wallet)}>
            {message.ref_reward_wallet}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          hash: message.hash,
        }}
      />
    </div>
  );
};

export default MsgRegisterUserComponent;
