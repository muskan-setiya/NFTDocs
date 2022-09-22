import StudentDetails from "./StudentDetails";
import { useParams } from "react-router-dom";

function StudentInfo() {
    let params = useParams();
    console.log(params)
    let sid = params.sid;
    let studentId = parseInt(sid);

    const student = StudentDetails.getStudent(studentId);

    return (
        <div>
            <center>
                <h2 >Name : {student.studentName}</h2>
                <h2 >Address : {student.studentAddress}</h2>

            </center>

        </div>

    )
}

export default StudentInfo