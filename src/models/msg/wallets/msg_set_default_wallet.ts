class MsgSetDefaultWallet {
  public type: string;
  public creator: string;
  public address: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.address = payload.address;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetDefaultWallet({
      json,
      type: json['@type'],
      creator: json['creator'],
      address: json['address'],
    });
  }
}

export default MsgSetDefaultWallet;
