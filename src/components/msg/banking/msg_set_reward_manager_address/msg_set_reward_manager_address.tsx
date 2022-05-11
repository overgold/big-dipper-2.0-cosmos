import React from 'react';
import { MsgSetRewardManagerAddress } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';

const MsgSetRewardManagerAddressComponent = (props: {
  message: MsgSetRewardManagerAddress;
}) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetRewardManagerAddress"
        components={[
          <Link href={`/account/${message.address}`}>{message.address}</Link>,
          <Link href={`/account/${message.creator}`}>{message.creator}</Link>,
        ]}
      />
    </div>
  );
};

export default MsgSetRewardManagerAddressComponent;
