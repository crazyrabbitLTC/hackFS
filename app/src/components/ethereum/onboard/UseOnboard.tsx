import React, { useEffect } from 'react'
import Onboard from 'bnc-onboard'
import Web3 from 'web3'

let web3;

const onboard = Onboard({
  dappId: "a06f3ac6-b4c8-43d1-9a56-318a62e4fb3b",       // [String] The API key created by step one above
  networkId: 1,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
      web3 = new Web3(wallet.provider)
    }
  }
});

export const UseOnboard = () => {

  useEffect(() => {
    const getOnboard = async () => {
      await onboard.walletSelect();
      await onboard.walletCheck();
    }

    getOnboard()
  },[])

  console.log("Onboard: ", onboard)
  return (<div>Onboard here!</div>)
}


