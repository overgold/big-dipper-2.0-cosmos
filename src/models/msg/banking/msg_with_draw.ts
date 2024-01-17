class MsgWithdraw {
  public type: string;
  public amount: number;
  public asset: string;
  public creator: string;
  public address: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.asset = payload.asset;
    this.creator = payload.creator;
    this.address = payload.address;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgWithdraw({
      json,
      type: json['@type'],
      asset: json['denom'],
      creator: json['creator'],
      amount: json['amount'],
      address: json['address'],
    });
  }
}

export default MsgWithdraw;
