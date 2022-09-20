import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import Navigation from './Navbar';
//useState to store the acc connected to the App
import { ethers } from "ethers"
import CollegePlatformAbi from '../contractsData/CollegePlatform.json'
import CollegePlatformAddress from '../contractsData/CollegePlatform-address.json'
import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
import Home from './Home.js'
import Create from './Create.js'
//import MyListedRecords from './MyListedRecord.js'
import MyListedRecords from './MyListedRecord.js'
import MyPurchases from './MyPurchases.js'
import { Spinner } from 'react-bootstrap'


function App() {
  const [loading,setLoading]=useState(true)
  //account:var that we could refer where we store value
  //setAccount:func that we can you to update the stored value by passing the newvalue as argument to it
  //here null is default value of account
  const [account,setAccount]=useState(null)
  const [nft,setNFT]=useState({})
  const [collegeplatform,setCollegePlatform]=useState({})
  //Metamask-login-connect
  //func that handles connection with metamask
  const web3Handler = async () => {
    //fetch account from metamask wallet
    //it will return array of accounts
    const accounts=await window.ethereum.request({method: 'eth_requestAccounts'});
    setAccount(accounts[0])
    //get provider from metamask
    const provider=new ethers.providers.Web3Provider(window.ethereum)
    //set signers
    const signer=provider.getSigner()

    loadContracts(signer)
  }
  const loadContracts=async (signer)=>{
    // Get deployed copies of contracts
    const collegeplatform= new ethers.Contract(CollegePlatformAddress.address, CollegePlatformAbi.abi, signer)
    setCollegePlatform(collegeplatform)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    console.log("before")
    setLoading(false)
    console.log("after")
  }

  return (
    <BrowserRouter>
      <div className="App">    

          <Navigation web3Handler={web3Handler} account={account} />        
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <Spinner animation="border" style={{ display: 'flex' }} />
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Home collegeplatform={collegeplatform} nft={nft}/>
              } />
              <Route path="/create" element={
                <Create collegeplatform={collegeplatform} nft={nft} />
              } />
              <Route path="/my-listed-records" element={
                <MyListedRecords collegeplatform={collegeplatform} nft={nft} account={account} />
              } />
              <Route path="/my-purchases" element={
                <MyPurchases collegeplatform={collegeplatform} nft={nft} account={account} />
              } />
            </Routes>
          )}
        </div>
    </BrowserRouter>
  );
}

export default App;
