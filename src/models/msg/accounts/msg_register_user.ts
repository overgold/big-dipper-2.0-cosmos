interface MsgRegisterUserExtra {
  data: string;
  kind: number;
}

class MsgRegisterUser {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public holder_wallet: string;
  public holder_wallet_extras: MsgRegisterUserExtra[];
  public public_key: string;
  public ref_reward_wallet_extras: MsgRegisterUserExtra[];
  public ref_reward_wallet: string;
  public referrer_hash: string;
  public address: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.json = payload.json;
    this.holder_wallet = payload.holder_wallet;
    this.holder_wallet_extras = payload.holder_wallet_extras;
    this.public_key = payload.public_key;
    this.ref_reward_wallet_extras = payload.ref_reward_wallet_extras;
    this.ref_reward_wallet = payload.ref_reward_wallet;
    this.referrer_hash = payload.referrer_hash;
    this.address = payload.address;
  }

  static fromJson(json: any) {
    return new MsgRegisterUser({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      holder_wallet: json['holder_wallet'],
      holder_wallet_extras: json['holder_wallet_extras'],
      public_key: json['public_key'],
      ref_reward_wallet_extras: json['ref_reward_wallet_extras'],
      ref_reward_wallet: json['ref_reward_wallet'],
      referrer_hash: json['referrer_hash'],
      address: json['address'],
    });
  }
}

export default MsgRegisterUser;
