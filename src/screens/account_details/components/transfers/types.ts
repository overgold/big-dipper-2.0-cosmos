export type TransactionState = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  offsetCount: number;
  data: Transactions[];
};
export type TransferState = {
  payment: TransactionState;
  system: TransactionState;
  withdrawSystem: TransactionState;
  issueSystem: TransactionState;
};
