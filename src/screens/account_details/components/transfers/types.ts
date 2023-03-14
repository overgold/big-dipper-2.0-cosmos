export type TransactionState = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  offsetCount: number;
  data: Transactions[];
};
export type TransferState = {
  tab: number;
  loading: boolean,
  payment: TransactionState;
  system: TransactionState;
  withdrawSystem: TransactionState;
  issueSystem: TransactionState;
};
