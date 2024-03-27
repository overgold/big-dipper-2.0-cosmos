import { Categories } from '../types';

class MsgBuyRequest {
  public category: Categories;
  public type: string;
  public creator: string;
  public amount: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.amount = payload.amount;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static fromJson(json: any) {
    return new MsgBuyRequest({
      json,
      type: json['@type'],
      creator: json['creator'],
      amount: json['amount'],
    });
  }
}

export default MsgBuyRequest;
