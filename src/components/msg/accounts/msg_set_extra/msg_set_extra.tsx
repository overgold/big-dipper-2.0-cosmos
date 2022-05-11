import React from 'react';
import { MsgSetExtra } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { useStyles } from '../styles';

const MsgSetExtraComponent = (props: { message: MsgSetExtra }) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetExtra"
        components={[
          <>
            {message.extras?.length && (
              <div className={classes.extraList}>
                {message.extras.map((el, index) => (
                  <div className={classes.extraItem} key={index}>
                    <span>
                      {el.kind}: {el.data}
                    </span>
                  </div>
                ))}
              </div>
            )}
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

export default MsgSetExtraComponent;
