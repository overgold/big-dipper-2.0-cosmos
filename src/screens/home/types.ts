export interface PriceHistoryData {
  id: number;
  capitalization: number;
  coinsCap: number;
  fiatCap: number;
  goldCap: number;
  currency: string;
  goldRate: number;
  goldPrice: number;
  price: number;
  priceUp: number;
  priceDown: number;
  priceVCS: number;
  createdAt: number;
  frame: '2021-10-01';
}

export interface IHome {
  data: PriceHistoryData[] | [];
}
