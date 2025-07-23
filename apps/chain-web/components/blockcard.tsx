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
  EthereumBlocksType,
  SolanaBlocksType,
  useEthereumBlocks,
  useEthereumPrice,
  useSolanaBlocks,
  useSolanaPrice,
} from "../hooks/useChain";
import { formatTime } from "../lib/fomattime";
import { Loading } from "./loading";
import { AnimatedList } from "@repo/ui/components/magicui/animated-list";
import { AnimatedListDemo } from "./animatedlist";

type Type = "Ethereum" | "Solana";

export function EthereumCard({
  className,
}: {
  className?: string;
}) {
  const { error, isLoading, data } = useEthereumPrice();
  const { blockLoading, blocksData } = useEthereumBlocks();

  if (isLoading || blockLoading) {
    return <div>Loading...</div>;
  }

  return (<div className="h-full w-full p-4">
      <div className="w-full">
        <div className="flex items-center">
          <IconCurrencyEthereum className="w-10 h-10" />
        </div>
        <div className="px-2 py-1 border-2 border-foreground mb-4 shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <div className="flex items-center gap-4 text-xl">
            Price :{" "}
            <p className="font-bold text-green-500/80">
              {" "}
              ${Number(data?.value.value).toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl">
              <Fuel className="w-8 h-8" /> Gas
            <span className="font-bold text-green-700/80 dark:text-green-300/80 ">
              $ {Number(data?.currentGasPrice).toFixed(3).toString()} Gwei
            </span>
          </div>
        </div>
        <div className="text-sm mb-2">
          Latest Block
        </div>
        <div className="h-full">
        {blocksData?.map((val, index) => (
          <BlockCard key={index} value={val} />
               ))}
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
    <div className="h-full w-full p-4">
      <div className="w-full">
        <div className="flex items-center">
          <IconCurrencySolana className="w-10 h-10" />
        </div>
        <div className="px-2 py-1 border-2 border-foreground mb-4 shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <div className="flex items-center gap-4 text-xl">
            Curculating Sol :{" "}
            <p className="font-bold text-green-500/80">
              {" "}
              ${Math.floor(Number(data?.value.circulating) / 10 ** 9)}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            Non Circulating Sol :{" "}
            <span className="font-bold text-green-700/80 dark:text-green-300/80 ">
              $ {Math.floor(Number(data?.value.nonCirculating) / 10 ** 9)}
            </span>
          </div>
        </div>
        <div className="text-sm mb-2">
          Latest Block
        </div>
        <div className="h-full">
        {blocksData?.map((val, index) => (
          <BlockCard key={index} value={val} />
               ))}
        </div>
      </div>
    </div>
  );
}



function BlockCard({
  value
}: {
  value : SolanaBlocksType | EthereumBlocksType
}){
  return (
          <div className="h-full overflow-y-hidden p-2 border border-foreground">
                   <div className="font-medium flex items-center p-2">
                     <div className="p-2 flex justify-center items-center shadow-sm dark:bg-gray-800 rounded-lg mr-2">
                       <Package />
                     </div>{" "}
                     <div className="flex flex-col text-green-700/80 dark:text-green-500/70">
                       {value.value}
                       <span className="text-sm text-muted-foreground">
                         {formatTime(
                           (Date.now() - Number(value.blockTime)) / 1000
                         )}
                       </span>
                     </div>
                   </div>
                 </div>
  )
}