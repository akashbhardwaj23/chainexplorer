import { SolanaCard } from "../../components/blockcard";



export default function Explorer(){
    return(
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-5 border border-foreground h-[30rem] mb-10">
                    <div className="col-span-2 border-r-2 border-foreground">
                        <SolanaCard />
                    </div>
                    <div className="">

                    </div>
                </div>
                <div className="grid grid-cols-5 border border-foreground h-[30rem]">
                    <div className="col-span-2 border-r-2 border-foreground">

                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}