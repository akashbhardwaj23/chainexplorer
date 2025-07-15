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

type Type = "Ethereum" | "Solana";

export function CardComponent({
  name,
  className,
}: {
  name: Type;
  className?: string;
}) {
  const formatTime = (seconds: number) => {
    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minutes`;
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return `${hours} hours`;
    } else {
      const days = Math.floor(seconds / 86400);
      return `${days} days`;
    }
  };

  if (name === "Ethereum") {
    const { error, isLoading, data } = useEthereumPrice();
    const { blockLoading, blocksData } = useEthereumBlocks();

    if (isLoading || blockLoading) {
      return <div>loading</div>;
    }

    return (
      <CardContainer className={`${className} rounded-none`}>
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="flex text-xl font-bold gap-2">
            Ethereum     <IconCurrencyEthereum className="w-6 h-6" />
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-lg max-w-sm mt-2 shadow p-4 dark:p-2"
          >
            <div className="flex items-center gap-4">
              <p className="flex gap-2">
                {" "}
                Price :{" "}
                <p className="text-green-500/80">
                  {" "}
                  ${Number(data?.value.value).toFixed(2)}
                </p>
              </p>
              <p className="flex justify-center items-center gap-2">
                <Fuel className="w-6 h-6" /> Gas :{" "}
                <p className="text-blue-500/80 dark:text-blue-400/80 ">
                  {" "}
                  {Number(data?.currentGasPrice).toFixed(3).toString()} Gwei
                </p>
              </p>
            </div>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-muted-foreground">
                  <TableHead className="text-left p-2">Latest 5 Block</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {blocksData?.map((val) => (
                  <TableRow key={val.blockTime}>
                    <TableCell className="font-medium flex items-center p-2">
                      <div className="p-2 flex justify-center items-center shadow-sm dark:bg-gray-800 rounded-lg mr-2">
                        <Package />
                      </div>{" "}
                      <div className="flex flex-col">
                        {val.value}
                        <span className="text-sm text-muted-foreground">
                          {formatTime((Date.now() - val.blockTime) / 1000)}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  }

  if (name === "Solana") {
    const { error, data, isLoading } = useSolanaPrice();

    const { blocksData, blocksLoading } = useSolanaBlocks();

    if (isLoading || blocksLoading) {
      return <div>Loading</div>;
    }

    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="flex text-xl font-bold gap-2">
            Solana <IconCurrencySolana className="w-6 h-6" />
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-lg max-w-sm mt-2 shadow p-4"
          >
            <div className="flex items-center gap-2">
              Curculating Sol :{" "}
              <p className="font-bold text-green-500/80">
                {" "}
                ${Math.floor(Number(data?.value.circulating) / 10 ** 9)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              Non Circulating Sol :{" "}
              <span className="font-bold text-green-700/80 dark:text-green-300/80 ">
                $ {Math.floor(Number(data?.value.nonCirculating) / 10 ** 9)}
              </span>
            </div>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-muted-foreground">
                  <TableHead className="text-left p-2">Latest 5 Block</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {blocksData?.map((val, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium flex items-center p-2">
                      <div className="p-2 flex justify-center items-center shadow-sm dark:bg-gray-800 rounded-lg mr-2">
                        <Package />
                      </div>{" "}
                      <div className="flex flex-col text-green-700/80 dark:text-green-500/70">
                        {val.value}
                        <span className="text-sm text-muted-foreground">
                          {formatTime(
                            (Date.now() - Number(val.blockTime)) / 1000
                          )}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  }
}
