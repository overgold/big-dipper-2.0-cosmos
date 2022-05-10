import React from 'react';
import { MsgSetTransferExtra } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';

const MsgSetTransferExtraComponent = (props: {
  message: MsgSetTransferExtra;
}) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetTransferExtra"
        components={[
          <>
            {(message.extras?.length && (
              <div className={classes.extraList}>
                {message.extras.map((el, index) => (
                  <div className={classes.extraItem} key={index}>
                    <span>
                      {el.kind}: {el.data}
                    </span>
                  </div>
                ))}
              </div>
            )) || <br />}
          </>,
          <Link href={`/account/${message.creator}`}>{message.creator}</Link>,
        ]}
      />
    </div>
  );
};

export default MsgSetTransferExtraComponent;
