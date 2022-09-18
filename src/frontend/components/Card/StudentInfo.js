import StudentDetails from "./StudentDetails";
import { useParams } from "react-router-dom";

function StudentInfo() {
    let params = useParams();
    let sid = params.sid;
    let studentId = parseInt(sid);

    const student = StudentDetails.getStudent(studentId);


    return (
        <div>
            <h1>Name : {student.studentName}</h1>
            <h1>Address : {student.studentAddress}</h1>
        </div>
    )
}

export default StudentInfo