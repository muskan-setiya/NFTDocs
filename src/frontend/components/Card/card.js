import * as React from 'react';
import Card from 'react-bootstrap/Card';
import './format.css';
import './card.css';

function ImgCard(props) {
  return (
    <div className='dept'>
      <br />
      <Card className="container1">
        <Card.Img variant="top" src={props.img} className='imgCard' />
        <Card.Body>
          <Card.Text>
            <center>{props.name}</center>
          </Card.Text>
          <Card.Text>
            {props.address}
          </Card.Text>
          <Card.Text>
            <center>
              {props.txt}  {props.sid}
            </center></Card.Text>
        </Card.Body>

      </Card>
    </div>
  );
}
export default ImgCard;

