import { AccountType } from '@screens/account_details/types';

import { useScreenSize } from '@src/hooks';
import { getMiddleEllipsis } from '@src/utils/get_middle_ellipsis';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';

import { useState } from 'react';

import * as R from 'ramda';

import { isEmpty } from 'lodash';

import Link from 'next/link';

import { affiliatesColumns, kindColumns, walletsColumns } from './utils';

export const useDetailsAccount = () => {
  const { isDesktop } = useScreenSize();
  const [state, setState] = useState({
    loading: true,
    tab: 0,
    items: [],
  });

  const handleTabChange = (_event: any, newValue: number) => {
    setState(prevState => ({
      ...prevState,
      tab: newValue,
    }));
  };

  const sortItems = (items: AccountType, t) => {
    let sorted = R.clone(items);
    let columns = [];

    if (state.tab === 0) {
      sorted = sorted.wallets;
      columns = walletsColumns(t);
    }

    if (state.tab === 1) {
      sorted = sorted.affiliates;
      columns = affiliatesColumns(t);
    }

    if (state.tab === 2) {
      sorted = sorted.kind;
      columns = kindColumns(t);
    }

    return { sorted, columns };
  };
  const formatItem = (item, key) => {
    if (key === 'address') {
      return (
        <Link href={ACCOUNT_DETAILS(item[key])}>
          {!isDesktop
            ? getMiddleEllipsis(item[key], {
                beginning: 15,
                ending: 5,
              })
            
            : item[key]}
        </Link>
      );
    }
    if (key === 'balance') {
      const asset = process.env.NEXT_PUBLIC_ASSET.toUpperCase()
      
      const balance = `${item[key]} ${asset}`
      return balance
    }
    return item[key];
  };

  return {
    state,
    handleTabChange,
    sortItems,
    formatItem,
  };
};
