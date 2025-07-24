import axios from "axios";
import {useQuery} from "@tanstack/react-query"
import type {EthBlocksType, SolBlocksType} from "@repo/common/type"

const BACKEND_URL = "http://localhost:8080";

export interface SolanaDataType {
    value : {
        circulating : string,
        nonCirculating : string
    }
}

export function useSolanaPrice() {
  const{ error, data, isLoading } = useQuery({queryKey : ['sol-price'], queryFn : async() => {
    const response = await axios.get(`${BACKEND_URL}/getSolValue`)
    const data:SolanaDataType = response.data
    return data
  }, refetchInterval: 10000})

  return {
    isLoading,
    error,
    data
  };
}


export function useSolanaBlocks(){
    const {error, data, isLoading} = useQuery({queryKey : ['sol-blocks'], queryFn : async () => {
        const response = await axios.get(`${BACKEND_URL}/getSolBlocks`)
        
        const data : SolBlocksType[]  = response.data.blocks;

        return data

    }, refetchInterval : 2000})

    return {
        blocksData : data,
        blocksLoading : isLoading
    }
}

export interface EthereumDataType {
  currency: string;
  lastUpdatedAt: Date;
  value: string;
}


export function useEthereumPrice(){
    const {error, data, isLoading} = useQuery({queryKey : ['eth-price'], queryFn : async () => {
        const response = await axios.get(`${BACKEND_URL}/getEthValue/ETH`);
        const value:EthereumDataType = response.data.data;
        const currentGasPrice = (response.data.currentGasPrice)/10**9;

        return {
            value,
            currentGasPrice
        }
    } , refetchInterval : 10000})


    console.log(data?.value.value)

    return {
        data,
        isLoading,
        error
    }
}



export function useEthereumBlocks() {
    const {error, isLoading, data} = useQuery({queryKey : ["eth-blocks"], queryFn : async () => {
        const response = await axios.get(`${BACKEND_URL}/getEthBlocks`)
        const data : EthBlocksType[] = response.data.blocks
        return data;
    }, refetchInterval: 2000})


  return {
    blockLoading : isLoading,
    blocksData : data,
  };
}
