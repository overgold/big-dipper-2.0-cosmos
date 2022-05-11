import React from 'react';
import { MsgSetExtraWallet } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import { useStyles } from '../styles';

const MsgSetExtraWalletComponent = (props: { message: MsgSetExtraWallet }) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSetExtraWallet"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
          <>
            {(message.extras?.length && (
              <>
                <div className={classes.extraList}>
                  {message.extras.map((el, index) => (
                    <div className={classes.extraItem} key={index}>
                      <span>
                        {el.kind}: {el.data}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )) ||
              null}
          </>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
      />
    </div>
  );
};

export default MsgSetExtraWalletComponent;
