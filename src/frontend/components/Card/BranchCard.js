import BranchDetails from './BranchDetails';
import ImgCard from './card';
import {Link} from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';

function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(
        
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


export default BranchCard;