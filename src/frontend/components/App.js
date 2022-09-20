import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './Navbar';
import Home from './Home.js'
import Create from './Create.js'
import MyListedItems from './MyListedItems.js'
import MyPurchases from './MyPurchases.js'
import MarketplaceAbi from '../contractsData/Marketplace.json'
import MarketplaceAddress from '../contractsData/Marketplace-address.json'
import NFTAbi from '../contractsData/NFT.json'
import NFTAddress from '../contractsData/NFT-address.json'
import { useState } from 'react'
import { ethers } from "ethers"
import { Nav, Spinner } from 'react-bootstrap'

import StudentsCard from './Card/StudentsCard';
import StudentInfo from './Card/StudentInfo';
import SemesterCard from "./Card/SemCard";
import SemInfo from './Card/SemInfo';
import BranchInfo from './Card/BranchInfo';
import BranchCard from './Card/BranchCard';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
  }

  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <>
    //       <Navigation web3Handler={web3Handler} account={account} />
    //     </>
    //     <div>
    //       {loading ? (
    //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
    //           <Spinner animation="border" style={{ display: 'flex' }} />
    //           <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
    //         </div>
    //       ) : (
    //         <Routes>
    //           <Route path="/" element={
    //             <Home marketplace={marketplace} nft={nft} />
    //           } />
    //           <Route path="/create" element={
    //             <Create marketplace={marketplace} nft={nft} />
    //           } />
    //           <Route path="/my-listed-items" element={
    //             <MyListedItems marketplace={marketplace} nft={nft} account={account} />
    //           } />
    //           <Route path="/my-purchases" element={
    //             <MyPurchases marketplace={marketplace} nft={nft} account={account} />
    //           } />
    //         </Routes>
    //       )}
    //     </div>
    //   </div>
    // </BrowserRouter>
    
    <BrowserRouter>
    <Navigation />
    <div className="App">
      
      <center><h2 className="animate-character">Welcome to NFTDocs!</h2></center>
      <Routes>
        
        <Route path="/department" element={<BranchCard />} />
        <Route path="/department/:bid" element={<SemesterCard />} />
        <Route path="/department/:bid/semester/:id" element={<SemInfo/>} />
        <Route path="/department/:bid/semester/:id/students" element={<StudentsCard />} />
        <Route path="/department/:bid/semester/:id/students/:sid" element={<StudentInfo />} /> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
