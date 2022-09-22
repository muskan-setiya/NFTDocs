import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import ImgCard from "./card";
import "./format.css";
import { branchID } from './BranchInfo';

function StudentsCard(props) {

    let studentList = StudentDetails.allStudents();
    return (
        <>
            <row className='row'>
                {studentList.map((students) => (
                    <div className='column'>
                        <div className="container" key={students.studentId}>
                            <Link to={`/teacher/department/${branchID}/semester/${props.semId}/students/${students.studentId}/create`} className="link">
                                <ImgCard name={students.studentName} address={students.studentAddress} img={students.img} />
                            </Link>
                        </div></div>
                ))}
            </row>
        </>

    )
}

export default StudentsCard;