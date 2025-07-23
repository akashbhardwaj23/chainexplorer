'use client'
import Image from "next/image";
import { useTheme } from "../hooks/useTheme";

export default function Footer(){
    const {resolvedTheme} = useTheme()
    return (
        <footer className="h-64 border-t-2 border-foreground">
                <div className="p-8 text-foreground">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center gap-4">
                            <Image src={resolvedTheme === "light" ? "/logo_white.png":"/logo.png"} width={800} height={800} alt="logo" className="w-10 h-10 rotate-6 shadow-[4px_4px_0px_0px_rgba(255,_255,_255,_1)]" />
                        <h1 className="text-2xl font-semibold">Chain Explorer</h1>
                    </div>
                        <div className="flex my-4 text-sm">
                           The best BlockChain Tracker Possible
                        </div>

                        <div className="flex items-center justify-between gap-10 mb-4">
                            <p>PRIVACY</p>
                            <p>TERMS</p>
                            <p>SUPPORT</p>
                            <p>API</p>
                            <p>STATUS</p>
                        </div>
                        <div className="flex justify-center items-center">
                            @{new Date().getFullYear()} Built for Everyone
                        </div>
                    </div>
                </div>
        </footer>
    )
}