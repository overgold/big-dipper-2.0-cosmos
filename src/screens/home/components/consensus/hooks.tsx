import { useState, useEffect } from 'react';
import numeral from 'numeral';
import * as R from 'ramda';
import { hexToBech32 } from '@utils/hex_to_bech32';
import { chainConfig } from '@configs';
import WebSocket from 'isomorphic-ws';
import dayjs from 'dayjs';
import { fetchStatus } from '../../utils';
import Decimal from 'decimal.js';
import { roundToFixed } from '@src/utils/coinFormatting';
import { SwitcherType } from './types';

interface Consensus {
  statsPeriod: SwitcherType;
}

export const useConsensus = ({ statsPeriod }: Consensus) => {
  const [state, setState] = useState<{
    turnover: string;
    totalTransaction: string;
    feeCollected: string;
  }>({
    turnover: '0',
    totalTransaction: '0',
    feeCollected: '0',
  });
  // const [state, setState] = useState<{
  //   height: number;
  //   round: number;
  //   step: number;
  //   totalSteps: number;
  //   roundCompletion: number;
  //   proposer: string;
  // }>({
  //   height: 0,
  //   round: 0,
  //   step: 0,
  //   totalSteps: 5,
  //   roundCompletion: 0,
  //   proposer: '',
  // });

  // const websocketUrl =
  //   process.env.NEXT_PUBLIC_RPC_WEBSOCKET ||
  //   process.env.NEXT_PUBLIC_WS_CHAIN_URL;

  // useEffect(() => {
  //   const client = new WebSocket(websocketUrl);
  //   const stepHeader = {
  //     jsonrpc: '2.0',
  //     method: 'subscribe',
  //     id: 0,
  //     params: {
  //       query: "tm.event='NewRoundStep'",
  //     },
  //   };

  //   const roundHeader = {
  //     jsonrpc: '2.0',
  //     method: 'subscribe',
  //     id: 0,
  //     params: {
  //       query: "tm.event='NewRound'",
  //     },
  //   };

  //   client.onopen = () => {
  //     client.send(JSON.stringify(stepHeader));
  //     client.send(JSON.stringify(roundHeader));
  //   };

  //   client.onmessage = (e: any) => {
  //     const data = JSON.parse(e.data);
  //     const event = R.pathOr('', ['result', 'data', 'type'], data);
  //     if (event === 'tendermint/event/NewRound') {
  //       formatNewRound(data);
  //     }
  //     if (event === 'tendermint/event/RoundState') {
  //       formatNewStep(data);
  //     }
  //   };

  //   client.onclose = () => {
  //     console.log('closing socket');
  //   };

  //   return () => {
  //     client.close();
  //   };
  // }, []);
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

  // const formatNewRound = (data: any) => {
  //   const height = numeral(
  //     R.pathOr('', ['result', 'data', 'value', 'height'], data)
  //   ).value();
  //   const proposerHex = R.pathOr(
  //     '',
  //     ['result', 'data', 'value', 'proposer', 'address'],
  //     data
  //   );
  //   const consensusAddress = hexToBech32(
  //     proposerHex,
  //     chainConfig.prefix.consensus
  //   );

  //   setState(prevState => ({
  //     ...prevState,
  //     height,
  //     proposer: consensusAddress,
  //   }));
  // };

  const formatNewStep = (data: any) => {
    const stepReference = {
      0: 0,
      RoundStepNewHeight: 1,
      RoundStepPropose: 2,
      RoundStepPrevote: 3,
      RoundStepPrecommit: 4,
      RoundStepCommit: 5,
    };

    const round = R.pathOr(0, ['result', 'data', 'value', 'round'], data);
    const step =
      stepReference[R.pathOr(0, ['result', 'data', 'value', 'step'], data)];

    const roundCompletion = (step / state.totalSteps) * 100;

    setState(prevState => ({
      ...prevState,
      round,
      step,
      roundCompletion,
    }));
  };

  return {
    state,
  };
};
