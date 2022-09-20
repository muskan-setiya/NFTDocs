import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card } from 'react-bootstrap'

export default function MyPurchases({ collegeplatform, nft, account }) {
  //account=acc that is currently logged in
    const [loading, setLoading] = useState(true)
    const [transferred, setTransfer] = useState([])
    const loadTransferredRecords = async () => {
        // Fetch transferred records from collegeplatform by quering Sent events with the student set as the user
        const filter =  collegeplatform.filters.Sent(null,null,null,"0xfE849659BF9B7226212F4AB0D32447089B855FC7")
        console.log("account:" ,account)
        console.log("filter:" ,filter)
        const results = await collegeplatform.queryFilter(filter)
        console.log(results)
        console.log("after queryFilter")
        //Fetch metadata of each nft and add that to listedItem object.
        const transferred = await Promise.all(results.map(async i => {
            // fetch arguments from each result
            i = i.args
            console.log(i)
            // get uri url from nft contract
            const uri = await nft.tokenURI(i.tokenId)
            console.log(uri.slice(7,uri.length-14))
            // use uri to fetch the nft metadata stored on ipfs 
            const url=`https://${uri.slice(7,uri.length-14)}.ipfs.dweb.link/${encodeURIComponent('metadata.json')}`
            const response = await fetch(url)
            const metadata = await response.json()
            // define listed item object
            let sentRecord = {
                //totalPrice,
                //price: i.price,
                recordId: i.tokenId,
                student: i.student,
                name: metadata.name,
                description: metadata.description,
                image: metadata.image
              }
              console.log("student:",i.student)
              return sentRecord

        }))
        setLoading(false)
        setTransfer(transferred)
        console.log(transferred)

    }
    useEffect(() => {
        loadTransferredRecords()
      }, [])
    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
          <h2>Loading...</h2>
        </main>
      )
      return (
        <div className="flex justify-center">
          {console.log(transferred.length)}
          {transferred.length > 0 ?
            <div className="px-5 container">
              <Row xs={1} md={2} lg={4} className="g-4 py-5">
                {transferred.map((item, idx) => {
                  console.log("item.stud:",item.student.toLowerCase())
                  console.log("acc:",account)
                  if(item.student.toLowerCase()==account){
                    return(
                      <>
                      {console.log("inside")}
                    {console.log(item)}                                      
                  <Col key={idx} className="overflow-hidden">                   
                    <Card>
                      <h1>{item.name}</h1>
                      <Card.Img variant="top" src={item.image} />
                    </Card>
                  </Col>
                      </>
                    )                    
                  }
                })}
              </Row>
            </div>
            : (
              <main style={{ padding: "1rem 0" }}>
                <h2>Nothing transferred</h2>
              </main>
            )}
        </div>
      );
}