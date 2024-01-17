// interface MsgIssueExtra {
//   kind: number;
//   data: string;
// }

class MsgIssue {
  public type: string;
  public amount: number;
  public asset: string;
  public creator: string;
  // public extras: MsgIssueExtra[];
  public address: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.amount = payload.amount;
    this.asset = payload.asset;
    this.creator = payload.creator;
    // this.extras = payload.extras;
    this.address = payload.address;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgIssue({
      json,
      type: json['@type'],
      asset: json['denom'],
      amount: json['amount'],
      creator: json['creator'],
      address: json['address'],
    });
  }
}

export default MsgIssue;
