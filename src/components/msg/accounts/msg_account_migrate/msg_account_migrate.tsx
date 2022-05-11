import React from 'react';
import { MsgAccountMigrate } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgAccountMigrateComponent = (props: { message: MsgAccountMigrate }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgAccountMigrate"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
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

export default MsgAccountMigrateComponent;
