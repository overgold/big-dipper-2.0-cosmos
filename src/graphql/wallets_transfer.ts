//Payment transfers
export const GetPaymentTransfersByWallets = /* GraphQL */ `
  query GetPaymentTransfersByWallets(
    $wallet_address: [String!]
    $limit: Int
    $offset: Int
  ) {
    transfers: overgold_chain_banking_base_transfers(
      where: {
        _or: [
          {
            payment: {
              _or: [
                { wallet_from: { _in: $wallet_address } }
                { wallet_to: { _in: $wallet_address } }
              ]
            }
          }
        ]
      }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      asset
      amount
      kind
      tx_hash
      timestamp
      block: transaction {
        height
      }
      wallets: payment {
        wallet_from
        wallet_to
        fee
      }
    }
  }
`;

//System transfers
export const GetSystemTransfersByWallets = /* GraphQL */ `
  query GetSystemTransfersByWallets(
    $wallet_address: [String!]
    $limit: Int
    $offset: Int
  ) {
    transfers: overgold_chain_banking_base_transfers(
      where: {
        _or: [
          {
            system_transfer: {
              _or: [
                { wallet_from: { _in: $wallet_address } }
                { wallet_to: { _in: $wallet_address } }
              ]
            }
          }
        ]
      }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      asset
      amount
      kind
      tx_hash
      timestamp
      block: transaction {
        height
      }
      wallets: system_transfer {
        wallet_from
        wallet_to
      }
    }
  }
`;
//Issue transfers
export const GetIssueSystemTransfersByWallets = /* GraphQL */ `
  query GetIssueSystemTransfersByWallets(
    $wallet_address: [String!]
    $limit: Int
    $offset: Int
  ) {
    transfers: overgold_chain_banking_base_transfers(
      where: {
        _or: [{ issue: { _or: [{ wallet: { _in: $wallet_address } }] } }]
      }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      asset
      amount
      kind
      tx_hash
      timestamp
      block: transaction {
        height
      }
      wallets: issue {
        wallet
      }
    }
  }
`;

//Withdraw transfers
export const GetWithdrawSystemTransfersByWallets = /* GraphQL */ `
  query GetWithdrawSystemTransfersByWallets(
    $wallet_address: [String!]
    $limit: Int
    $offset: Int
  ) {
    transfers: overgold_chain_banking_base_transfers(
      where: {
        _or: [{ withdraw: { _or: [{ wallet: { _in: $wallet_address } }] } }]
      }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      id
      asset
      amount
      kind
      tx_hash
      timestamp
      block: transaction {
        height
      }
      wallets: withdraw {
        wallet
      }
    }
  }
`;
