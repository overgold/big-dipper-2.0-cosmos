import React from 'react';
import { MsgSetAffiliateExtra } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetAffiliateExtraComponent = (props: {
  message: MsgSetAffiliateExtra;
}) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetAffiliateExtra"
        components={[
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          affiliation_hash: message.affiliation_hash,
        }}
      />
    </div>
  );
};

export default MsgSetAffiliateExtraComponent;
