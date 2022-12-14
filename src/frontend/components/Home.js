import { useState, useEffect } from 'react'
import { Row, Card, Button } from 'react-bootstrap'
import Error from './Error';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


//home component will display all the listed nfts
const Home = ({ collegeplatform, nft, account, verifierAccount, studentAccount }) => {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const loadCollegePlatformRecords = async () => {
    console.log("hello")
    const recordCount = await collegeplatform.recordCount()
    console.log("main")
    let records = []
    for (let i = 1; i <= recordCount; i++) {
      console.log("in loop")
      //to fetch every single record that was created in the collegeplatform
      const record = await collegeplatform.records(i)
      console.log(record)
      if (!record.sent) {
        console.log("inside if")
        //get uri url from nft contract
        const uri = await nft.tokenURI(record.tokenId)
        console.log(uri)
        console.log(uri.slice(7, uri.length - 14))
        //use uri to fetch the metadata stored on ipfs
        const url = `https://${uri.slice(7, uri.length - 14)}.ipfs.dweb.link/${encodeURIComponent('metadata.json')}`
        const response = await fetch(url)
        console.log(response)

        const metadata = await response.json()
        console.log(metadata)

        //add record to recors array
        records.push({
          recordId: record.recordId,
          student: record.student,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
        console.log(records)
      }
    }
    console.log("outside if")
    console.log(records)
    setRecords(records)
    setLoading(false)
    console.log(records)


  }
  const sendCollegeRecords = async (record) => {
    console.log("transferring record to .sol")
    console.log(record.recordId)
    const tp = await collegeplatform.checkTokenIdWithStudentAddress(record.recordId)
    console.log(tp)
    await (await collegeplatform.transferRecord(record.recordId, studentAccount)).wait()
    console.log("record sent")
    loadCollegePlatformRecords()
  }
  useEffect(() => {
    loadCollegePlatformRecords()
  }, [])

  if (verifierAccount.toLowerCase() === account) {
    return (
      <div className="flex justify-center">
        {records.length > 0 ?
          <div className="px-5 container">
            <Row xs={1} md={2} lg={4} className="g-4 py-5">
              {records.map((record, idx) => (
                <Card style={{ width: '25rem' }}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <>
                        <h2>{record.name} </h2>
                      </>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h4>Name : Muskan Setiya</h4>
                    </ListGroup.Item>

                    <ListGroup.Item>Marksheet Link :
                      <a href={record.image} target="_blank" rel="noreferrer">
                        View Marksheet
                      </a></ListGroup.Item>
                    <ListGroup.Item>
                      <div className='d-grid'>
                        <Button onClick={() => sendCollegeRecords(record)} variant="primary" size="lg">
                          SEND MARKSHEET!
                        </Button>
                      </div></ListGroup.Item>
                  </ListGroup>
                </Card>
              ))}
            </Row>
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
export default Home
