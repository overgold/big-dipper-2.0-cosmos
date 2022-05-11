interface MsgCreateAccountExtra {
  data: string;
  kind: number;
}

class MsgCreateAccount {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public kinds: string[];
  public state: string;
  public extras: MsgCreateAccountExtra[];
  public address: string;
  public public_key: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.json = payload.json;
    this.kinds = payload.kinds;
    this.state = payload.state;
    this.extras = payload.extras;
    this.address = payload.address;
    this.public_key = payload.public_key;
  }

  static fromJson(json: any) {
    return new MsgCreateAccount({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      kinds: json['kinds'],
      state: json['state'],
      extras: json['extras'],
      address: json['address'],
      public_key: json['public_key'],
    });
  }
}

export default MsgCreateAccount;
