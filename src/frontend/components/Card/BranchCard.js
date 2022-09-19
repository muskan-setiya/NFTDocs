import BranchDetails from './BranchDetails';
<<<<<<< HEAD
import ImgCard from './card';
import {Link} from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';
=======
import BasicCard from './card';
import {Link} from 'react-router-dom';
>>>>>>> dabe175 (added cards: branch)

function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(
<<<<<<< HEAD
        
        <row className='row'>
           {branchList.map((dept) => (
                <div className='column'>
                
                <div className="container1" key={dept.branchId} >
                    
                    {Array.from({length:1}).map((_,idx) => (
                        <Col>
                            <Link to={`/department/${dept.branchId}`}>
                                <ImgCard name={dept.branchName}  img={dept.img}/>
                            </Link>
                        </Col>    
                    ) )}
                    
                </div>               
                </div>
            ))}
        </row>
    )
}


=======
        <>
           {branchList.map((dept) => (
                <div className="container" key={dept.branchId}>
                    <Link to={`/department/${dept.branchId}`}>
                        <BasicCard name={dept.branchName} address={dept.branchId} />
                    </Link>
                </div>
            ))}
        </>
    )
}

>>>>>>> dabe175 (added cards: branch)
export default BranchCard;