import SemesterDetails from './SemDetails';

import ImgCard from './card';
import "./format.css";

import BasicCard from './card';
import { Link } from 'react-router-dom';

import { branchID } from './BranchInfo';

function SemesterCard(props) {
    console.log(props.branchId)
    let semList = SemesterDetails.allSem();
    return (
        <>
            <row className='row'>
                {semList.map((sem) => (
                    <div className='column'>
                        <div className="container" key={sem.semId}>
                            <Link to={`/teacher/department/${props.branchId}/semester/${sem.semId}`}>
                                <ImgCard txt="Semester" sid={sem.semId} img={sem.img} />
                            </Link>
                        </div>
                    </div>
                ))}
            </row>
        </>
    )
}

export default SemesterCard;