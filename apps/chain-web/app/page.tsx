"use client"
import { IconCurrencyEthereum, IconCurrencySolana } from "@tabler/icons-react";
import { motion } from "motion/react";
import Videocard from "../components/sections/videocard";
import Features from "../components/sections/feature";

export default function Home() {
  return (
    <div className="h-full relative mt-40">
      <div className="max-w-4xl flex flex-col justify-center items-center gap-10 mx-auto h-full">
        {/* <div className="h-80 w-[90%] absolute -top-40 clip drop-shadow-[0_0px_200px_rgba(255,255,255,1)]">

        </div> */}
        <motion.h2 className="text-7xl font-semibold max-w-4xl ml-8">Your One Stop Solution for All your <motion.span animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }} className="bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-blue-600">BlockChain Scanning Solution</motion.span></motion.h2>
          <button className="bg-foreground text-background text-2xl px-4 py-2 shadow-[10px_12px_0px_0px_rgba(0,_0,_0,_0.8)] cursor-pointer">Get Started</button>
        <motion.div animate={{
          scale: [1, 0.95, 1]
        }} transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "loop"
        }} className="absolute right-40 top-40 rotate-[30deg] border-2 border-foreground shadow-[19px_20px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <IconCurrencySolana className="w-60 h-60" />
        </motion.div>

        <motion.div animate={{
          scale: [1, 0.95, 1]
        }} transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "loop"
        }} className="absolute left-12 -top-20 -rotate-[20deg] border-2 border-foreground shadow-[-19px_20px_0px_0px_rgba(0,_0,_0,_0.8)]">
          <IconCurrencyEthereum className="w-60 h-60" />
        </motion.div>
      </div>
      <Videocard />
      <Features />
    </div>
  );
}
