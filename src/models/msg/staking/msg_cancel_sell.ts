class MsgCancelSell {
  public type: string;
  public amount: number;
  public creator: string;
  public denom: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.creator = payload.creator;
    this.denom = payload.denom;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgCancelSell({
      json,
      type: json['@type'],
      amount: json['amount'].amount,
      denom: json['amount'].denom,
      creator: json['creator'],
    });
  }
}

export default MsgCancelSell;
