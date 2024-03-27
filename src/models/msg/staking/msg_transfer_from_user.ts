class MsgTransferFromUser {
  public type: string;
  public amount: number;
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

  static fromJson(json: any) {
    return new MsgTransferFromUser({
      json,
      type: json['@type'],
      amount: json['amount'],
      address: json['address'],
      creator: json['creator'],
    });
  }
}

export default MsgTransferFromUser;
