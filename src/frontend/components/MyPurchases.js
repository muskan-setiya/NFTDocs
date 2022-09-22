import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Row, Col, Card, Button } from 'react-bootstrap'
import Error from './Error'

export default function MyPurchases({ collegeplatform, nft, account, studentAccount }) {
  //account=acc that is currently logged in
  const [loading, setLoading] = useState(true)
  const [transferred, setTransfer] = useState([])
  const loadTransferredRecords = async () => {
    // Fetch transferred records from collegeplatform by quering Sent events with the student set as the user
    const filter = collegeplatform.filters.Sent(null, null, null, studentAccount)
    console.log("account:", account)
    console.log("filter:", filter)
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
      console.log(uri.slice(7, uri.length - 14))
      // use uri to fetch the nft metadata stored on ipfs 
      const url = `https://${uri.slice(7, uri.length - 14)}.ipfs.dweb.link/${encodeURIComponent('metadata.json')}`
      const response = await fetch(url)
      const metadata = await response.json()
      // define listed item object
      let sentRecord = {
        recordId: i.tokenId,
        student: i.student,
        name: metadata.name,
        description: metadata.description,
        image: metadata.image
      }
      console.log("student:", i.student)
      return sentRecord

    }))
    setLoading(false)
    setTransfer(transferred)
    console.log(transferred)

  }
  useEffect(() => {
    loadTransferredRecords()
  }, [])

  if (account === studentAccount.toLowerCase()) {
    return (
      <div className='flex justify-center'>
        {console.log(transferred.length)}
        {transferred.length > 0 ?
          <div className="px-5 container">
            <center>
              <h3>Logged in as : Muskan</h3>
            </center>
            <Row xs={1} md={2} lg={4} className="g-4 py-5">
              {transferred.map((record, idx) => {
                console.log("record.stud:", record.student.toLowerCase())
                console.log("acc:", account)
                if (record.student.toLowerCase() === account) {
                  return (
                    <>
                      {console.log("inside")}
                      {console.log(record)}
                      <Col key={idx}>
                        <Card className="list" style={{ width: '25rem' }}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <>
                                <h3>{record.name} </h3>
                              </>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <>
                                <Card.Img variant="top" src={record.image} />
                              </>
                            </ListGroup.Item>
                            <ListGroup.Item>Marksheet Link :
                              <a href={record.image} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                View Marksheet
                              </a>
                            </ListGroup.Item>
                          </ListGroup>
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
  else {
    return (
      <Error />
    )
  }

}