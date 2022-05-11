interface MsgAssetCreateProperties {
  precision: string;
  fee_percent: string;
}

interface MsgAssetCreateExtra {
  kind: number;
  data: string;
}

class MsgAssetCreate {
  public type: string;
  public creator: string;
  public issuer: string;
  public name: string;
  public json: any;
  public policies: string[];
  public state: string;
  public properties: MsgAssetCreateProperties;
  public extras: MsgAssetCreateExtra[];

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.issuer = payload.issuer;
    this.name = payload.name;
    this.policies = payload.policies;
    this.state = payload.state;
    this.properties = payload.properties;
    this.extras = payload.extras;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgAssetCreate({
      json,
      type: json['@type'],
      creator: json['creator'],
      issuer: json['issuer'],
      name: json['name'],
      policies: json['policies'],
      state: json['state'],
      properties: json['properties'],
      extras: json['extras'],
    });
  }
}

export default MsgAssetCreate;
