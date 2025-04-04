import { CardComponent } from "../components/card";

export default function Home() {
  return (
    <div className="bg-background relative top-10">
      <div className="w-[90%] flex sm:justify-between justify-center gap-4 m-auto">
        <CardComponent name={"Ethereum"} />
        <CardComponent name={"Solana"} />
      </div>
    </div>
  );
}
