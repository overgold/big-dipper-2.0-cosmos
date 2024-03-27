import { formatNumber } from '@utils/format_token';

import Big from 'big.js';

export const formatBalanceData = (data: {
  regular: TokenUnit;
  staked: TokenUnit;
  steakForRansom: TokenUnit;
  rewardAmount: TokenUnit;
  stakeAmount: TokenUnit;
  total?: TokenUnit;
}) => {
  const balanceChart = [
    {
      key: 'balanceRegular',
      display: `${formatNumber(
        data.regular.value,
        data.regular.exponent
      )} ${data.regular.displayDenom.toUpperCase()}`,
      value: data.regular.value,
    },
    {
      key: 'balancerewardAmount',
      display: `${formatNumber(
        data.rewardAmount.value,
        data.rewardAmount.exponent
      )} ${data.rewardAmount.displayDenom.toUpperCase()}`,
      value: data.rewardAmount.value,
    },
    // {
    //   key: 'balanceStaked',
    //   display: `${formatNumber(
    //     data.staked.value,
    //     data.staked.exponent
    //   )} ${data.staked.displayDenom.toUpperCase()}`,
    //   value: data.staked.value,
    // },
    {
      key: 'balanceStakeAmount',
      display: `${formatNumber(
        data.stakeAmount.value,
        data.stakeAmount.exponent
      )} ${data.stakeAmount.displayDenom.toUpperCase()}`,
      value: data.stakeAmount.value,
    },
    {
      key: 'balanceStakeForRansom',
      display: `${formatNumber(
        data.steakForRansom.value,
        data.steakForRansom.exponent
      )} ${data.steakForRansom.displayDenom.toUpperCase()}`,
      value: data.steakForRansom.value,
    },
  ];

  // if (data.commission && Big(data.commission.value).gt(0)) {
  //   balanceChart.push({
  //     key: 'balanceCommission',
  //     display: `${formatNumber(data.commission.value, data.commission.exponent)} ${data.commission.displayDenom.toUpperCase()}`,
  //     value: data.commission.value,
  //   });
  // }

  return balanceChart;
};
