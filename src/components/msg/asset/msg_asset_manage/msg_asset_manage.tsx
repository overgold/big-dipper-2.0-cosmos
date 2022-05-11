import React from 'react';
import { MsgAssetManage } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import useTranslation from 'next-translate/useTranslation';

const MsgAssetManageComponent = (props: { message: MsgAssetManage }) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgAssetManage"
        components={[
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
          <div>
            {t('transactions:Asset state')}: {message.state}
          </div>,
          <>
            {(message.policies?.length && (
              <>
                {t('transactions:Asset policies')}:
                <div className={classes.extraList}>
                  {message.policies.map((el, index) => (
                    <div className={classes.extraItem} key={index}>
                      {el}
                    </div>
                  ))}
                </div>
              </>
            )) ||
              null}
          </>,
          <>
            {t('transactions:Asset properties')}:
            {
              <div className={classes.extraList}>
                <div className={classes.extraItem}>
                  <span>
                    {t('transactions:Precision')}:{' '}
                    {message.properties.precision}
                  </span>
                </div>
                <div className={classes.extraItem}>
                  <span>
                    {t('transactions:Fee percent')}:{' '}
                    {Number(message.properties.fee_percent) / 100}%
                  </span>
                </div>
              </div>
            }
          </>,
        ]}
        values={{
          name: message.name,
        }}
      />
    </div>
  );
};

export default MsgAssetManageComponent;
