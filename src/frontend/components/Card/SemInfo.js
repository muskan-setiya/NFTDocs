import SemesterDetails from './SemDetails';
import { useParams } from "react-router-dom";
import StudentsCard
 from './StudentsCard';


 export
function SemInfo() {
    let params = useParams();
    console.log("sunishka",params)
    let id = params.id;
    let semId = parseInt(id);

    const SemesterDetail = SemesterDetails.getSemester(semId);

    return (
        <div>
            <h1>Semester : {SemesterDetail.semId}</h1>
            <h1>Branch : {SemesterDetail.branchName}</h1>

            <StudentsCard semId={semId}/>
        </div>
    )
}

export default SemInfo;