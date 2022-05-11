import React from 'react';
import { MsgSetWalletKind } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetWalletKindComponent = (props: { message: MsgSetWalletKind }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetWalletKind"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          kind: message.kind,
        }}
      />
    </div>
  );
};

export default MsgSetWalletKindComponent;
