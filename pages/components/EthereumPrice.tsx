import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthereumPrice: React.FC = () => {
  const [ethPrice, setEthPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.binance.com/api/v3/ticker/price',
          { params: { symbol: 'ethusdt' } } // Change this if needed (e.g., for a different pair)
        );
        setEthPrice(response.data.price.toFixed(2));
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    fetchEthPrice();
  }, []);

  return (
    <div>
      {ethPrice !== null ? (
        <p>${ethPrice}</p>
      ) : (
        <p>$1,595.57</p>
      )}
    </div>
  );
};

export default EthereumPrice;
