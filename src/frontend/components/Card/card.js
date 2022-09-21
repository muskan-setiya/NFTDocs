import * as React from 'react';
import Card from 'react-bootstrap/Card';
import './card.css';

function ImgCard(props) {
  return (
    <div className='dept'>
      <br />
      <Card className='main'>
      <Card.Img variant="top" src={props.img} className='imgCard'/>
        <Card.Body>
          <Card.Text>
              {props.name}
          </Card.Text>
          <Card.Text>
              {props.address}
          </Card.Text>
          <Card.Text>{props.txt}  {props.sid}</Card.Text>
        </Card.Body>
        
      </Card>
      </div>
  );
}
export default ImgCard;
