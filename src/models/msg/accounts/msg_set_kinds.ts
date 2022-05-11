class MsgSetKinds {
  public type: string;
  public creator: string;
  public json: any;
  public hash: string;
  public kinds: number[];

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.hash = payload.hash;
    this.kinds = payload.kinds;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetKinds({
      json,
      type: json['@type'],
      creator: json['creator'],
      hash: json['hash'],
      kinds: json['kinds'],
    });
  }
}

export default MsgSetKinds;
