interface MsgAssetManageProperties {
  precision: string;
  fee_percent: string;
}

class MsgAssetManage {
  public type: string;
  public creator: string;
  public name: string;
  public json: any;
  public policies: string[];
  public state: string;
  public properties: MsgAssetManageProperties;
  public issued: number;
  public burned: number;
  public withdrawn: number;
  public in_circulation: number;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.name = payload.name;
    this.policies = payload.policies;
    this.state = payload.state;
    this.properties = payload.properties;
    this.issued = payload.issued;
    this.burned = payload.burned;
    this.withdrawn = payload.withdrawn;
    this.in_circulation = payload.in_circulation;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgAssetManage({
      json,
      type: json['@type'],
      creator: json['creator'],
      name: json['name'],
      policies: json['policies'],
      state: json['state'],
      properties: json['properties'],
      issued: json['issued'],
      burned: json['burned'],
      withdrawn: json['withdrawn'],
      in_circulation: json['in_circulation'],
    });
  }
}

export default MsgAssetManage;
