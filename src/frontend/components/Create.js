import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'
//const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import { Link } from 'react-router-dom';
// import {branchID} from './BranchInfo';
// import StudentDetails from "./StudentDetails";
import StudentInfo from './Card/StudentInfo'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxODJmZWFhN0ZmN0ZhZThjMzRjRGU2MEM0NTU3NDREN2EyRmEwRWEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM1OTEzOTg1NDcsIm5hbWUiOiJORlREb2NzIn0.2jKGJ7G0wmQvnR1SoXz-uD0LomhHpS3f-MZm8THWvrI'
const client = new Web3Storage({ token })

const Create = ({ collegeplatform, nft, studentAccount, account, teacherAccount }) => {
  console.log('inside create')
  const [image, setImage] = useState('')
  //const [price, setPrice] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const uploadToIPFS = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    console.log(file)
    console.log(file.name)
    if (typeof file !== 'undefined') {
      try {
        const result = await client.put([file])
        console.log(result)
        setImage(`https://${result}.ipfs.w3s.link/${file.name}`)
        console.log(file.name)
      } catch (error) {
        console.log("ipfs image upload error: ", error)
      }
    }
  }
  //will trigger when user will click submit button
  const createNFT = async () => {
    //if all fields are written or not
    console.log(image)
    if (!image || !name || !description) return
    console.log("heeee")
    try {//add metadata to ipfs in json object format by passing through stringify method
      console.log(image)
      const result = await client.put([new File([JSON.stringify({ name: name, image: image, description: description })], 'metadata.json', { type: 'image/jpg' })])
      console.log(result)
      mintThenList(result)
    } catch (error) {
      console.log("ipfs uri upload error: ", error)
    }
  }
  const mintThenList = async (result) => {
    console.log("in mintThenList func")
    const uri = `ipfs://${result}/metadata.json`
    console.log(uri)
    // mint nft 
    console.log("before minting")
    await (await nft.mint(uri)).wait()
    console.log("after minting")
    // get tokenId of new nft 
    const id = await nft.tokenCount()
    console.log("token id: ", id)
    // approve collegeplatform to spend nft
    await (await nft.setApprovalForAll(collegeplatform.address, true)).wait()
    // add nft to collegeplatform
    //const listingPrice = ethers.utils.parseEther(price.toString())
    await (await collegeplatform.makeRecord(nft.address, id, studentAccount)).wait()
    const tp = await collegeplatform.checkTokenIdWithStudentAddress(id)
    console.log(tp)
  }

  if (account === teacherAccount.toLowerCase()) {
    
    return (
      
      <div className="container-fluid mt-5">
        <StudentInfo />
        <div className="row">
          <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="content mx-auto">
              <Row className="g-4">
                <Form.Control
                  type="file"
                  required
                  name="file"
                  onChange={uploadToIPFS}
                />
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  required type="text"
                  placeholder="Name" />
                <Form.Control
                  onChange={(e) => setDescription(e.target.value)}
                  size="lg"
                  required as="textarea"
                  placeholder="Description" />
                <div className="d-grid px-0">
                  <Button onClick={createNFT} variant="primary" size="lg">
                    Create & List NFT!
                  </Button>
                </div>
              </Row>
            </div>
          </main>
        </div>
      </div>
    );
  }
  else {
    return (
      <h1>You are not authorized to view Create Page</h1>
    )
  }
}

export default Create

