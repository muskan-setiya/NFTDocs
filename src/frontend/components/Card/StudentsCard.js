import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import BasicCard from "./card";
import StudentInfo from "./StudentInfo";


function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <>
            {studentList.map((students) => (
                <div className="container" key={students.studentId}>
                    <Link to={`/semester/${props.semId}/students/${students.studentId}`}>
                        <BasicCard name={students.studentName} address={students.studentAddress} />
                    </Link>
                </div>
            ))}
        </>

    )
}

export default StudentsCard;