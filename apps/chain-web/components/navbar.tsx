import { ModeToggle } from "./themetoggle";

export default function Navbar() {
  return (
    <nav className="max-w-[90%] m-auto p-4">
      <div className="flex justify-between">
        <div className="flex justify-center font-convergence text-2xl">ChainReceipts</div>

        <div className="relative flex items-center gap-4 cursor-pointer">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
