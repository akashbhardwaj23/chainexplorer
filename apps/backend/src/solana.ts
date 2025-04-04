import { Connection } from "@solana/web3.js";
import { SOLANA_URL_V2 } from "./config";

function getConnection() {
  const connection = new Connection(SOLANA_URL_V2, "confirmed");
  return connection;
}

export async function getLatestSolanaBlock() {
  const connection = getConnection();

  const slot = await connection.getSlot();
  return slot
}

export async function getSolanaTokenSupply() {
  const connection = getConnection();

  const supply = await connection.getSupply({
    commitment: "confirmed",
    excludeNonCirculatingAccountsList: false,
  });

//   const value = await getSolanaFee(connection)

  return {
    value: {
      circulating: supply.value.circulating,
      nonCirculating: supply.value.nonCirculating,
    },
  };
}


// async function getSolanaFee(connection : Connection){
//     const value = await connection.getRecentPrioritizationFees();
//     console.log(value)
// }

// getSolanaTokenSupply()