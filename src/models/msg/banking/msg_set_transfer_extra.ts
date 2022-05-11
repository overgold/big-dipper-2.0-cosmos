interface MsgSetTransferExtraType {
  kind: number;
  data: string;
}

class MsgSetTransferExtra {
  public type: string;
  public id: number;
  public creator: string;
  public extras: MsgSetTransferExtraType[];
  public json: any;

  constructor(payload: any) {
    this.type = payload.type;
    this.id = payload.id;
    this.creator = payload.creator;
    this.extras = payload.extras;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgSetTransferExtra({
      json,
      type: json['@type'],
      creator: json['creator'],
      id: json['id'],
      extras: json['extras'],
    });
  }
}

export default MsgSetTransferExtra;
