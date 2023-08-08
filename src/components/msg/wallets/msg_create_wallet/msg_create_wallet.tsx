import React from 'react';
import { MsgCreateWallet } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from '../styles';

const MsgCreateWalletComponent = (props: { message: MsgCreateWallet }) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgCreateWallet"
        components={[
          <Link href={ACCOUNT_DETAILS(message.account_address)}>
            {message.account_address}
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
          address: message.address,
          cost: '0,01 OVG',
        }}
      />
    </div>
  );
};

export default MsgCreateWalletComponent;
