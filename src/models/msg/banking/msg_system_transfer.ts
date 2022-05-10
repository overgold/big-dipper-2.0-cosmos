interface MsgSystemTransferExtra {
  kind: number;
  data: string;
}

class MsgSystemTransfer {
  public type: string;
  public amount: number;
  public asset: string;
  public creator: string;
  public extras: MsgSystemTransferExtra[];
  public wallet_from: string;
  public wallet_to: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.asset = payload.asset;
    this.creator = payload.creator;
    this.extras = payload.extras;
    this.wallet_from = payload.wallet_from;
    this.wallet_to = payload.wallet_to;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSystemTransfer({
      json,
      type: json['@type'],
      asset: json['asset'],
      creator: json['creator'],
      amount: json['amount'],
      extras: json['extras'],
      wallet_from: json['wallet_from'],
      wallet_to: json['wallet_to'],
    });
  }
}

export default MsgSystemTransfer;
