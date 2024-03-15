import { useDesmosProfile } from '@hooks';

import { chainConfig } from '@src/configs';
import { roundToFixed } from '@src/utils/coinFormatting';
import { sumBalances } from '@src/utils/sumBalances';

import { getDenom } from '@utils/get_denom';
import { formatToken } from '@utils/format_token';

import { bech32 } from 'bech32';

import { useState, useEffect } from 'react';

import * as R from 'ramda';

import Big from 'big.js';

import { useRouter } from 'next/router';

import { isNil, isEmpty } from 'lodash';

import { AccountDetailState } from './types';
import {
  fetchAccountHash,
  fetchAccountInfo,
  fetchAccountWithdrawalAddress,
  fetchAvailableBalances,
  fetchCommission,
  fetchDelegationBalance,
  fetchRewards,
  fetchStakingInfo,
  fetchUnbondingBalance,
} from './utils';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

const initialState: AccountDetailState = {
  loading: true,
  exists: true,
  desmosProfile: null,
  accountAddress: null,
  overview: {
    address: '',
    withdrawalAddress: '',
  },
  otherTokens: {
    count: 0,
    data: [],
  },
  balance: {
    regular: defaultTokenUnit,
    staked: defaultTokenUnit,
    steakForRansom: defaultTokenUnit,
    refReward: defaultTokenUnit,
    steakReward: defaultTokenUnit,
    total: defaultTokenUnit,
  },
  rewards: {},
  transferWallets: [],
  accountInfo: {
    address: '',
    accountOverview: [],
    walletOverview: [],
  },
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState(prevState => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: data => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(router.query.address as string);
    }
  }, [router.query.address]);

  useEffect(() => {
    fetchWithdrawalAddress();
    // fetchBalance();
    // fetchAccountInfoAddress();
    // fetchAddressHash();
  }, [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  const fetchWithdrawalAddress = async () => {
    // const data = await fetchAccountWithdrawalAddress(
    //   router.query.address as string
    // );
    handleSetState({
      loading: false,
      overview: {
        address: router.query.address,
        // withdrawalAddress: R.pathOr('', ['withdrawalAddress', 'address'], data),
      },
    });
  };

  //fetch AccountInfo
  const fetchAccountInfoAddress = async () => {
    handleSetState({
      loading: true,
    });
    const address = router.query.address as string;
    const data = await fetchAccountInfo(address);

    const { jsClient } = await import('js-core');

    if (data) {
      if (!isEmpty(data.wallet)) {
        handleSetState({
          loading: false,
          accountAddress: data.wallet[0].account_address,
          transferWallets: [data.wallet[0]?.address],
          accountInfo: {
            walletOverview: {
              address: data.wallet[0]?.address,
              account_address: data.wallet[0]?.account_address,
              balance: roundToFixed(data.wallet[0]?.balance[0]?.amount, 8),
              kind: jsClient.walletKindToJSON(data.wallet[0]?.kind),
              state: jsClient.walletStateToJSON(data.wallet[0]?.state),
            },
            accountOverview: [],
          },
        });
      }
      if (!isEmpty(data.account)) {
        const stateInfo = await fetchStakingInfo(data.account[0]?.hash);
        const stateBalance = R.pathOr([], ['user_api', 'info', '0'], stateInfo);

        handleSetState(
          formatBalance(data.account[0]?.wallets_data, stateBalance)
        );

        handleSetState({
          loading: false,
          accountAddress: data.account[0].address,
          transferWallets: data.account[0].wallets,
          accountInfo: {
            walletOverview: [],
            accountOverview: {
              address: data.account[0].address,
              hash: data.account[0]?.hash,
              kind: data.account[0]?.kinds.map((kindItem: number) => {
                return {
                  kind: jsClient.accountKindToJSON(kindItem),
                };
              }),
              state: jsClient.accountStateToJSON(data.account[0]?.state),
              affiliates: data.account[0]?.affiliates.map(affiliates => {
                return {
                  address: affiliates.address,
                  kind: jsClient.affiliationKindToJSON(
                    affiliates.affiliation_kind
                  ),
                };
              }),
              wallets: data.account[0]?.wallets_data.map(wallet => {
                return {
                  kind: jsClient.walletKindToJSON(wallet.kind),
                  address: wallet.address,
                  state: jsClient.walletStateToJSON(data.account[0]?.state),
                  balance: roundToFixed(
                    !isEmpty(wallet.balance) ? wallet.balance[0]?.amount : 0,
                    8
                  ),

                  denom: !isEmpty(wallet.balance)
                    ? wallet.balance[0]?.denom
                    : bech32.decode(wallet.address).prefix,
                };
              }),
            },
          },
        });
      }
    }
  };

  const fetchAddressHash = async () => {
    handleSetState({
      loading: true,
    });
    const address = router.query.account_hash as string;
    const data = await fetchAccountHash(address);

    const { jsClient } = await import('js-core');

    if (!isEmpty(data.account)) {
      const stateInfo = await fetchStakingInfo(data.account[0]?.hash);
      const stateBalance = R.pathOr([], ['user_api', 'info', '0'], stateInfo);

      handleSetState(
        formatBalance(data.account[0]?.wallets_data, stateBalance)
      );

      handleSetState({
        loading: false,
        accountAddress: data.account[0].address,
        transferWallets: data.account[0].wallets,
        accountInfo: {
          walletOverview: [],
          accountOverview: {
            address: data.account[0].address,
            hash: data.account[0]?.hash,
            kind: data.account[0]?.kinds.map((kindItem: number) => {
              return {
                kind: jsClient.accountKindToJSON(kindItem),
              };
            }),
            state: jsClient.accountStateToJSON(data.account[0]?.state),
            affiliates: data.account[0]?.affiliates.map(affiliates => {
              return {
                address: affiliates.address,
                kind: jsClient.affiliationKindToJSON(
                  affiliates.affiliation_kind
                ),
              };
            }),
            wallets: data.account[0]?.wallets_data.map(wallet => {
              return {
                address: wallet.address,
                kind: jsClient.walletKindToJSON(wallet.kind),
                state: jsClient.walletStateToJSON(data.account[0]?.state),
                balance: roundToFixed(
                  !isEmpty(wallet.balance) ? wallet.balance[0]?.amount : 0,
                  8
                ),
                denom: !isEmpty(wallet.balance)
                  ? wallet.balance[0]?.denom
                  : bech32.decode(wallet.address).prefix,
              };
            }),
            totalWalletsBalance: roundToFixed(
              sumBalances(data.account[0]?.wallets_data, {
                paramsOne: 'balance',
                paramsTwo: 'amount',
              }),
              8
            ),
          },
        },
      });
    } else {
      handleSetState({
        loading: false,
      });
    }
  };

  const formatBalance = (walletData, stakeData) => {
    const stateChange: any = {
      loading: false,
    };

    const formatBalances = () => {
      const regularAmount = sumBalances(
        walletData.filter(item => item.kind !== 7),
        {
          paramsOne: 'balance',
          paramsTwo: 'amount',
        }
      );

      const regularBalances = formatToken(
        regularAmount,
        chainConfig.primaryTokenUnit
      );

      const refRewardAmount = R.pathOr(
        { value: '0', denom: '' },
        ['0', 'balance', '0', 'amount'],
        walletData.filter(item => item.kind === 7)
      );

      const refRewardBalances = formatToken(
        refRewardAmount,
        chainConfig.primaryTokenUnit
      );

      //stake
      const stakeAmount = R.pathOr(
        { value: '0', denom: '' },
        ['balance', 'amount_stake'],
        stakeData
      );
      const steakForRansomAmount = R.pathOr(
        { value: '0', denom: '' },
        ['balance', 'amount_sell'],
        stakeData
      );
      const steakReward = R.pathOr(
        { value: '0', denom: '' },
        ['reward', 'aggregate', 'sum', 'amount'],
        stakeData
      );
      const stakeBalances = formatToken(
        stakeAmount,
        chainConfig.primaryTokenUnit,
        true
      );
      const steakForRansomBalances = formatToken(
        steakForRansomAmount,
        chainConfig.primaryTokenUnit,
        true
      );
      const steakRewardBalance = formatToken(
        steakReward,
        chainConfig.primaryTokenUnit,
        true
      );

      const total = Big(steakRewardBalance.value)
        .plus(regularBalances.value)
        .plus(refRewardBalances.value)
        .plus(stakeBalances.value)
        .plus(steakForRansomBalances.value)
        .toFixed(chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent);

      //return balance
      const balance = {
        regular: regularBalances,
        staked: stakeBalances,
        steakForRansom: steakForRansomBalances,
        refReward: refRewardBalances,
        steakReward: steakRewardBalance,

        total: {
          value: total,
          displayDenom: regularBalances.displayDenom,
          baseDenom: regularBalances.baseDenom,
          exponent: regularBalances.exponent,
        },
      };
      return balance;
    };

    stateChange.balance = formatBalances();
    return stateChange;
  };

  return {
    state,
  };
};
