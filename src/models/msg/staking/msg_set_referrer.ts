import { Categories } from '../types';

class MsgSetReferrer {
  public category: Categories;
  public type: string;
  public creator: string;
  public referralAddress: string;
  public referrerAddress: string;
  public json: any;

  constructor(payload: any) {
    this.category = 'distribution';
    this.type = payload.type;
    this.referralAddress = payload.referralAddress;
    this.referrerAddress = payload.referrerAddress;
    this.creator = payload.creator;
    this.json = payload.json;
  }

  static fromJson(json: any, log?: any) {
    return new MsgSetReferrer({
      json,
      type: json['@type'],
      creator: json['creator'],
      referralAddress: json['referralAddress'],
      referrerAddress: json['referrerAddress'],
    });
  }
}

export default MsgSetReferrer;
