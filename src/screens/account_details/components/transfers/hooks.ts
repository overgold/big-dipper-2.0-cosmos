import { convertCoinToSatoshi } from '@src/utils/coinFormatting';

import { useEffect, useState } from 'react';

import * as R from 'ramda';

import { TransferState } from './types';
import {
  fetchIssueSystemTransfersByWallets,
  fetchPaymentTransfersByWallets,
  fetchSystemTransfersByWallets,
  fetchWithdrawSystemTransfersByWallets,
} from './utils';

const LIMIT = 20;

export const useTransfer = () => {
  const [state, setState] = useState<TransferState>({
    payment: {
      data: [],
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
    },
    system: {
      data: [],
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
    },
    withdrawSystem: {
      data: [],
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
    },
    issueSystem: {
      data: [],
      hasNextPage: false,
      isNextPageLoading: false,
      offsetCount: 0,
    },
  });

  const handleSetState = (stateChange: any) => {
    setState(prevState => R.mergeDeepLeft(stateChange, prevState));
  };

  useEffect(() => {
    fetchPaymentTransfers();
    fetchSystemTransfers();
    fetchIssueSystemTransfers();
    fetchWithdrawSystemTransfers();
  }, []);
  //PaymentTransfers
  const fetchPaymentTransfers = async () => {
    const { jsClient } = await import('js-core');
    const data = await fetchPaymentTransfersByWallets({
      address: ['ovg1ynu2uxkpmjzdgpwfc8zph886tmmlg6gcxahguu'],
      limit: LIMIT + 1,
      offset: state.payment.offsetCount,
    });
    const newItems = R.uniq([
      ...state.payment.data,
      ...formatTransfer(data, jsClient),
    ]);
    const stateChange = {
      payment: {
        data: newItems,
        hasNextPage: data.transfers.length === 21,
        isNextPageLoading: false,
        offsetCount: state.payment.offsetCount + LIMIT,
      },
    };
    handleSetState(stateChange);
  };

  //SystemTransfers
  const fetchSystemTransfers = async () => {
    const { jsClient } = await import('js-core');
    const data = await fetchSystemTransfersByWallets({
      address: ['ovg1ynu2uxkpmjzdgpwfc8zph886tmmlg6gcxahguu'],
      limit: LIMIT + 1,
      offset: state.system.offsetCount,
    });
    const newItems = R.uniq([
      ...state.system.data,
      ...formatTransfer(data, jsClient),
    ]);
    const stateChange = {
      system: {
        data: newItems,
        hasNextPage: data.transfers.length === 21,
        isNextPageLoading: false,
        offsetCount: state.system.offsetCount + LIMIT,
      },
    };
    handleSetState(stateChange);
  };
  //IssueSystemTransfers
  const fetchIssueSystemTransfers = async () => {
    const { jsClient } = await import('js-core');
    const data = await fetchIssueSystemTransfersByWallets({
      address: ['ovg1nqqqe5rrjtt6zndpvtv32fdkysny2y3ascajte'],
      limit: LIMIT + 1,
      offset: state.issueSystem.offsetCount,
    });
    const newItems = R.uniq([
      ...state.issueSystem.data,
      ...formatTransfer(data, jsClient),
    ]);
    const stateChange = {
      issueSystem: {
        data: newItems,
        hasNextPage: data.transfers.length === 21,
        isNextPageLoading: false,
        offsetCount: state.issueSystem.offsetCount + LIMIT,
      },
    };
    handleSetState(stateChange);
  };
  //WithdrawSystemTransfers
  const fetchWithdrawSystemTransfers = async () => {
    const { jsClient } = await import('js-core');
    const data = await fetchWithdrawSystemTransfersByWallets({
      address: ['ovg1dzx4fj4gyh3m5fp32jxf43pjkuy06hsegkm0xf'],
      limit: LIMIT + 1,
      offset: state.withdrawSystem.offsetCount,
    });
    const newItems = R.uniq([
      ...state.withdrawSystem.data,
      ...formatTransfer(data, jsClient),
    ]);
    const stateChange = {
      withdrawSystem: {
        data: newItems,
        hasNextPage: data.transfers.length === 21,
        isNextPageLoading: false,
        offsetCount: state.withdrawSystem.offsetCount + LIMIT,
      },
    };
    handleSetState(stateChange);
  };

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    fetchPaymentTransfers();
  };
  const formatTransfer = (data: any, jsClient) => {
    let formattedData = data.transfers;
    if (!formattedData) {
      return;
    }
    return formattedData.map(item => {
      return {
        ...item,
        amount: convertCoinToSatoshi(item.amount),
        kind: jsClient.walletKindToJSON(item.kind),
        walletFrom: item.wallets.wallet_from,
        walletTo: item.wallets.wallet_to,
        height: item.block[0].height,
        hash: item.tx_hash,
      };
    });
  };

  return {
    state,
    loadNextPage,
  };
};
