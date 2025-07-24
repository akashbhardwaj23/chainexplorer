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

export async function getLatestSolanaBlockHash(){
  const conn = getConnection();
  const blockHash = await conn.getLatestBlockhash();
}

 async function getCurrentSlotLeader() {
        const connection = getConnection()
        const slotLeader = await connection.getSlotLeader();
        console.log('Current Slot Leader (Public Key):', slotLeader);
        return slotLeader;
    }

    // async function getBlockDetails(){
    //   const conn = getConnection();
    //   const block = await conn.getLatestBlockhash({commitment : "recent"})
    //   console.log("block is ", block)
    // }

    export async function getBlockDetails(){
      const conn = getConnection();
      const slot = await getLatestSolanaBlock();
      const block = await conn.getBlock(slot, { maxSupportedTransactionVersion: 0 });

      return block
      }


  // async function getBlockDetails(){
  //   const conn = getConnection();
  //   const slot = await getLatestSolanaBlock()
  //   const block = await conn.getBlockSignatures(slot)
  //   console.log(block)
  // }
 
  // getBlockDetails()
  // getLatestSolanaBlockHash()


// async function getSolanaFee(connection : Connection){
//     const value = await connection.getRecentPrioritizationFees();
//     console.log(value)
// }

// getSolanaTokenSupply()