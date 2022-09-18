import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import ImgCard from "./card";
import "./format.css";
import { Row } from "react-bootstrap";
=======
import BasicCard from "./card";
import StudentInfo from "./StudentInfo";
>>>>>>> 8d01154 (added card components : sen & students)


function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
<<<<<<< HEAD
        <row className='row'>
            {studentList.map((students) => (
                <div className='column'>
                <div className="container1" key={students.studentId}>
                    <Link to={`/department/${props.branchId}/semester/${props.semId}/students/${students.studentId}`}>
                        <ImgCard name={students.studentName} address={students.studentAddress} img={students.img}/>
                    </Link>
                </div></div>
            ))}
        </row>
=======
        <>
            {studentList.map((students) => (
                <div className="container" key={students.studentId}>
                    <Link to={`/semester/${props.semId}/students/${students.studentId}`}>
                        <BasicCard name={students.studentName} address={students.studentAddress} />
                    </Link>
                </div>
            ))}
        </>
>>>>>>> 8d01154 (added card components : sen & students)

    )
}

export default StudentsCard;