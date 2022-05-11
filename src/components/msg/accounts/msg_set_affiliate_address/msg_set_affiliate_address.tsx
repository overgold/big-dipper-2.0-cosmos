import React from 'react';
import { MsgSetAffiliateAddress } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetAffiliateAddressComponent = (props: {
  message: MsgSetAffiliateAddress;
}) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetAffiliateAddress"
        components={[
          <Link href={ACCOUNT_DETAILS(message.old_address)}>
            {message.old_address}
          </Link>,
          <Link href={ACCOUNT_DETAILS(message.new_address)}>
            {message.new_address}
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

export default MsgSetAffiliateAddressComponent;
