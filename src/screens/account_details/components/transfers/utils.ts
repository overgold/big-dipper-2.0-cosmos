import {
  GetPaymentTransfersByWallets,
  GetSystemTransfersByWallets,
  GetIssueSystemTransfersByWallets,
  GetWithdrawSystemTransfersByWallets,
} from '@src/graphql/wallets_transfer';
import axios from 'axios';

import * as R from 'ramda';

export const fetchPaymentTransfersByWallets = async (value: any) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        wallet_address: value.address,
        limit: value.limit,
        offset: value.offset,
      },
      query: GetPaymentTransfersByWallets,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const fetchSystemTransfersByWallets = async (value: any) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        wallet_address: value.address,
        limit: value.limit,
        offset: value.offset,
      },
      query: GetSystemTransfersByWallets,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const fetchIssueSystemTransfersByWallets = async (value: any) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        wallet_address: value.address,
        limit: value.limit,
        offset: value.offset,
      },
      query: GetIssueSystemTransfersByWallets,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};

export const fetchWithdrawSystemTransfersByWallets = async (value: any) => {
  try {
    const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      variables: {
        wallet_address: value.address,
        limit: value.limit,
        offset: value.offset,
      },
      query: GetWithdrawSystemTransfersByWallets,
    });

    return R.pathOr([], ['data'], data);
  } catch (error) {
    console.log('error', error);
    return [];
  }
};
