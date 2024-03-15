import { useState, useEffect } from 'react';
import * as R from 'ramda';
import dayjs from 'dayjs';
import { fetchStatus } from '../../utils';
import Decimal from 'decimal.js';
import { roundToFixed } from '@src/utils/coinFormatting';
import { SwitcherType } from './types';

interface Consensus {
  statsPeriod: SwitcherType;
}

export const useStats = ({ statsPeriod }: Consensus) => {
  const [state, setState] = useState<{
    turnover: string;
    totalTransaction: string;
    feeCollected: string;
  }>({
    turnover: '0',
    totalTransaction: '0',
    feeCollected: '0',
  });

  useEffect(() => {
    fetchStats(statsPeriod);
  }, [statsPeriod]);

  const fetchStats = async (period: string) => {
    let startDate;
    const endDate = dayjs().format('YYYY-MM-DD');

    switch (period) {
      case 'day':
        startDate = dayjs().subtract(1, 'd').format('YYYY-MM-DD');
        break;
      case 'week':
        startDate = dayjs().subtract(1, 'w').format('YYYY-MM-DD');
        break;
      case 'month':
        startDate = dayjs().subtract(1, 'M').format('YYYY-MM-DD');
        break;

      default:
        break;
    }
    const data = await fetchStatus({ startDate, endDate });
    return formatNewStats(data);
  };

  const formatNewStats = data => {
    const amountWithFee =
      R.pathOr('0', ['amountWithFee'], data)?.find(
        item => item.denom === process.env.NEXT_PUBLIC_ASSET
      )?.amount || '0';

    const amountNoFee =
      R.pathOr('0', ['amountNoFee'], data)?.find(
        item => item.denom === process.env.NEXT_PUBLIC_ASSET
      )?.amount || '0';

    const turnover =
      roundToFixed(new Decimal(amountWithFee).plus(amountNoFee), 2) || '0';
    const totalTransaction = new Decimal(R.pathOr('0', ['countWithFee'], data))
      .plus(R.pathOr('0', ['countNoFee'], data))
      .toString();

    const feeCollected =
      roundToFixed(
        R.pathOr('0', ['fee'], data).find(
          item => item.denom === process.env.NEXT_PUBLIC_ASSET
        ).amount,
        2
      ) || '0';

    setState(prevState => ({
      ...prevState,
      turnover,
      totalTransaction,
      feeCollected,
    }));
  };

  return {
    state,
  };
};
