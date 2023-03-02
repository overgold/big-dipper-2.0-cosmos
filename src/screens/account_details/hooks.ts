import { useDesmosProfile } from '@hooks';

import { chainConfig } from '@src/configs';
import { convertCoinToSatoshi } from '@src/utils/coinFormatting';
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
    available: defaultTokenUnit,
    delegate: defaultTokenUnit,
    unbonding: defaultTokenUnit,
    reward: defaultTokenUnit,
    commission: defaultTokenUnit,
    total: defaultTokenUnit,
  },
  rewards: {},
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
    fetchBalance();
    fetchAccountInfoAddress();
    fetchAddressHash();
  }, [router.query.address]);

  // ==========================
  // Fetch Data
  // ==========================
  const fetchWithdrawalAddress = async () => {
    const data = await fetchAccountWithdrawalAddress(
      router.query.address as string
    );
    handleSetState({
      overview: {
        address: router.query.address,
        withdrawalAddress: R.pathOr('', ['withdrawalAddress', 'address'], data),
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
          accountInfo: {
            walletOverview: {
              address: data.wallet[0]?.address,
              account_address: data.wallet[0]?.account_address,
              balance: data.wallet[0]?.balance[0]?.amount,
              kind: jsClient.walletKindToJSON(data.wallet[0]?.kind),
              state: jsClient.walletStateToJSON(data.wallet[0]?.state),
            },
            accountOverview: [],
          },
        });
      }
      if (!isEmpty(data.account)) {
        handleSetState({
          loading: false,
          accountAddress: router.query.address,
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
                  balance: convertCoinToSatoshi(
                    !isEmpty(wallet.balance) ? wallet.balance[0]?.amount : 0
                  ),
                  denom: !isEmpty(wallet.balance)
                    ? wallet.balance[0]?.denom
                    : bech32.decode(wallet.address).prefix,
                };
              }),
              totalWalletsBalance: convertCoinToSatoshi(
                sumBalances(data.account[0]?.wallets_data, {
                  paramsOne: 'balance',
                  paramsTwo: 'amount',
                })
              ),
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
      handleSetState({
        loading: false,
        accountAddress: data.account[0].address,
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
                balance: convertCoinToSatoshi(
                  !isEmpty(wallet.balance) ? wallet.balance[0]?.amount : 0
                ),
                denom: !isEmpty(wallet.balance)
                  ? wallet.balance[0]?.denom
                  : bech32.decode(wallet.address).prefix,
              };
            }),
            totalWalletsBalance: convertCoinToSatoshi(
              sumBalances(data.account[0]?.wallets_data, {
                paramsOne: 'balance',
                paramsTwo: 'amount',
              })
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

  const fetchBalance = async () => {
    const address = router.query.address as string;
    const promises = [
      fetchCommission(address),
      fetchAvailableBalances(address),
      fetchDelegationBalance(address),
      fetchUnbondingBalance(address),
      fetchRewards(address),
    ];
    const [commission, available, delegation, unbonding, rewards] =
      await Promise.allSettled(promises);

    const formattedRawData: any = {};
    formattedRawData.commission = R.pathOr(
      [],
      ['value', 'commission'],
      commission
    );
    formattedRawData.accountBalances = R.pathOr(
      [],
      ['value', 'accountBalances'],
      available
    );
    formattedRawData.delegationBalance = R.pathOr(
      [],
      ['value', 'delegationBalance'],
      delegation
    );
    formattedRawData.unbondingBalance = R.pathOr(
      [],
      ['value', 'unbondingBalance'],
      unbonding
    );
    formattedRawData.delegationRewards = R.pathOr(
      [],
      ['value', 'delegationRewards'],
      rewards
    );

    handleSetState(formatAllBalance(formattedRawData));
  };

  // ==========================
  // Format Data
  // ==========================
  const formatAllBalance = (data: any) => {
    const stateChange: any = {
      loading: false,
    };

    // ============================
    // rewards
    // ============================
    const formatRewards = () => {
      const rewardsDict = {};
      // log all the rewards
      R.pathOr([], ['delegationRewards'], data).forEach(x => {
        const coins = R.pathOr([], ['coins'], x);
        const denomAmount = getDenom(coins, chainConfig.primaryTokenUnit);
        const denomFormat = formatToken(
          denomAmount.amount,
          chainConfig.primaryTokenUnit
        );
        rewardsDict[x.validatorAddress] = denomFormat;
      });
      return rewardsDict;
    };

    stateChange.rewards = formatRewards();

    // ============================
    // balance
    // ============================
    const formatBalance = () => {
      const available = getDenom(
        R.pathOr([], ['accountBalances', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const availableAmount = formatToken(
        available.amount,
        chainConfig.primaryTokenUnit
      );
      const delegate = getDenom(
        R.pathOr([], ['delegationBalance', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const delegateAmount = formatToken(
        delegate.amount,
        chainConfig.primaryTokenUnit
      );

      const unbonding = getDenom(
        R.pathOr([], ['unbondingBalance', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const unbondingAmount = formatToken(
        unbonding.amount,
        chainConfig.primaryTokenUnit
      );
      const rewards = data.delegationRewards.reduce((a, b) => {
        const coins = R.pathOr([], ['coins'], b);
        const dsmCoins = getDenom(coins, chainConfig.primaryTokenUnit);

        return Big(a).plus(dsmCoins.amount).toPrecision();
      }, '0');
      const rewardsAmount = formatToken(rewards, chainConfig.primaryTokenUnit);

      const commission = getDenom(
        R.pathOr([], ['commission', 'coins'], data),
        chainConfig.primaryTokenUnit
      );
      const commissionAmount = formatToken(
        commission.amount,
        chainConfig.primaryTokenUnit
      );

      const total = Big(availableAmount.value)
        .plus(delegateAmount.value)
        .plus(unbondingAmount.value)
        .plus(rewardsAmount.value)
        .plus(commissionAmount.value)
        .toFixed(chainConfig.tokenUnits[chainConfig.primaryTokenUnit].exponent);

      const balance = {
        available: availableAmount,
        delegate: delegateAmount,
        unbonding: unbondingAmount,
        reward: rewardsAmount,
        commission: commissionAmount,
        total: {
          value: total,
          displayDenom: availableAmount.displayDenom,
          baseDenom: availableAmount.baseDenom,
          exponent: availableAmount.exponent,
        },
      };

      return balance;
    };

    stateChange.balance = formatBalance();

    // ============================
    // other tokens
    // ============================
    const formatOtherTokens = () => {
      // Loop through balance and delegation to figure out what the other tokens are
      const otherTokenUnits = new Set();
      const otherTokens = [];
      // available tokens
      const available = R.pathOr([], ['accountBalances', 'coins'], data);

      available.forEach(x => {
        otherTokenUnits.add(x.denom);
      });

      // rewards tokens
      const rewards = R.pathOr([], ['delegationRewards'], data);

      rewards.forEach(x => {
        x.coins?.forEach(y => {
          otherTokenUnits.add(y.denom);
        });
      });

      // commission tokens
      const commission = R.pathOr([], ['commission', 'coins'], data);

      commission.forEach(x => {
        otherTokenUnits.add(x.denom);
      });

      // remove the primary token unit thats being shown in balance
      otherTokenUnits.delete(chainConfig.primaryTokenUnit);

      otherTokenUnits.forEach((x: string) => {
        const availableRawAmount = getDenom(available, x);
        const availableAmount = formatToken(availableRawAmount.amount, x);
        const rewardsRawAmount = rewards.reduce((a, b) => {
          const coins = R.pathOr([], ['coins'], b);
          const denom = getDenom(coins, x);
          return Big(a).plus(denom.amount).toPrecision();
        }, 0);
        const rewardAmount = formatToken(rewardsRawAmount, x);
        const commissionRawAmount = getDenom(commission, x);
        const commissionAmount = formatToken(commissionRawAmount.amount, x);

        otherTokens.push({
          denom: R.pathOr(x, ['tokenUnits', x, 'display'], chainConfig),
          available: availableAmount,
          reward: rewardAmount,
          commission: commissionAmount,
        });
      });

      return {
        data: otherTokens,
        count: otherTokens.length,
      };
    };

    formatOtherTokens();

    stateChange.otherTokens = formatOtherTokens();

    return stateChange;
  };

  return {
    state,
  };
};
