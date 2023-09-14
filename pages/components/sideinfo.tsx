import EthereumPrice from "./EthereumPrice";

interface SideinfoProps {}

const Sideinfo: React.FC<SideinfoProps> = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:flex-auto lg:max-w-xs xl:max-w-sm">
      <div className="w-full bg-grey-900 border border-grey-800 dark:bg-grey-100 dark:border-grey-200 rounded-sm shadow-lg">
        <div className="w-full px-6 py-7 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-1">
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">Symbol</div>
              <div className="text-grey-50 dark:text-grey-950">$U</div>
            </div>
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">Network</div>
              <div className="text-grey-50 dark:text-grey-950">Ethereum</div>
            </div>
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">Total Supply</div>
              <div className="text-grey-50 dark:text-grey-950"><span className="text-grey-800">██████████</span> $U</div>
            </div>
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">IDO Supply</div>
              <div className="text-grey-50 dark:text-grey-950"><span className="text-grey-800">██████████</span> $U</div>
            </div>
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">ETH / USD</div>
              <div className="text-grey-50 dark:text-grey-950"><EthereumPrice /></div>
            </div>
            <div className="flex justify-between">
              <div className="text-grey-500 dark:text-grey-600">Uranium U308 FUTURES</div>
              <div className="text-grey-50 dark:text-grey-950">$59.45</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-grey-900 border border-grey-800 dark:bg-grey-100 dark:border-grey-200 rounded-sm shadow-lg">
        <div className="w-full px-6 py-7 flex flex-col gap-6">
          <div className="text-grey-500">Purchasing guide</div>
          <div>
            <div className="text-grey-50 font-semibold">Commit ETH</div>
            <div className="text-turquoise-500"><span className="text-grey-800">█████████████</span></div>
            <div className="text-grey-400">Commit your allocations in different Purchase Tiers.</div>
          </div>
          <div>
            <div className="text-grey-50 font-semibold">Claim unallocated balance</div>
            <div className="text-turquoise-500"><span className="text-grey-800">█████████████</span></div>
            <div className="text-grey-400">The smart contract will calculate your allocation automatically based on all committed funds. If a portion of your committed funds did not get an allocation, you can claim them here.</div>
          </div>
          <div>
            <div className="text-grey-50 font-semibold">$U distribution</div>
            <div className="text-turquoise-500"><span className="text-grey-800">█████████████</span></div>
            <div className="text-grey-400">You can claim your $U allocations.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sideinfo;