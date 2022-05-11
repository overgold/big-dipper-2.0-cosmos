import React from 'react';
import { MsgSetDefaultWallet } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetDefaultWalletComponent = (props: {
  message: MsgSetDefaultWallet;
}) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetDefaultWallet"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
      />
    </div>
  );
};

export default MsgSetDefaultWalletComponent;
