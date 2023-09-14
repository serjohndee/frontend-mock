import { useEffect, useState } from 'react'
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'
import type {
    TokenSymbol
  } from '@web3-onboard/common'

  
interface Account {
    address: string,
    balance: Record<TokenSymbol, string> | null,
    ens: {name: string|undefined, avatar: string|undefined}
}

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [ethersProvider, setProvider] = useState<ethers.providers.Web3Provider | null>()
  const [account, setAccount] = useState<Account | null>(null)
  const [networkName, setNetworkName] = useState<string | null>(null)

  

  useEffect(() => {
    if (!wallet) return;
    if (wallet?.provider) {
      const { name, avatar } = wallet?.accounts[0].ens ?? {}
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
        ens: { name, avatar: avatar?.url }
      })
      
    }
  }, [wallet])

  useEffect(() => {
    if (!wallet) return;
    // If the wallet has a provider than the wallet is connected
    // if (connecting) {
    if (wallet?.provider) {
      const provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
      setProvider(provider)
      // if using ethers v6 this is:
      // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')

      // Get the network name
      provider.getNetwork().then(network => setNetworkName(network.name))
    }
  }, [wallet])
  
  if(wallet?.provider && account) {
    return (
      <div className="flex items-center">
      <div className="flex-shrink-0 flex items-center gap-3">
      {/* <div className="text-gray-50">Connected to {wallet.label} on {networkName} network</div> */}
            {/* {account.ens?.avatar ? (<img src={account.ens?.avatar} alt="ENS Avatar" />) : null} */}
          {/* <div>{ account.ens?.name ? account.ens.name : String(account.address).slice(0,10).concat("...") }</div> */}
          {/* <div>Connected to {wallet.label}</div> */}
          <button type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-sm bg-gradient-to-r from-turquoise-500 to-lime-500 px-4 py-2 text-sm font-semibold text-grey-950 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => { disconnect({ label: wallet.label })}}>
          { account.ens?.name ? account.ens.name : String(account.address).slice(0,10).concat("...") } 
            </button>
        </div>
        </div>
    )
  }

  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-sm bg-gradient-to-r from-turquoise-500 to-lime-500 px-4 py-2 text-sm font-semibold text-grey-950 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              disabled={connecting}
              onClick={() => connect()}
        >
          Connect wallet
        </button>
      </div>
    </div>
  )
}
