import { formatNumber } from '@utils/format_token';

import Big from 'big.js';

export const formatBalanceData = (data: {
  regular: TokenUnit;
  staked: TokenUnit;
  steakForRansom: TokenUnit;
  refReward: TokenUnit;
  steakReward: TokenUnit;
  total?: TokenUnit;
}) => {
  const balanceChart = [
    {
      key: 'balanceRegular',
      display: `${formatNumber(data.regular.value, data.regular.exponent)} ${data.regular.displayDenom.toUpperCase()}`,
      value: data.regular.value,
    },
    {
      key: 'balanceStaked',
      display: `${formatNumber(data.staked.value, data.staked.exponent)} ${data.staked.displayDenom.toUpperCase()}`,
      value: data.staked.value,
    },
    {
      key: 'balanceStakeForRansom',
      display: `${formatNumber(data.steakForRansom.value, data.steakForRansom.exponent)} ${data.steakForRansom.displayDenom.toUpperCase()}`,
      value: data.steakForRansom.value,
    },
    {
      key: 'balanceRefReward',
      display: `${formatNumber(data.refReward.value, data.refReward.exponent)} ${data.refReward.displayDenom.toUpperCase()}`,
      value: data.refReward.value,
    },
    {
      key: 'balanceStakeReward',
      display: `${formatNumber(data.steakReward.value, data.steakReward.exponent)} ${data.steakReward.displayDenom.toUpperCase()}`,
      value: data.steakReward.value,
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
