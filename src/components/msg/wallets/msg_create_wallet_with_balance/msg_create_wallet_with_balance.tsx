import React from 'react';
import { MsgCreateWalletWithBalance } from '@models';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import useTranslation from 'next-translate/useTranslation';
import { useStyles } from '../styles';

const MsgCreateWalletWithBalanceComponent = (props: {
  message: MsgCreateWalletWithBalance;
}) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgCreateWalletWithBalance"
        components={[
          <Link href={ACCOUNT_DETAILS(message.address)}>
            {message.address}
          </Link>,
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
          amount: Number(message.balance[0].amount) / 100000000,
          denom: message.balance[0].denom,
        }}
      />
    </div>
  );
};

export default MsgCreateWalletWithBalanceComponent;
