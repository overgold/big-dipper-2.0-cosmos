import React from 'react';
import { MsgAssetSetExtra } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

const MsgAssetSetExtraComponent = (props: { message: MsgAssetSetExtra }) => {
  const { message } = props;
  const classes = useStyles();

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgAssetSetExtra"
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
            )) ||
              null}
          </>,
          <Link href={ACCOUNT_DETAILS(message.creator)}>
            {message.creator}
          </Link>,
        ]}
        values={{
          name: message.name,
        }}
      />
    </div>
  );
};

export default MsgAssetSetExtraComponent;
