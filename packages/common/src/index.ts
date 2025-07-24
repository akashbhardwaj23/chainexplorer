import { VersionedBlockResponse } from "@solana/web3.js"

export type SymbolType = "ETH" | "SOL"

export interface CurrentPriceType {
    symbol : string
    prices : [
        {
            currency : string
            value : string
            lastUpdatedAt : string
        }
    ]
}

export interface EthBlocksType {
    value : EthResult
    blockTime : number
}

export interface SolBlocksType {
    value : VersionedBlockResponse,
    blockTime : number
}

export interface ResultType {
  jsonrpc: string
  id: string
  result: EthResult
}

export interface EthResult {
  number: string
  hash: string
  mixHash: string
  parentHash: string
  nonce: string
  sha3Uncles: string
  logsBloom: string
  transactionsRoot: string
  stateRoot: string
  receiptsRoot: string
  miner: string
  difficulty: string
  totalDifficulty: string
  extraData: string
  size: string
  gasLimit: string
  gasUsed: string
  timestamp: string
  uncles: any[]
  transactions: string[]
  baseFeePerGas: string
  withdrawalsRoot: string
  withdrawals: Withdrawal[]
  blobGasUsed: string
  excessBlobGas: string
  parentBeaconBlockRoot: string
}

export interface Withdrawal {
  index: string
  validatorIndex: string
  address: string
  amount: string
}
