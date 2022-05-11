interface MsgSetExtraType {
  data: string;
  kind: number;
}

class MsgSetExtraWallet {
  public type: string;
  public creator: string;
  public address: string;
  public extras: MsgSetExtraType[];
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.address = payload.address;
    this.extras = payload.extras;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetExtraWallet({
      json,
      type: json['@type'],
      creator: json['creator'],
      address: json['address'],
      extras: json['extras'],
    });
  }
}

export default MsgSetExtraWallet;
