import { formatToken } from '@utils/format_token';

import * as R from 'ramda';

class MsgTransferToUser {
  public type: string;
  public amount: TokenUnit[];
  public creator: string;
  public address: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.creator = payload.creator;
    this.address = payload.address;
    this.json = payload.json;
  }

  static getTransferDetails(log: any) {
    const rewardEvents = R.pathOr([], ['events'], log).filter(
      x => x.type === 'transfer'
    );

    const rewardAddress = R.pathOr([], [0, 'attributes'], rewardEvents).filter(
      x => x.key === 'sender'
    );

    const rewardAmounts = R.pathOr([], [0, 'attributes'], rewardEvents).filter(
      x => x.key === 'amount'
    );

    const addressSend = R.pathOr('', [0, 'value'], rewardAddress);

    const amounts = R.pathOr('0', [0, 'value'], rewardAmounts)
      .split(',')
      .map(x => {
        const [amount, denom] = x.match(/[a-z]+|[^a-z]+/gi);

        return formatToken(amount, denom);
      });

    return { amounts, addressSend };
  }

  static fromJson(json: any, log?: any) {
    const { amounts, addressSend } = this.getTransferDetails(log);

    return new MsgTransferToUser({
      json,
      type: json['@type'],
      amount: amounts,
      address: json['address'],
      creator: addressSend,
    });
  }
}

export default MsgTransferToUser;
