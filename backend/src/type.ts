
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
