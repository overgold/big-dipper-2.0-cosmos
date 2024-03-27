class MsgSquashHistory {
  public type: string;
  public creator: string;
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSquashHistory({
      json,
      type: json['@type'],
      creator: json['creator'],
    });
  }
}

export default MsgSquashHistory;
