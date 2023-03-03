import { TransactionListDetails, TransactionsList, Box } from '@components';

import { Typography } from '@material-ui/core';

import { readTx } from '@recoil/settings';

import React from 'react';

import classnames from 'classnames';

import useTranslation from 'next-translate/useTranslation';

import { useRecoilValue } from 'recoil';

import { useTransfer } from './hooks';
import { useStyles } from './styles';

export interface TransferProps {
  className?: string;
}

const Transfers = ({ className }: TransferProps) => {
  const txListFormat = useRecoilValue(readTx);

  const classes = useStyles();
  const { t } = useTranslation('accounts');

  const { state,loadNextPage } = useTransfer();
  console.log("🚀 ~ file: index.tsx:29 ~ Transfers ~ state:", state)

  // const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  // const isItemLoaded = index => !state.hasNextPage || index < state.data.length;
  // const itemCount = state.hasNextPage
  //   ? state.data.length + 1
  //   : state.data.length;

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">{t('transfers')}</Typography>
      {/* <div className={classes.list}>
          <TransactionsList
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
          </div> */}
      {/* <div className={classes.list}>
        {txListFormat === 'compact' ? (
          <TransactionsList
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        ) : (
          <TransactionListDetails
            transactions={state.data}
            itemCount={itemCount}
            hasNextPage={state.hasNextPage}
            isNextPageLoading={state.isNextPageLoading}
            loadNextPage={loadNextPage}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          />
        )}
      </div> */}
    </Box>
  );
};

export default Transfers;
