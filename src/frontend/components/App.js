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
import Login from "./Login";
import Error from "./Error";




import StudentsCard from './Card/StudentsCard';
import StudentInfo from './Card/StudentInfo';
import SemesterCard from "./Card/SemPage";
import SemInfo from './Card/SemInfo';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true)
  //account:var that we could refer where we store value
  //setAccount:func that we can you to update the stored value by passing the newvalue as argument to it
  //here null is default value of account
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [collegeplatform, setCollegePlatform] = useState({})

  //Metamask-login-connect
  //func that handles connection with metamask
  const web3Handler = async () => {

    //fetch account from metamask wallet
    //it will return array of accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    //get provider from metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //set signers
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
    const collegeplatform = new ethers.Contract(CollegePlatformAddress.address, CollegePlatformAbi.abi, signer)
    setCollegePlatform(collegeplatform)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    console.log("before")
    console.log(nft)
    setLoading(false)
    console.log("after")
  }

  const studentAccount = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const teacherAccount = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const verifierAccount = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

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
      <div className="App">
        <Navigation web3Handler={web3Handler} account={account} studentAccount={studentAccount} teacherAccount={teacherAccount} verifierAccount={verifierAccount} />

        <Routes>
          <Route exact path="/" element={
            <Login web3Handler={web3Handler} account={account} studentAccount={studentAccount} teacherAccount={teacherAccount} verifierAccount={verifierAccount} />
          } />



          <Route exact path="/error" element={
            <Error account={account} studentAccount={studentAccount} teacherAccount={teacherAccount} verifierAccount={verifierAccount} />
          } />

          <Route path="/verifier" element={
            <Home collegeplatform={collegeplatform} nft={nft} account={account} verifierAccount={verifierAccount} studentAccount={studentAccount} />
          } />
          <Route path="/teacher/create" element={
            <Create collegeplatform={collegeplatform} nft={nft} account={account} teacherAccount={teacherAccount} studentAccount={studentAccount} />
          } />
          <Route path="/teacher/my-listed-records" element={
            <MyListedRecords collegeplatform={collegeplatform} nft={nft} account={account} teacherAccount={teacherAccount} />
          } />
          <Route path="/student/my-purchases" element={
            <MyPurchases collegeplatform={collegeplatform} nft={nft} account={account} studentAccount={studentAccount} />
          } />
        </Routes>

        {/* )} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
