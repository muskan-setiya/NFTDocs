import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import ImgCard from "./card";
import "./format.css";


function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <div>
            {studentList.map((students) => (
                <div className="container" key={students.studentId}>
                    <Link to={`/department/${props.branchId}/semester/${props.semId}/students/${students.studentId}`}>
                        <ImgCard name={students.studentName} address={students.studentAddress} img={students.img}/>
                    </Link>
                </div>
            ))}
        </div>

    )
}

export default StudentsCard;