interface MsgAddAffiliateExtra {
  data: string;
  kind: number;
}

class MsgAddAffiliate {
  public type: string;
  public creator: string;
  public json: any;
  public account_hash: string;
  public affiliation: number;
  public affiliation_hash: string;
  public extras: MsgAddAffiliateExtra[];

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.account_hash = payload.account_hash;
    this.json = payload.json;
    this.affiliation = payload.affiliation;
    this.affiliation_hash = payload.affiliation_hash;
    this.extras = payload.extras;
  }

  static fromJson(json: any) {
    return new MsgAddAffiliate({
      json,
      type: json['@type'],
      creator: json['creator'],
      account_hash: json['account_hash'],
      affiliation: json['affiliation'],
      affiliation_hash: json['affiliation_hash'],
      extras: json['extras'],
    });
  }
}

export default MsgAddAffiliate;
