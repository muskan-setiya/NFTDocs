import React, { useState } from 'react'
<<<<<<< HEAD
=======
import { Button } from 'react-bootstrap'
>>>>>>> f12005a (cards)
import { useNavigate } from 'react-router-dom'
import "./Card/format.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Login({ account, web3Handler, teacherAccount, studentAccount, verifierAccount }) {
    const navigate = useNavigate();

    const goToStudent = () => {
        console.log("Hello")
        web3Handler()
        if (studentAccount.toLowerCase() === account) {
            console.log("Hello")
            navigate("/student/my-purchases");
        }
        else {
            navigate("/error");
            console.log("error");
        }

    };

    const goToTeacher = async () => {
        web3Handler()
        console.log(teacherAccount,account)
        if (teacherAccount.toLowerCase() === account) {
            // navigate("/teacher/create");
<<<<<<< HEAD
            navigate("/department")
=======
            navigate("/teacher/department");
>>>>>>> f12005a (cards)
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

    const cards = { item:[
        { id:1 ,name :"Students" , to: {goToStudent} , img:'https://cdn-icons-png.flaticon.com/512/2837/2837567.png'},
        {id:2, name: "Professor" , to: {goToTeacher} ,img : 'https://cdn-icons-png.flaticon.com/512/1048/1048949.png'},
        {id:3 ,name:"Verifier", to:{goToVerifier} , img: 'https://cdn-icons-png.flaticon.com/512/1271/1271380.png'}]
    };

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.item.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card height = '20rem' className='container1' onClick={card.to}
                  sx={{  display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image={card.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>

                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        
    )
}

export default Login