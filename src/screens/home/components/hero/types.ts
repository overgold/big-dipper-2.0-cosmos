export type TokenPriceType = {
  time: string;
  value: number;
};

export type HeroState = {
  loading: boolean;
  exists: boolean;
  tokenPriceHistory: TokenPriceType[];
};

export interface ChartData {
  name: number;
  value: number;
  a: number;
  b: number;
  c?: number;
}

export enum SwitcherType {
  price = 'price',
  capitalization = 'capitalization',
}
