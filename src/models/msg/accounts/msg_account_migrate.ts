class MsgAccountMigrate {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public address: string;
  public public_key: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.json = payload.json;
    this.public_key = payload.public_key;
    this.address = payload.address;
  }

  static fromJson(json: any) {
    return new MsgAccountMigrate({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      public_key: json['public_key'],
      address: json['address'],
    });
  }
}

export default MsgAccountMigrate;
