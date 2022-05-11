interface MsgAssetSetExtraExtra {
  kind: number;
  data: string;
}

class MsgAssetSetExtra {
  public type: string;
  public creator: string;
  public extras: MsgAssetSetExtraExtra[];
  public name: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.name = payload.name;
    this.extras = payload.extras;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgAssetSetExtra({
      json,
      type: json['@type'],
      creator: json['creator'],
      extras: json['extras'],
      name: json['name'],
    });
  }
}

export default MsgAssetSetExtra;
