class MsgSetState {
  public type: string;
  public creator: string;
  public json: any;
  public reason: string;
  public state: number;

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.reason = payload.reason;
    this.json = payload.json;
    this.state = payload.state;
  }

  static fromJson(json: any) {
    return new MsgSetState({
      json,
      type: json['@type'],
      creator: json['creator'],
      reason: json['reason'],
      state: json['state'],
    });
  }
}

export default MsgSetState;
