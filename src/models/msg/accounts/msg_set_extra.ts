interface MsgSetExtraType {
  kind: number;
  data: string;
}

class MsgSetExtra {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public extras: MsgSetExtraType[];

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.json = payload.json;
    this.extras = payload.extras;
  }

  static fromJson(json: any) {
    return new MsgSetExtra({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      extras: json['extras'],
    });
  }
}

export default MsgSetExtra;
