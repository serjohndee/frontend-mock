interface SalesProgressProps {
    sold: string;
    tierSupply: string;
  }
  
  const SalesProgress: React.FC<SalesProgressProps> = ({ sold, tierSupply }) => {
    // Format the 'sold' value with decimal separators
    // const formattedSold = sold.toLocaleString();
  
    // Format the 'tierSupply' value with decimal separators
    // const formattedTierSupply = tierSupply.toLocaleString();
  
    // Calculate the percentage by dividing tiersold by tiersupply
    // const percentage = (sold / tierSupply) * 100;
  
    // Define a style object to set the width of the colored bar
    const barStyle = {
      width: `100%`,
      maxWidth: '100%',
    };
  
    return (
      <div className="flex flex-col gap-2">
        <div className="w-full bg-grey-700 dark:bg-grey-300 rounded-sm h-1">
          <div
            className="bg-gradient-to-r from-turquoise-500 to-lime-500 h-1 rounded-sm w-2/3"
            style={barStyle}
          ></div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1.5">
            <div className="text-grey-800">
              ████ / ████
            </div>
            <div className="text-grey-500">tokens sold</div>
          </div>
          <div className="text-lime-400"><span className="text-grey-800">████</span> %</div>
        </div>
      </div>
    );
  };
  
  export default SalesProgress;  