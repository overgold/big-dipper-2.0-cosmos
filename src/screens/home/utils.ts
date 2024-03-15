import axios from 'axios';

import * as R from 'ramda';

import { FetchStatus } from './types';

export const fetchStatus = async ({ startDate, endDate }: FetchStatus) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_WALLET_API}/api/stats/asset/${startDate}/${endDate}`
    );
    return R.pathOr([], ['stats', 'dailyStats'], data);
  } catch (error) {}
};
