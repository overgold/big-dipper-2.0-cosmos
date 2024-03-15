import { convertCoinToSatoshi, roundToFixed } from '@src/utils/coinFormatting';

import { useEffect, useState } from 'react';

import * as R from 'ramda';

import isEmpty from 'lodash-es/isEmpty';

import { TransferState } from './types';
import {
  fetchIssueSystemTransfersByWallets,
  fetchPaymentTransfersByWallets,
  fetchSystemTransfersByWallets,
  fetchWithdrawSystemTransfersByWallets,
} from './utils';

const LIMIT = 20;

export const useTransfer = (transferWallets: string[]) => {
  const [state, setState] = useState<TransferState>({
    tab: 0,
    loading: true,
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
    if (isEmpty(transferWallets)) {
      return;
    }
    fetchPaymentTransfers();
    // fetchSystemTransfers();
    // fetchWithdrawSystemTransfers();
    // fetchIssueSystemTransfers();
  }, [transferWallets]);
  //PaymentTransfers
  const fetchPaymentTransfers = async () => {
    const { jsClient } = await import('js-core');
    const data = await fetchPaymentTransfersByWallets({
      address: transferWallets,
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
  // const fetchSystemTransfers = async () => {
  //   const { jsClient } = await import('js-core');
  //   const data = await fetchSystemTransfersByWallets({
  //     address: transferWallets,
  //     limit: LIMIT + 1,
  //     offset: state.system.offsetCount,
  //   });
  //   const newItems = R.uniq([
  //     ...state.system.data,
  //     ...formatTransfer(data, jsClient),
  //   ]);
  //   const stateChange = {
  //     system: {
  //       data: newItems,
  //       hasNextPage: data.transfers.length === 21,
  //       isNextPageLoading: false,
  //       offsetCount: state.system.offsetCount + LIMIT,
  //     },
  //   };
  //   handleSetState(stateChange);
  // };
  //IssueSystemTransfers
  // const fetchIssueSystemTransfers = async () => {
  //   const { jsClient } = await import('js-core');
  //   const data = await fetchIssueSystemTransfersByWallets({
  //     address: transferWallets,
  //     limit: LIMIT + 1,
  //     offset: state.issueSystem.offsetCount,
  //   });
  //   const newItems = R.uniq([
  //     ...state.issueSystem.data,
  //     ...formatTransfer(data, jsClient),
  //   ]);
  //   const stateChange = {
  //     issueSystem: {
  //       data: newItems,
  //       hasNextPage: data.transfers.length === 21,
  //       isNextPageLoading: false,
  //       offsetCount: state.issueSystem.offsetCount + LIMIT,
  //     },
  //   };
  //   handleSetState(stateChange);
  // };
  //WithdrawSystemTransfers
  // const fetchWithdrawSystemTransfers = async () => {
  //   const { jsClient } = await import('js-core');
  //   const data = await fetchWithdrawSystemTransfersByWallets({
  //     address: transferWallets,
  //     limit: LIMIT + 1,
  //     offset: state.withdrawSystem.offsetCount,
  //   });
  //   const newItems = R.uniq([
  //     ...state.withdrawSystem.data,
  //     ...formatTransfer(data, jsClient),
  //   ]);
  //   const stateChange = {
  //     withdrawSystem: {
  //       data: newItems,
  //       hasNextPage: data.transfers.length === 21,
  //       isNextPageLoading: false,
  //       offsetCount: state.withdrawSystem.offsetCount + LIMIT,
  //     },
  //   };
  //   handleSetState(stateChange);
  // };

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });

    // refetch query
    if (state.tab === 0) {
      fetchPaymentTransfers();
    }
    // if (state.tab === 1) {
    //   fetchSystemTransfers();
    // }
    // if (state.tab === 2) {
    //   // fetchWithdrawSystemTransfers();
    // }
    // if (state.tab === 3) {
    //   // fetchIssueSystemTransfers();
    // }
  };
  const sortItems = () => {
    let items;

    if (state.tab === 0) {
      items = state.payment;
    }

    if (state.tab === 1) {
      items = state.system;
    }

    // if (state.tab === 2) {
    //   items = state.withdrawSystem;
    // }
    // if (state.tab === 3) {
    //   items = state.issueSystem;
    // }

    return items;
  };
  const handleTabChange = (_event: any, newValue: number) => {
    setState(prevState => ({
      ...prevState,
      tab: newValue,
    }));
  };

  const formatTransfer = (data: any, jsClient) => {
    let formattedData = data.transfers;
    if (!formattedData) {
      return;
    }
    return formattedData.map(item => {
      return {
        ...item,
        amount: roundToFixed(item.amount, 8),
        kind: jsClient.transferKindToJSON(item.kind),
        walletFrom: item.wallets?.wallet_from ?? '',
        walletTo: item.wallets?.wallet_to ?? '',
        wallet: item.wallets?.wallet,
        height: item.block[0].height,
        hash: item.tx_hash,
      };
    });
  };

  return {
    state,
    loadNextPage,
    sortItems,
    handleTabChange,
  };
};
