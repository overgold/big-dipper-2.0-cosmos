import { Box } from '@components';

import { Typography } from '@material-ui/core';

import { readTx } from '@recoil/settings';

import React from 'react';

import TabsHeader from '@src/screens/account_details/components/accountDetailsTab/tabs';

import classnames from 'classnames';

import useTranslation from 'next-translate/useTranslation';

import { useRecoilValue } from 'recoil';

import { useTransfer } from './hooks';
import { useStyles } from './styles';
import { tabTransfer } from '@src/screens/account_details/utils';
import TransactionsList from './transactions_list';

export interface TransferProps {
  className?: string;
  transferWallets: string[];
}

const Transfers = ({ className, transferWallets }: TransferProps) => {
  const txListFormat = useRecoilValue(readTx);

  const classes = useStyles();
  const { t } = useTranslation('accounts');

  const { state, loadNextPage, sortItems, handleTabChange } =
    useTransfer(transferWallets);

  const items = sortItems();
  const loadMoreItems = items.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = index => !items.hasNextPage || index < items.data.length;
  const itemCount = items.hasNextPage
    ? items.data.length + 1
    : items.data.length;

  const typeTabs = state.tab === 0 || state.tab === 1 ? 1 : 2;

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">{t('transfers')}</Typography>
      <div className={classnames(classes.wrapperTab)}>
        <TabsHeader
          tab={state.tab}
          handleTabChange={handleTabChange}
          tabLabelsHead={tabTransfer}
        />
      </div>
      <div className={classes.list}>
        <TransactionsList
          transactions={items.data}
          itemCount={itemCount}
          hasNextPage={items.hasNextPage}
          isNextPageLoading={items.isNextPageLoading}
          loadNextPage={loadNextPage}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
          typeTabs={typeTabs}
        />
      </div>
    </Box>
  );
};

export default Transfers;
