import React from 'react';
import { MsgSystemTransfer } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgSystemTransferComponent = (props: { message: MsgSystemTransfer }) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgSystemTransfer"
        components={[
          <Link href={ACCOUNT_DETAILS(message.wallet_from)}>
            {message.wallet_from}
          </Link>,
          <Link href={`/account/${message.wallet_to}`}>
            {message.wallet_to}
          </Link>,
          <>
            {(message.extras?.length && (
              <>
                <span> {t('transactions:with extras')}:</span>
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
        values={{
          amount: message.amount / 100000000,
          asset: message.asset,
        }}
      />
    </div>
  );
};

export default MsgSystemTransferComponent;
