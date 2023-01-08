import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./Card/format.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';


function Login({ account, web3Handler, teacherAccount, studentAccount, verifierAccount }) {
  const navigate = useNavigate();

  const goToStudent = () => {
    console.log("Hello")
    web3Handler()
    if (studentAccount.toLowerCase() === account) {
      console.log("Hello")
      navigate("/student/my-marksheets");
    }
    else {
      navigate("/error");
      console.log("error");
    }

  };

  const goToTeacher = async () => {
    web3Handler()
    console.log(teacherAccount, account)
    if (teacherAccount.toLowerCase() === account) {
      navigate("/teacher/department");
    }
    else {
      navigate("/error");
      console.log("error");
    }

  };

  const goToVerifier = () => {
    web3Handler()
    if (verifierAccount.toLowerCase() === account) {
      navigate("/verifier");
    }
    else {
      navigate("/error");
      console.log("error");
    }
  };

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={4}>
            <div className='card1'>
              <Card height='20rem' className='container1'
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={goToStudent}
              >
                <CardMedia
                  component="img"
                  image="https://t4.ftcdn.net/jpg/00/96/79/23/240_F_96792385_uNo7a5isquPQWohvBpxpGIxnNGCvmvhX.jpg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Doctor
                  </Typography>

                </CardContent>

              </Card>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <div className='card2'>
              <Card height='20rem' className='container1'
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={goToTeacher}
              >
                <CardMedia
                  component="img"
                  image="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <div className='card3'>
              <Card height='20rem' className='container1'
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={goToVerifier}
              >
                <CardMedia
                  component="img"
                  image="https://cdn-icons-png.flaticon.com/512/1271/1271380.png"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    Verifier
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}

export default Login