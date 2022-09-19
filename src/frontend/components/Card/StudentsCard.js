import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import BasicCard from "./card";
import "./format.css";


function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <>
            {studentList.map((students) => (
                <div className="container" key={students.studentId}>
                    <Link to={`/department/${props.branchId}/semester/${props.semId}/students/${students.studentId}`}>
                        <BasicCard name={students.studentName} address={students.studentAddress} />
                    </Link>
                </div>
            ))}
        </>

    )
}

export default StudentsCard;