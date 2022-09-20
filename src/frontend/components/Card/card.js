import * as React from 'react';
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { createTheme ,ThemeProvider} from '@mui/material/styles';
// import blue from '@mui/material/colors/blue';
// import Palette from './Palette';
// import "./format.css";
// import { Row, Col, Card, Button } from 'react-bootstrap';
// import "./card.css";
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#757ce8',
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });

// const bull = (
//   <Box className='box'
//     component="span"
//     sx={{ 
//       display: 'inline-block',
//       mx: '2px',
//       transform: 'scale(0.8)' ,
//       width: 350,
//       height: 250,
//       // backgroundColor: 'secondary.dark',
//       //   '&:hover': {
//       //     backgroundColor: 'secondary.main',
//       //     opacity: [0.9, 0.8, 0.7],}
//     }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard(props) {
//   return (

// <div className="flex justify-center">
      
//         <div className="px-5 container">
          
//               <Col className="overflow-hidden" >
//               <Row className="g-4 py-5">
//                 <Card sx={{ width: 500}}>
//                   <Card.Img>
//                     {props.img}
//                   </Card.Img>
//                   <Card.Body>
//                     <Card.Title>{props.name}</Card.Title>
//                     <Card.Text>
//                     {props.address}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//                 </Row>
//               </Col>
              
//         </div>
//         </div>

//   );
// }


import Card from 'react-bootstrap/Card';
import './card.css';

// function ImgCard(props) {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="bottom" src={props.img} className="imageOfCard" />
//             <Card.Body>
//               <Card.Title>{props.name}</Card.Title>
//               <Card.Text>
//                 {props.name}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default ImgCard;

function ImgCard(props) {
  return (
    <div className='dept'>
      <br />
      <Card>
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
