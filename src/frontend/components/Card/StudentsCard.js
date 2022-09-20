import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import ImgCard from "./card";
import "./format.css";
import { Row } from "react-bootstrap";


function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <row className='row'>
            {studentList.map((students) => (
                <div className='column'>
                <div className="container" key={students.studentId}>
                    <Link to={`/department/${props.branchId}/semester/${props.semId}/students/${students.studentId}`}>
                        <ImgCard name={students.studentName} address={students.studentAddress} img={students.img}/>
                    </Link>
                </div></div>
            ))}
        </row>

    )
}

export default StudentsCard;