import SemesterDetails from './SemDetails';
import { useParams } from "react-router-dom";
import StudentsCard from './StudentsCard';


export
    function SemInfo() {
    let params = useParams();
    console.log("sunishka", params)
    let id = params.id;
    let semId = parseInt(id);

    return (
        <div>
            <center><h2>Select Student</h2></center>
            <StudentsCard semId={semId} />
        </div>
    )
}

export default SemInfo;