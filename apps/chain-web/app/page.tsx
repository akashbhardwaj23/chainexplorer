"use client"
import { IconCurrencyEthereum, IconCurrencySolana } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="h-full relative mt-40">
      <div className="w-[85%] flex justify-center items-center m-auto h-full">
        <div className="h-80 w-[90%] absolute -top-40 clip drop-shadow-[0_0px_200px_rgba(255,255,255,1)]">

        </div>
        <motion.h2 className="text-7xl font-semibold max-w-4xl">Your One Stop Solution for All your <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-blue-600">BlockChain Scanning Solution</span></motion.h2>
          <motion.div animate={{
            scale: [1, 0.95, 1],
            opacity: [0.6, 0.8, 0.6],
          }} transition={{
            repeat: Infinity,
            duration: 2,
            repeatType: "loop"
          }} className="absolute right-40 top-40 rotate-[30deg] border border-border">
            <IconCurrencySolana className="w-60 h-60" />
          </motion.div>
      
        <motion.div animate={{
          scale: [1, 0.95, 1],
          opacity: [0.8, 1, 0.8],
        }} transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "loop"
        }} className="absolute left-12 -top-20 -rotate-[20deg] border border-border">
          <IconCurrencyEthereum className="w-60 h-60" />
        </motion.div>
      </div>
 </div>
  );
}
