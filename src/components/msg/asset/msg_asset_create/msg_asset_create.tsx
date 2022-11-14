import React from 'react';
import { MsgAssetCreate } from '@models';
import { useStyles } from '../styles';
import Link from 'next/link';
import Trans from 'next-translate/Trans';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
//FORK
const MsgAssetCreateComponent = (props: { message: MsgAssetCreate }) => {
  //   const { message } = props;
  const classes = useStyles();

  const message = {
    '@type': '/vipcoin.chain.assets.MsgAssetCreate',
    name: 'vcg',
    state: 'ASSET_STATE_ACTIVE',
    extras: [],
    issuer: 'vcg1u7ramaqzk7r50g92c9m8wezcasuc2vn5h9qrrh',
    creator: 'vcg1u7ramaqzk7r50g92c9m8wezcasuc2vn5h9qrrh',
    policies: [
      'ASSET_POLICY_ISSUABLE',
      'ASSET_POLICY_TRANSFERABLE',
      'ASSET_POLICY_WITHDRAWABLE',
      'ASSET_POLICY_EXCHANGEABLE',
      'ASSET_POLICY_SHAREHOLDER_REF_REWARD',
    ],
    properties: {
      precision: '8',
      fee_percent: '100',
    },
  };

  return (
    <div>
      <Trans
        i18nKey="message_contents:MsgAssetCreate"
        components={[
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

export default MsgAssetCreateComponent;
