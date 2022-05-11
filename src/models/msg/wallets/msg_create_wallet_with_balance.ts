interface MsgCreateWalletWithBalanceExtra {
  data: string;
  kind: number;
}

interface MsgCreateWalletWithBalanceType {
  denom: string;
  amount: string;
}

class MsgCreateWalletWithBalance {
  public type: string;
  public creator: string;
  public address: string;
  public json: any;
  public state: string;
  public kind: string;
  public account_address: string;
  public extras: MsgCreateWalletWithBalanceExtra[];
  public default: boolean;
  public balance: MsgCreateWalletWithBalanceType[];

  constructor(payload: any) {
    this.type = payload.type;
    this.creator = payload.creator;
    this.address = payload.address;
    this.state = payload.state;
    this.json = payload.json;
    this.kind = payload.kind;
    this.account_address = payload.account_address;
    this.extras = payload.extras;
    this.default = payload.default;
    this.balance = payload.balance;
  }

  static fromJson(json: any) {
    return new MsgCreateWalletWithBalance({
      json,
      type: json['@type'],
      creator: json['creator'],
      address: json['address'],
      state: json['state'],
      kind: json['kind'],
      account_address: json['account_address'],
      extras: json['extras'],
      default: json['default'],
      balance: json['balance'],
    });
  }
}

export default MsgCreateWalletWithBalance;
