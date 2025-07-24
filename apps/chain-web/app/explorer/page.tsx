import { EthereumCard, SolanaCard } from "../../components/blockcard";



export default function Explorer(){
    return(
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl mb-2">Solana</h1>
                <div className="grid grid-cols-5 border border-foreground h-[30rem] mb-10 shadow-[-4px_4px_10px_0px_rgba(0,_0,_0,_0.8)]">
                    <div className="col-span-2 border-r-2 border-foreground overflow-y-hidden">
                        <SolanaCard />
                    </div>
                    <div className="">

                    </div>
                </div>
                <h1 className="text-2xl mb-2">Ethereum</h1>
                <div className="grid grid-cols-5 border border-foreground h-[30rem] shadow-[-4px_4px_10px_0px_rgba(0,_0,_0,_0.8)]">
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