// @ts-nocheck


import { createContext, useContext, useEffect, useState } from 'react'

import { ethers } from 'ethers'






const ContractContext = createContext<any>({})


const ContractProvider = ({ children }: any) => {
const [provider, setProvider] = useState(null);
const [signer, setSigner] = useState(null);
const [accountAddress, setAccountAddress] = useState(null)
useEffect(() => {
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
// We are in the browser and metamask is running
setProvider(new ethers.providers.Web3Provider(window.ethereum));
}
}, []);


useEffect(() => {
if (provider) {
setSigner(provider.getSigner());
}
}, [provider]);


useEffect(() => {
const fetchAccountData = async () => {
const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
setAccountAddress(accounts[0]);
}
fetchAccountData();
}, [signer])


return (
<ContractContext.Provider value={{
accountAddress
,provider
}}>
{children}
</ContractContext.Provider>
);
}
export { ContractContext, ContractProvider }