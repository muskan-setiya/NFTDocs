import BranchDetails from './BranchDetails';
import ImgCard from './card';
import {Link} from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(
        <div className='dept'>
           {branchList.map((dept) => (
            
                <Row>
                <div className="container" key={dept.branchId} >
                    
                    {Array.from({length:1}).map((_,idx) => (
                        <Col>
                            <Link to={`/department/${dept.branchId}`}>
                                <ImgCard name={dept.branchName}  img={dept.img}/>
                            </Link>
                        </Col>    
                    ) )}
                    
                </div>               
                </Row>
                
            ))}
        </div>
    )
}


export default BranchCard;