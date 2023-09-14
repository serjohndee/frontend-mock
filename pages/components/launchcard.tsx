import SalesProgress from './salesprogress';

interface LaunchcardProps {
  tier: number;
  tierPriceUsd: string;
  sold: string;
  tierSupply: string;
  tierUnlock: string;
  participants: string;
  commit: string;
  expectedAllo: string;
  saleOpen: boolean;
}

const Launchcard: React.FC<LaunchcardProps> = ({
  tier,
  tierPriceUsd,
  sold,
  tierSupply,
  tierUnlock,
  participants,
  commit,
  expectedAllo,
  saleOpen,
}) => {
  // Format the 'participants' value with decimal separators
  const formattedParticipants = participants.toLocaleString();

   // Calculate the discounted price
  //  const tierDiscount = ((60 - tierPriceUsd) / 60 * 100).toFixed(0);

  return (
    <div className="bg-grey-900 border border-grey-800 dark:bg-grey-100 dark:border-grey-200 rounded-sm shadow-lg">
      <div className="px-7 py-7 flex flex-col gap-6">
        <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-turquoise-400 dark:text-turquoise-700">Tier {tier}</div>
          <div className="font-semibold text-xl text-grey-50 dark:text-grey-950">$<span className="text-grey-800">{tierPriceUsd}</span> per token</div>
          <div className="text-turquoise-400 dark:text-turquoise-700">Unlocks on <span className="text-grey-800">{tierUnlock}</span></div>
        </div>
        <span className="flex-none self-start items-center rounded-sm bg-turquoise-500/10 px-2 py-1 text-sm font-semibold text-turquoise-400 ring-1 ring-inset ring-turquoise-500/20">
        <span className="text-turquoise-800">___</span> % OFF
      </span>
        </div>
        <SalesProgress tierSupply={tierSupply} sold={sold} />
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <div className="text-grey-500 dark:text-grey-600">Participants</div>
            <div className="text-grey-50 dark:text-grey-950">
              <span className="text-grey-800">{formattedParticipants}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-grey-500 dark:text-grey-600">You committed</div>
            <div className="text-grey-50 dark:text-grey-950">
              <span className="text-grey-800">{commit}</span> ETH
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-grey-500 dark:text-grey-600">Expected allocation</div>
            <div className="text-grey-50 dark:text-grey-950">
              <span className="text-grey-800">{expectedAllo}</span> ETH
            </div>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-turquoise-500 to-lime-500 text-turquoise-900 font-semibold h-11 rounded-sm">Commit ETH</button>
      </div>
    </div>
  );
};

export default Launchcard;