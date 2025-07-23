'use client'
import Image from "next/image";
import { ModeToggle } from "./themetoggle";
import {motion} from "motion/react"
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const {resolvedTheme} = useTheme()
  return (
    <motion.nav
    initial={{
      y:-100,
      opacity:0
    }}
    animate={{
      y: 0,
      opacity : 1
    }}
    transition={{
      delay : 0.3,
      duration:0.3,
      ease: "easeIn"
    }}
    className="max-w-[90%] m-auto p-4 pt-6 border border-b-neutral-400 shadow-[0px_16px_0px_-7px_rgba(0,_0,_0,_0.8)]">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2 font-poppins text-2xl font-medium">
          {/* <Image src={resolvedTheme === "light" ? '/logo.png' : '/logo_white.png'} width={800} height={800} alt="logo" className="w-8 h-8" /> */}
          <span>ChainReceipts</span></div>
        <div className="relative flex items-center gap-4 cursor-pointer">
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
