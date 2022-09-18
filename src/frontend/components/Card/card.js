import * as React from 'react';
<<<<<<< HEAD
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
=======
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 20}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.name}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
          {props.address}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
>>>>>>> 8d01154 (added card components : sen & students)
