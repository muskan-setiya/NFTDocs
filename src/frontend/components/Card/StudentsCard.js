import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';

import ImgCard from "./card";
import "./format.css";
import { Row } from "react-bootstrap";

import BasicCard from "./card";

import StudentInfo from "./StudentInfo";


import { branchID } from './BranchInfo';

function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <>
            <row className='row'>
                {studentList.map((students) => (
                    <div className='column'>
                        <div className="container" key={students.studentId}>
                            <Link to={`/teacher/department/${props.branchId}/semester/${props.semId}/students/${students.studentId}/create`}>
                                <ImgCard name={students.studentName} address={students.studentAddress} img={students.img} />
                            </Link>
                        </div></div>
                ))}
            </row>


            {/* <div>
                <row className='row'>
                    {studentList.map((students) => (
                        <div className='column'>
                            <div className="container" key={students.studentId}>
                                <Link to={`/teacher/department/${branchID}/semester/${props.semId}/students/${students.studentId}/create`}>
                                    <ImgCard name={students.studentName} address={students.studentAddress} img={students.img} />
                                </Link>
                            </div></div>
                    ))}



                </row>
            </div> */}


        </>

    )
}

export default StudentsCard;