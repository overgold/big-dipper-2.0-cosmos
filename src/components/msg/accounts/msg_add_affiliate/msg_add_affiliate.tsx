import React from 'react';
import { MsgAddAffiliate } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgAddAffiliateComponent = (props: { message: MsgAddAffiliate }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgAddAffiliate"
        components={[
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          affiliation_hash: message.affiliation_hash,
          account_hash: message.account_hash,
          affiliation: message.affiliation,
        }}
      />
    </div>
  );
};

export default MsgAddAffiliateComponent;
