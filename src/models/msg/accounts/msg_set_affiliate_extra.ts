interface MsgSetAffiliateExtraType {
  kind: number;
  data: string;
}

class MsgSetAffiliateExtra {
  public type: string;
  public creator: string;
  public json: any;
  public account_hash: string;
  public extras: MsgSetAffiliateExtraType[];
  public affiliation_hash: string;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.account_hash = payload.account_hash;
    this.json = payload.json;
    this.affiliation_hash = payload.affiliation_hash;
    this.extras = payload.extras;
  }

  static fromJson(json: any) {
    return new MsgSetAffiliateExtra({
      json,
      type: json['@type'],
      creator: json['creator'],
      account_hash: json['account_hash'],
      affiliation_hash: json['affiliation_hash'],
      extras: json['extras'],
    });
  }
}

export default MsgSetAffiliateExtra;
