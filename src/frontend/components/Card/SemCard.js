import SemesterDetails from './SemDetails';
import ImgCard from './card';
import { Link } from 'react-router-dom';
import "./format.css";


function SemesterCard(props){
    let semList = SemesterDetails.allSem();
    return (
        <>
            {semList.map((sem) => (
                <div className="container" key={sem.semId}>
                    <Link to={`/department/${props.branchId}/semester/${sem.semId}`}>
                        <ImgCard txt="Semester" sid={sem.semId} img={sem.img}/>
                    </Link>
                </div>
            ))}
        </>

    )
}

export default SemesterCard;