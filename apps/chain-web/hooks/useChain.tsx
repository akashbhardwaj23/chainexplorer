import axios from "axios";
import { useEffect, useState } from "react";
import {useQuery} from "@tanstack/react-query"

const BACKEND_URL = "http://localhost:8080";




interface SolanaDataType {
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

interface SolanaBlocksType {
    value : string
    blockTime : string
}


export function useSolanaBlocks(){
    const {error, data, isLoading} = useQuery({queryKey : ['sol-blocks'], queryFn : async () => {
        const response = await axios.get(`${BACKEND_URL}/getSolBlocks`)
        
        const data : SolanaBlocksType[]  = response.data.blocks;

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


export interface EthereumBlocksType {
    value : string
    blockTime : number
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
        const data : EthereumBlocksType[] = response.data.blocks
        return data;
    }, refetchInterval: 2000})


  return {
    blockLoading : isLoading,
    blocksData : data,
  };
}
