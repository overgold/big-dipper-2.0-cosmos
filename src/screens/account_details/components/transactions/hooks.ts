import {
  useGetMessagesByAddressQuery,
  GetMessagesByAddressQuery,
} from '@graphql/types';

import { convertMsgsToModels } from '@msg';

import { useState } from 'react';

import * as R from 'ramda';

import { TransactionState } from './types';

const LIMIT = 20;

export const useTransactions = (accountAddress = '') => {
  console.log("🚀 ~ file: hooks.ts:17 ~ useTransactions ~ accountAddress:", accountAddress)
  const [state, setState] = useState<TransactionState>({
    data: [],
    hasNextPage: false,
    isNextPageLoading: false,
    offsetCount: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState(prevState => R.mergeDeepLeft(stateChange, prevState));
  };

  const transactionQuery = useGetMessagesByAddressQuery({
    variables: {
      limit: LIMIT + 1, // to check if more exist
      offset: 0,
      address: `{${accountAddress}}`,
    },
    onCompleted: data => {
      const itemsLength = data.messagesByAddress.length;
      const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
      const stateChange = {
        data: newItems,
        hasNextPage: itemsLength === 21,
        isNextPageLoading: false,
        offsetCount: state.offsetCount + LIMIT,
      };

      handleSetState(stateChange);
    },
  });
    

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await transactionQuery
      .fetchMore({
        variables: {
          offset: state.offsetCount,
          limit: LIMIT + 1,
        },
      })
      .then(({ data }) => {
        const itemsLength = data.messagesByAddress.length;
        const newItems = R.uniq([...state.data, ...formatTransactions(data)]);
        const stateChange = {
          data: newItems,
          hasNextPage: itemsLength === 21,
          isNextPageLoading: false,
          offsetCount: state.offsetCount + LIMIT,
        };
        handleSetState(stateChange);
      });
  };

  const formatTransactions = (data: GetMessagesByAddressQuery) => {
    let formattedData = data.messagesByAddress;
    if (data.messagesByAddress.length === 21) {
      formattedData = data.messagesByAddress.slice(0, 21);
    }
    return formattedData.map(x => {
      const { transaction } = x;

      // =============================
      // messages
      // =============================
      const messages = convertMsgsToModels(transaction);

      return {
        height: transaction.height,
        hash: transaction.hash,
        messages: {
          count: messages.length,
          items: messages,
        },
        success: transaction.success,
        timestamp: transaction.block.timestamp,
      };
    });
  };

  return {
    state,
    loadNextPage,
  };
};
