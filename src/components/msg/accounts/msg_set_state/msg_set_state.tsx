import React from 'react';
import { MsgSetState } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetStateComponent = (props: { message: MsgSetState }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetState"
        components={[
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          state: message.state,
          reason: message.reason,
        }}
      />
    </div>
  );
};

export default MsgSetStateComponent;
