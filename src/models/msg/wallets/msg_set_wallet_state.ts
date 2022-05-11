class MsgSetWalletState {
  public type: string;
  public creator: string;
  public address: string;
  public json: any;
  public state: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.address = payload.address;
    this.state = payload.state;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetWalletState({
      json,
      type: json['@type'],
      creator: json['creator'],
      address: json['address'],
      state: json['state'],
    });
  }
}

export default MsgSetWalletState;
