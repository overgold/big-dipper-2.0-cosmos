import React from 'react';
import { MsgCreateAccount } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgCreateAccountComponent = (props: { message: MsgCreateAccount }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgCreateAccount"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <>
            {'['}
            {message.kinds?.length && (
              <>
                {message.kinds.map((el, index) => (
                  <span key={index}>
                    {el}
                    {index !== message.kinds.length - 1 ? ',' : ''}
                  </span>
                ))}
              </>
            )}
            {']'}
          </>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
      />
    </div>
  );
};

export default MsgCreateAccountComponent;
