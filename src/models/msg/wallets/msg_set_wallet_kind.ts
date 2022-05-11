class MsgSetWalletKind {
  public type: string;
  public creator: string;
  public address: string;
  public json: any;
  public kind: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.address = payload.address;
    this.kind = payload.kind;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetWalletKind({
      json,
      type: json['@type'],
      creator: json['creator'],
      address: json['address'],
      kind: json['kind'],
    });
  }
}

export default MsgSetWalletKind;
