export interface IHome {
  data:
    | {
        id: number;
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
      }[]
    | [];
}
