import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

function Login({ account, web3Handler, teacherAccount, studentAccount, verifierAccount }) {
    const navigate = useNavigate();

    const goToStudent = () => {
        web3Handler()
        if (studentAccount.toLowerCase() === account) {
            navigate("/student/my-purchases");
        }
        else {
            navigate("/error");
            console.log("error");
        }

    };

    const goToTeacher = async () => {
        web3Handler()
        if (teacherAccount.toLowerCase() === account) {
            navigate("/teacher/create");
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
            <Button onClick={goToStudent}> Student Login </Button>
            <Button onClick={goToTeacher}> Teacher Login </Button>
            <Button onClick={goToVerifier}> Verifier Login </Button>
        </div>
    )
}

export default Login