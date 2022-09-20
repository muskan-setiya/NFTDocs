import SemesterDetails from './SemDetails';

import ImgCard from './card';
import { Link } from 'react-router-dom';
import "./format.css";

import BasicCard from './card';
import { Link } from 'react-router-dom';


function SemesterCard(props){
    let semList = SemesterDetails.allSem();
    return (
        <>
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
        
        <row className='row'>
            {semList.map((sem) => (
                <div className='column'>
                <div className="container" key={sem.semId}>
                    <Link to={`/department/${props.branchId}/semester/${sem.semId}`}>
                        <ImgCard txt="Semester" sid={sem.semId} img={sem.img}/>
                    </Link>
                </div></div>
            ))}
        </row>
        </>
    )
}

export default SemesterCard;