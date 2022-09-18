import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Mediacard(props) {
  return (
      <div align = 'center'>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="100"
        image={props.image}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.text}
        </Typography>
        
      </CardContent>
      <CardActions>
          <Link to = {props.link}>
        <Button size="small" align="center" LinkComponent = {props.link}>View Semesters</Button>
        </Link>
      </CardActions>
    </Card>

    </div>
  );
}
export default Mediacard;