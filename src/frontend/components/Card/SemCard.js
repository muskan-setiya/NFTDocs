import SemesterDetails from './SemDetails';
<<<<<<< HEAD
import ImgCard from './card';
import { Link } from 'react-router-dom';
import "./format.css";

=======
import BasicCard from './card';
import { Link } from 'react-router-dom';
>>>>>>> dabe175 (added cards: branch)

function SemesterCard(props){
    let semList = SemesterDetails.allSem();
    return (
<<<<<<< HEAD
        <row className='row'>
            {semList.map((sem) => (
                <div className='column'>
                <div className="container1" key={sem.semId}>
                    <Link to={`/department/${props.branchId}/semester/${sem.semId}`}>
                        <ImgCard txt="Semester" sid={sem.semId} img={sem.img} />
                    </Link>
                </div></div>
            ))}
        </row>
=======
        <>
            {semList.map((sem) => (
                <div className="container" key={sem.semId}>
                    <Link to={`/department/${props.branchId}/semester/${sem.semId}`}>
                        <BasicCard name={sem.branchName} address={sem.semId} />
                    </Link>
                </div>
            ))}
        </>
>>>>>>> dabe175 (added cards: branch)

    )
}

export default SemesterCard;