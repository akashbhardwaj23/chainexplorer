import { CardComponent } from "../components/card";

export default function Home() {
  return (
    <div className="bg-background relative top-10">
      <div className="w-[85%] flex justify-between m-auto">
        <CardComponent name={"Ethereum"} className="mb-4" />
        <CardComponent name={"Solana"} />
      </div>
    </div>
  );
}
