import { Layout, LoadAndExist, DesmosProfile } from '@components';

import React from 'react';

import useTranslation from 'next-translate/useTranslation';

import { NextSeo } from 'next-seo';

import {
  Overview,
  Balance,
  Staking,
  Transactions,
  OtherTokens,
} from './components';
import { useAccountDetails } from './hooks';
import { useStyles } from './styles';
import Transfers from './components/transfers';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { state } = useAccountDetails();

  return (
    <>
      <NextSeo
        title={t('accountDetails')}
        openGraph={{
          title: t('accountDetails'),
        }}
      />
      <Layout navTitle={t('accountDetails')}>
        <LoadAndExist loading={state.loading} exists={state.exists}>
          <span className={classes.root}>
            {!!state.desmosProfile && (
              <DesmosProfile
                dtag={state.desmosProfile.dtag}
                nickname={state.desmosProfile.nickname}
                imageUrl={state.desmosProfile.imageUrl}
                bio={state.desmosProfile.bio}
                connections={state.desmosProfile.connections}
                coverUrl={state.desmosProfile.coverUrl}
              />
            )}
            <Overview
              className={classes.overview}
              accountData={state.accountInfo}
            />
            {/* <Balance
              className={classes.balance}
              available={state.balance.available}
              delegate={state.balance.delegate}
              unbonding={state.balance.unbonding}
              reward={state.balance.reward}
              commission={state.balance.commission}
              total={state.balance.total}
            /> */}
            {/* <OtherTokens
              className={classes.otherTokens}
              otherTokens={state.otherTokens}
            /> */}
            {/* <Staking className={classes.staking} rewards={state.rewards} /> */}
           
            <Transfers
              className={classes.transactions}
              transferWallets={state.transferWallets}
            />
            <Transactions
              className={classes.transactions}
              accountAddress={state.accountAddress}
            />
          </span>
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default AccountDetails;
