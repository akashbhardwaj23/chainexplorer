"use client";

import { CardBody, CardContainer, CardItem } from "@repo/ui/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";

import { Fuel, Package } from "lucide-react";
import { IconCurrencyEthereum, IconCurrencySolana } from "@tabler/icons-react";
import {
  useEthereumBlocks,
  useEthereumPrice,
  useSolanaBlocks,
  useSolanaPrice,
} from "../hooks/useChain";
import { formatTime } from "../lib/fomattime";
import { Loading } from "./loading";
import { EthBlocksType, SolBlocksType } from "@repo/common/type";





export function EthereumCard({
  className,
}: {
  className?: string;
}) {
  const { error, isLoading, data } = useEthereumPrice();
  const { blockLoading, blocksData } = useEthereumBlocks();

  if (isLoading || blockLoading) {
    return <Loading />
  }

  return (<div className="h-full w-full">
    <div className="w-full">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <IconCurrencyEthereum className="w-10 h-10" />
        </div>
        <div className="px-2 py-1 border border-foreground mb-4 shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <div className="flex items-center gap-4 text-xl">
            Price :{" "}
            <p className="font-bold text-sky-600/80">
              {" "}
              ${Number(data?.value.value).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <Fuel className="w-8 h-8" /> Gas
            <span className="font-bold text-sky-600/80">
              $ {Number(data?.currentGasPrice).toFixed(3).toString()} Gwei
            </span>
          </div>
        </div>
      </div>
      <div className="text-sm px-4">
        Latest Block
      </div>

      <div className="h-full">
        <table className="w-full text-left text-sm table-auto min-w-max">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">
                <p>Block Hash</p>
              </th>
              <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Slot</th>
              <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Transactions</th>
              <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Time</th>
            </tr>
          </thead>
          <tbody>
            {blocksData?.map((val, index) => (
              <EthereumBlockCard key={index} value={val} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export function SolanaCard() {
  const { error, data, isLoading } = useSolanaPrice();

  const { blocksData, blocksLoading } = useSolanaBlocks();

  if (isLoading || blocksLoading) {
    return <Loading />
  }

  return (
    <div className="h-full w-full cursor-pointer">
      <div className="w-full">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <IconCurrencySolana className="w-10 h-10" />
          </div>
          <div className="px-2 py-1 border border-foreground mb-4 shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)]">
            <div className="flex items-center gap-4 text-xl">
              Curculating Sol :{" "}
              <p className="font-bold text-sky-600/80">
                {" "}
                ${Math.floor(Number(data?.value.circulating) / 10 ** 9)}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xl">
              Non Circulating Sol :{" "}
              <span className="font-bold text-sky-600/80">
                $ {Math.floor(Number(data?.value.nonCirculating) / 10 ** 9)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm px-4">
          Latest Block
        </div>
        <div className="h-full">
          <table className="w-full text-left text-sm table-auto min-w-max">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p>Block Hash</p>
                </th>
                <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Slot</th>
                <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Transactions</th>
                <th className="px-4 py-2 border-b border-blue-gray-100 bg-blue-gray-50">Time</th>
              </tr>
            </thead>
            <tbody>
              {blocksData?.map((val, index) => (
                <SolanaBlockCard key={index} value={val} />
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}



function SolanaBlockCard({
  value
}: {
  value: SolBlocksType
}) {
  return (
    <tr className="h-full overflow-y-hidden p-4 mb-4">
      <td className="p-4 border-b border-blue-gray-50 font-medium flex items-center">
        <div className="flex justify-center items-center shadow-sm dark:bg-neutral-800 rounded-lg mr-2">
          <Package className="w-4 h-4" />
        </div>{" "}
        <div className="flex flex-col text-sky-600/80 dark:text-sky-500/70">
          {value.value.blockhash.slice(0, 10)}...
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p>{value.value.parentSlot}</p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p>{value.value.transactions.length}</p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <span className="text-sm text-muted-foreground">
          {formatTime(
            (Date.now() - Number(value.blockTime)) / 1000
          )}
        </span>
      </td>
      
    </tr>
  )
}


function EthereumBlockCard({
  value
}: {
  value: EthBlocksType
}) {
  return (
    <tr className="h-full overflow-y-hidden cursor-pointer p-4 mb-4">
      <td className="p-4 border-b border-blue-gray-50 font-medium flex items-center">
        <div className="flex justify-center items-center shadow-sm dark:bg-neutral-800 rounded-lg mr-2">
          <Package className="w-4 h-4" />
        </div>{" "}
        <div className="flex flex-col text-blue-600/80 dark:text-blue-500/70">
          {value.value.hash.slice(0,10)}...
        </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p>{value.value.number.toString()}</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p>{value.value.transactions.length}</p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <span className="text-sm text-muted-foreground">
            {formatTime(
              (Date.now() - Number(value.blockTime)) / 1000
            )}
          </span>
        </td>
    </tr>
  )
}