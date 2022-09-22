import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card } from 'react-bootstrap'
import Error from './Error'

function renderSentRecords(records) {
  return (
    <>
      <h2>Sent</h2>
      <Row xs={1} md={2} lg={4} className="g-4 py-3">
        {records.map((record, idx) => (
          <Col key={idx} className="overflow-hidden">
            <Card>
              <Card.Img variant="top" src={record.image} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default function MyListedRecords({ collegeplatform, nft, account, teacherAccount }) {
  console.log(account)
  const [loading, setLoading] = useState(true)
  const [listedRecords, setListedRecords] = useState([])
  const [sentRecords, setSentRecords] = useState([])
  const loadListedRecords = async () => {
    console.log("inside loadListedRecords")
    // Load all sent records that the user listed
    const recordCount = await collegeplatform.recordCount()
    console.log("recordCount value= ", recordCount)
    let listedRecords = []
    let sentRecords = []
    //for loop that will return every record created
    for (let indx = 1; indx <= recordCount; indx++) {
      console.log("indx: ", indx)
      const i = await collegeplatform.records(indx)
      console.log("record of that nft: ", i)
      //if statement to check if the creater of the record = account
      //**************************** 
      if (teacherAccount.toLowerCase() === account) {
        console.log("account matches")
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId)

        console.log(uri.slice(7, uri.length - 14))
        //use uri to fetch the metadata stored on ipfs
        const url = `https://${uri.slice(7, uri.length - 14)}.ipfs.dweb.link/${encodeURIComponent('metadata.json')}`
        const response = await fetch(url)

        // use uri to fetch the nft metadata stored on ipfs 
        //const response = await fetch(uri)
        const metadata = await response.json()
        console.log("metadata: ", metadata)
        // define listed item object
        let record = {
          //totalPrice,
          //price: i.price,
          recordId: i.recordId,
          student: i.student,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        }
        console.log("before pushing, record= ", record)
        listedRecords.push(record)
        console.log("after pushing, listedRecords= ", listedRecords)
        // Add listed record to sent records array if sent
        if (i.sent) sentRecords.push(record)
        console.log("sent value: ", i.sent)
        console.log(sentRecords)

      }

    }
    setLoading(false)
    setListedRecords(listedRecords)
    setSentRecords(sentRecords)
  }
  useEffect(() => {
    loadListedRecords()
  }, [])

  if (account === teacherAccount.toLowerCase()) {
    return (
      <div className="flex justify-center">
        {listedRecords.length > 0 ?
          <div className="px-5 py-3 container">
            <h2>Listed Marksheets</h2>
            <Row xs={1} md={2} lg={4} className="g-4 py-3">
              {listedRecords.map((record, idx) => (
                <Col key={idx} className="overflow-hidden">
                  <Card>
                    <Card.Img variant="top" src={record.image} />
                    <Card.Body color="secondary">
                      <Card.Title>Muskan Setiya</Card.Title>
                      <Card.Text>{record.name}</Card.Text>
                      <Card.Text>
                        {record.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {sentRecords.length > 0 && renderSentRecords(sentRecords)}
          </div>
          : (
            <main style={{ padding: "1rem 0" }}>
              <h2>No listed assets</h2>
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