import React from 'react';
import { MsgSetKinds } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSetKindsComponent = (props: { message: MsgSetKinds }) => {
  const { message } = props;

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetKinds"
        components={[
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
        values={{
          hash: message.hash,
        }}
      />
    </div>
  );
};

export default MsgSetKindsComponent;
