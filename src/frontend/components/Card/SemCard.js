import SemesterDetails from './SemDetails';
import BasicCard from './card';
import { Link } from 'react-router-dom';
import "./format.css";

function SemesterCard(props){
    let semList = SemesterDetails.allSem();
    return (
        <>
            {semList.map((sem) => (
                <div className="container" key={sem.semId}>
                    <Link to={`/department/${props.branchId}/semester/${sem.semId}`}>
                        <BasicCard name={sem.branchName} address={sem.semId} />
                    </Link>
                </div>
            ))}
        </>

    )
}

export default SemesterCard;