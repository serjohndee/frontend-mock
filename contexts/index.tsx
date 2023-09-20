// @ts-nocheck


import { createContext, useContext, useEffect, useState } from 'react'

import { ethers } from 'ethers'

import { useConnectWallet } from '@web3-onboard/react'

const ContractContext = createContext<any>({})


const ContractProvider = ({ children }: any) => {
    const [provider, setProvider] = useState(null); // This is for reading information unrelated to the wallet. 
    const [walletProvider, setWalletProvider] = useState(null); // This is for ready specific user information.

    const [signer, setSigner] = useState(null);
    const [accountAddress, setAccountAddress] = useState(null);


    /**
     * Provider is fetched via ethers immeidately when page is loaded. 
     * Wallet is fetched when connected.
     * wallet.provider is not used.
     * Signer is fetched when wallet is connected, killed when disconnected. 
     */
    // This could be used for non-wallet related reads. Differentiation will be simple.
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            // We are in the browser and metamask is running
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider);

        }
    }, []);



    // useEffect(() => {
    //     if (provider) {
    //         setSigner(provider.getSigner());
    //     }
    // }, [provider]);    



    useEffect(() => {
        if (!signer) return;
        const fetchAccountData = async () => {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccountAddress(accounts[0]);
        }
        fetchAccountData();
    }, [signer])



    // might conflict with the ones living in connectWallet
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    // const [ethersProvider, setProvider] = useState<ethers.providers.Web3Provider | null>()
    const [account, setAccount] = useState<Account | null>(null)

    const [networkName, setNetworkName] = useState<string | null>(null)
    /** balanceObject - the balance of accountAddress in the form of an object
     * May be used to feed into contract calls.
    */
    const [balanceObject, setBalanceObject] = useState(0)
    /** balanceNumber balanceObject converted into a number, divided by 10**18
     * This should under NO circumstances be passed into any contracts. 
     * This is only used for displays.
     */
    const [balanceNumber, setBalanceNumber] = useState(0)

    useEffect(() => {
        if (!provider) return;
        const getWallet = () => {
            if (wallet) {
                console.log('set signer');
                setSigner(provider.getSigner());
            } else if (!wallet) {
                console.log("remove signer!")
                setSigner(null);
            }
        }
        getWallet()
    }, [provider, wallet])

    //   useEffect(() => {
    //     if (!provider || ! wallet) return;
    //     if (wallet) {
    //         setSigner(provider.getSigner());
    //         console.log("signer set")
    //     }
    // }, [wallet, provider]);    

    useEffect(() => {
        if (!wallet) return;
        if (wallet?.provider) {
            // const { name, avatar } = wallet?.accounts[0].ens ?? {}
            const address = wallet.accounts[0]?.address;
            // const _balance = wallet.accounts[0]?.balance;
            setAccount({
                address: wallet.accounts[0].address
                //   ,balance: wallet.accounts[0].balance
                // , ens: { name, avatar: avatar?.url }
            })
        }
    }, [wallet])

    useEffect(() => {
        if (!provider || !accountAddress) return;
        const getBalance = async () => {
            const _balanceObject = await provider.getBalance(accountAddress);
            setBalanceObject(_balanceObject);

            setBalanceNumber(Number(_balanceObject.toString()) / 10 ** 18)
        }
        getBalance();
    }, [provider, accountAddress])

    // Don't touch - raw wallet 
    useEffect(() => {
        if (!wallet) return;
        // If the wallet has a provider than the wallet is connected
        if (wallet?.provider) {
            const provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
            // setProvider(provider)
            // if using ethers v6 this is:
            // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')

            // Get the network name
            provider.getNetwork().then(network => setNetworkName(network.name))
        }
    }, [wallet])
    // const [provider, setProvider] = useState(null);
    // const [signer, setSigner] = useState(null);
    // const [accountAddress, setAccountAddress] = useState(null)
    // useEffect(() => {
    //     if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    //         // We are in the browser and metamask is running
    //         setProvider(new ethers.providers.Web3Provider(window.ethereum));
    //     }
    // }, []);


    // useEffect(() => {
    //     if (provider) {
    //         setSigner(provider.getSigner());
    //     }
    // }, [provider]);


    // useEffect(() => {
    //     if (!signer) return;
    //     const fetchAccountData = async () => {
    //         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //         setAccountAddress(accounts[0]);
    //     }
    //     fetchAccountData();
    // }, [signer])


    return (
        <ContractContext.Provider value={{
            accountAddress
            , provider
            , wallet
            , account
            , connecting
            , connect
            , disconnect
            , balanceNumber
        }}>
            {children}
        </ContractContext.Provider>
    );
}
export { ContractContext, ContractProvider }