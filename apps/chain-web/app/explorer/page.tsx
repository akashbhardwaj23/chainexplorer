import { EthereumCard, SolanaCard } from "../../components/blockcard";



export default function Explorer(){
    return(
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl">Solana</h1>
                <div className="grid grid-cols-5 border border-foreground h-[35rem] mb-10">
                    <div className="col-span-2 border-r-2 border-foreground overflow-y-hidden">
                        <SolanaCard />
                    </div>
                    <div className="">

                    </div>
                </div>
                <h1 className="text-2xl">Ethereum</h1>
                <div className="grid grid-cols-5 border border-foreground h-[35rem]">
                    <div className="col-span-2 border-r-2 border-foreground overflow-y-hidden">
                        <EthereumCard />
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}