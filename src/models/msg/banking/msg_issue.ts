interface MsgIssueExtra {
  kind: number;
  data: string;
}

class MsgIssue {
  public type: string;
  public amount: number;
  public asset: string;
  public creator: string;
  public extras: MsgIssueExtra[];
  public wallet: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.asset = payload.asset;
    this.creator = payload.creator;
    this.extras = payload.extras;
    this.wallet = payload.wallet;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgIssue({
      json,
      type: json['@type'],
      asset: json['asset'],
      creator: json['creator'],
      amount: json['amount'],
      extras: json['extras'],
      wallet: json['wallet'],
    });
  }
}

export default MsgIssue;
