export type TransferType = {
  id: number,
  amount: number,
  asset: string,
  kind: string,
  timestamp: string,
  walletFrom?: string,
  walletTo?: string,
  wallet?: string,
  height: number,
  hash: string,
};
export type TransactionsListState = {
  className?: string;
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  loadNextPage?: (any) => void;
  loadMoreItems?: (any) => void;
  isItemLoaded?: (index: number) => boolean;
  itemCount: number;
  transactions: TransferType[];
  typeTabs?:number;
  walletsData?:any;
};
