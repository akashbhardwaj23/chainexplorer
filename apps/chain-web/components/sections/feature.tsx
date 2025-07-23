import { Icon, IconCurrencyBitcoin, IconCurrencyEthereum, IconCurrencyReal, IconCurrencySolana, IconProps } from "@tabler/icons-react"
import { motion } from "motion/react"
import { ForwardRefExoticComponent, RefAttributes } from "react"
export default function Features() {

    // TODO : MAKE A COMPONENT OUT OF IT AND USE DRY PRINCIPLES
    return (
        <div className="min-h-screen max-w-6xl mx-auto">
            <div className="flex flex-col gap-10">
                <h1 className="text-5xl font-semibold">Features</h1>
                <div className="grid grid-cols-3 justify-between items-center gap-4">
                    <motion.div whileHover={{
                        scale: 1.05
                    }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className="h-80 w-80 flex flex-col items-center border-2 border-foreground p-4 cursor-pointer shadow-[10px_15px_0px_0px_rgba(0,_0,_0,_0.8)]">
                        <div className="flex justify-center w-fit mb-8 rotate-12 border border-foreground">
                            <IconCurrencySolana className="w-20 h-20" />
                        </div>
                        <ul className="pl-4">
                            <li className="list-disc">Offers Solana Block Details</li>
                            <li className="list-disc">Shows the current Transaction live</li>
                            <li className="list-disc">Makes the Solana Experience Better</li>
                        </ul>
                    </motion.div>
                    <motion.div whileHover={{
                        scale: 1.05
                    }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }} className="h-80 w-80 flex flex-col items-center border-2 border-foreground px-2 py-4 cursor-pointer shadow-[0px_15px_0px_0px_rgba(0,_0,_0,_0.8)]">

                        
                    </motion.div>
                    <motion.div whileHover={{
                        scale: 1.05
                    }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }} className="h-80 w-80 flex flex-col items-center border-2 border-foreground p-4 cursor-pointer shadow-[-10px_15px_0px_0px_rgba(0,_0,_0,_0.8)]">
                        <div className="flex justify-center border border-foreground w-fit mb-8 -rotate-10">
                            <IconCurrencyEthereum className="w-20 h-20" />
                        </div>
                        <ul className="pl-4">
                            <li className="list-disc">Offers Ethereum Block Details</li>
                            <li className="list-disc">Shows the current Transaction live</li>
                            <li className="list-disc">Make the block exploration ride smother</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}



function FeatureCard({
    icon,
    listText
}: {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>,
    listText: string[]
}) {
    return (
        <motion.div whileHover={{
            scale: 1.05
        }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="h-80 w-80 flex flex-col items-center border-2 border-foreground px-2 py-4 shadow-[10px_15px_0px_0px_rgba(0,_0,_0,_0.8)]">
            <div className="flex justify-center border border-border w-fit mb-4 rotate-12">
                <IconCurrencySolana className="w-20 h-20" />
            </div>
            <ul className="pl-4">
                <li className="list-disc">Offers Solana Block Details</li>
                <li className="list-disc">Shows the current Transaction live</li>
                <li className="list-disc">Makes the Solana Experience Better</li>
            </ul>
        </motion.div>
    )
}


const featureItems = [
    {
        icon : IconCurrencySolana,
        texts: [
            'Offers Solana Block Details',
            'Shows the current Transaction live',
            'Makes the Solana Block Exploration Experience Better'
        ]
    },
    {
        icon : IconCurrencyEthereum,
        texts : [
            'Offers Ethereum Block Details',
            'Shows the current Transaction live',
            'Make the block exploration ride smother'
        ]
    }
]