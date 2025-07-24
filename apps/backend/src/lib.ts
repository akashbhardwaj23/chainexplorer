import axios from "axios"
import { ETH_URL_V2 } from "./config"
import type { CurrentPriceType, ResultType, SymbolType } from "@repo/common/type"


export async function getLatestEthBlockNumber() {
    try {
        const response = await axios.post(`${ETH_URL_V2}`, {
            id: "1",
            jsonrpc: "2.0",
            method: "eth_blockNumber"
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = response.data;
        return data.result;
    } catch (error) {
        console.log(error)
        throw error
    }
}


export async function getEthBlockLatest() {
    try {
        const response = await axios.post(`${ETH_URL_V2}`, {
            id: "1",
            jsonrpc: "2.0",
            method: "eth_getBlockByNumber",
            params: [
                "latest",
                true
            ],
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data:ResultType = response.data;



        return data.result
    } catch (error) {
         console.log(error)
        throw error
    }
}

getEthBlockLatest()



export async function getEthBlockTransactions() {
    try {
        const response = await axios.post(`${ETH_URL_V2}`,
            {
                "id": 1,
                "jsonrpc": "2.0",
                "method": "eth_getBlockReceipts",
                "params": ["latest"]
            }, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data: ResultType = response.data;

        // An array of all the transaction in the block
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export async function getEthCurrentPrice(symbol: SymbolType) {
    const response = await axios.get(`https://api.g.alchemy.com/prices/v1/${process.env.ALCHEMY_TOKEN}/tokens/by-symbol?symbols=${symbol}`)

    const data: CurrentPriceType[] = response.data.data;
    const ETH_USD = data.find((val) => {
        const usdValue = val.prices.find(price => {
            if (price.currency === "usd") return price.value
        })

        return usdValue
    })
    return ETH_USD?.prices[0]
}







export async function getCurrentEthGasPrice() {
    const response = await axios.post(`${ETH_URL_V2}`, {
        id: 1,
        jsonrpc: "2.0",
        method: "eth_gasPrice"
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })


    const data = response.data

    return data.result
}