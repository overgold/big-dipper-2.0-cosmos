import { chainConfig } from '@configs';

import { formatToken } from '@utils/format_token';

import * as R from 'ramda';

import { Categories } from '../types';

class MsgClaimReward {
  public category: Categories;
  public type: string;
  public address: string;
  public creator: string;
  public amounts: TokenUnit[];
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.address = payload.address;
    this.amounts = payload.amounts;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static getRewardDetails(log: any) {
    const rewardEvents = R.pathOr([], ['events'], log).filter(
      x => x.type === 'transfer'
    );

    const rewardAddress = R.pathOr([], [0, 'attributes'], rewardEvents).filter(
      x => x.key === 'sender'
    );

    const rewardAmounts = R.pathOr([], [0, 'attributes'], rewardEvents).filter(
      x => x.key === 'amount'
    );

    const address = R.pathOr('', [0, 'value'], rewardAddress);

    const amounts = R.pathOr('0', [0, 'value'], rewardAmounts)
      .split(',')
      .map(x => {
        const [amount, denom] = x.match(/[a-z]+|[^a-z]+/gi);

        return formatToken(amount, denom);
      });

    return { amounts, address };
  }

  static fromJson(json: any, log?: any) {
    const { amounts, address } = this.getRewardDetails(log);

    return new MsgClaimReward({
      json,
      type: json['@type'],
      creator: json['creator'],
      amounts,
      address,
    });
  }
}

export default MsgClaimReward;
