class MsgSetAffiliateAddress {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public old_address: string;
  public new_address: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.old_address = payload.old_address;
    this.new_address = payload.new_address;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetAffiliateAddress({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      old_address: json['old_address'],
      new_address: json['new_address'],
    });
  }
}

export default MsgSetAffiliateAddress;
