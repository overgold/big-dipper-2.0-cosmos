import React from 'react';
import { MsgIssue } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

const MsgIssueComponent = (props: { message: MsgIssue }) => {
  const { message } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgIssue"
        components={[
          <Link href={`/account/${message.wallet}`}>{message.wallet}</Link>,
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
          <Link href={`/account/${message.creator}`}>{message.creator}</Link>,
        ]}
      />
    </div>
  );
};

export default MsgIssueComponent;
