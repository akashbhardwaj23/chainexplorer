
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
    value : string
    blockTime : number
}

export interface SolBlocksType {
    value : string,
    blockTime : number
}
