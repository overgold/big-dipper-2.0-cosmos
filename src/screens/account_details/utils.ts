import {
  AccountCommissionDocument,
  AccountWithdrawalAddressDocument,
  AccountBalancesDocument,
  AccountDelegationBalanceDocument,
  AccountUnbondingBalanceDocument,
  AccountDelegationRewardsDocument,
  AccountInfo,
  AccountHash,
} from '@src/graphql/account_details_documents';

import { toValidatorAddress } from '@utils/prefix_convert';

import axios from 'axios';

import * as R from 'ramda';

export const fetchCommission = async (address: string) => {
  const defaultReturnValue = {
    commission: {
      coins: null,
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        validatorAddress: toValidatorAddress(address),
      },
      query: AccountCommissionDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchAccountWithdrawalAddress = async (address: string) => {
  const defaultReturnValue = {
    withdrawalAddress: {
      address,
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountWithdrawalAddressDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchAvailableBalances = async (address: string) => {
  const defaultReturnValue = {
    accountBalances: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountBalancesDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchDelegationBalance = async (address: string) => {
  const defaultReturnValue = {
    delegationBalance: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountDelegationBalanceDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchUnbondingBalance = async (address: string) => {
  const defaultReturnValue = {
    unbondingBalance: {
      coins: [],
    },
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountUnbondingBalanceDocument,
    });
    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};

export const fetchRewards = async (address: string) => {
  const defaultReturnValue = {
    delegationRewards: [],
  };
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address,
      },
      query: AccountDelegationRewardsDocument,
    });

    return R.pathOr(defaultReturnValue, ['data'], data);
  } catch (error) {
    return defaultReturnValue;
  }
};
// fetch AccountInfo
export const fetchAccountInfo = async (address: string) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        address: `%${address}%`,
      },
      query: AccountInfo,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
// fetch Account Hash
export const fetchAccountHash = async (hash: string) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        hash,
      },
      query: AccountHash,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
