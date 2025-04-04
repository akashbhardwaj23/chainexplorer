import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { getCurrentEthGasPrice, getEthCurrentPrice, getLatestEthBlockNumber } from "./lib";
import type { EthBlocksType, SolBlocksType } from "./type";
import { getLatestSolanaBlock, getSolanaTokenSupply } from "./solana";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const ethBlocks: EthBlocksType[] = [];


const solBlocks: SolBlocksType[] = []

app.get("/getEthBlocks", async (req, res) => {
  const blockNumber = await getLatestEthBlockNumber()

  console.log(blockNumber)

  if(ethBlocks.find((block) => block.value === Number(blockNumber).toString())){
    res.json({
      message : "Block Already present",
      blocks : ethBlocks
    })
    return
  }
  if (ethBlocks.length > 5) {
    ethBlocks.pop();
  }
  ethBlocks.unshift({
    value : Number(blockNumber).toString(),
    blockTime : Date.now()
  });

  res.json({
    blockNumber,
    blocks : ethBlocks
  });
});


app.get("/getSolBlocks", async (req, res) => {
    const slotNumber = await getLatestSolanaBlock();


    if(solBlocks.find((block) => block.value === slotNumber.toString())){
      res.json({
        message : "Block Already Present",
        blocks : solBlocks
      })
      return
    }

    if(solBlocks.length > 5){
      solBlocks.pop()
    }

    solBlocks.unshift({
      value : slotNumber.toString(),
      blockTime : Date.now()
    })

    res.json({
      slotNumber,
      blocks : solBlocks
    })
})

app.get("/getEthValue/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  //@ts-ignore
  const data = await getEthCurrentPrice(symbol)
  const currentGasPrice = await getCurrentEthGasPrice()

  res.json({
    data,
    currentGasPrice
  });
});


app.get("/getSolValue", async (req, res) => {
  const value = await getSolanaTokenSupply();

    res.json(value)
})


app.listen(process.env.PORT || 8080, () => {
  console.log(`Server Running at Port ${process.env.PORT}`);
});

// app.get("/getTransaction/:blockchain", (req, res) => {
//   const blockchain = req.params.blockchain;

//   if (blockchain === "Ethereum") {
//     ws.onopen = (e) => {
//       ws.send(
//         JSON.stringify({
//           id: 1,
//           jsonrpc: "2.0",
//           method: "eth_subscribe",
//           params: ["alchemy_minedTransactions"],
//         })
//       );
//     };
//   }

//   if (ws.OPEN){
//     ws.onmessage = (e) => {
//       const data = e.data;
//       const parsedData = JSON.parse(data);

//     }
//   }
// });
