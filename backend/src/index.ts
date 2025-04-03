import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { getCurrentPrice, getLatestBlockNumber } from "./lib";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const blocks: Number[] = [];

app.get("/getBlocks", async (req, res) => {
  const blockNumber = await getLatestBlockNumber();

  if (blocks.length > 20) {
    blocks.pop();
    blocks.push(blockNumber);
  }

  res.json({
    blockNumber,
    blocks
  });
});

app.get("/getValue/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  //@ts-ignore
  const data = getCurrentPrice(symbol);

  res.json({
    data,
  });
});

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
