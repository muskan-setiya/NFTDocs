import BranchDetails from './BranchDetails';

import ImgCard from './card';
import {Link} from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';
import BasicCard from './card';
import {Link} from 'react-router-dom';

import ImgCard from './card';
import {Link} from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(

        
        <row className='row'>
           {branchList.map((dept) => (
                <div className='column'>
            
                <Row>
                
                <div className="container" key={dept.branchId} >
                    
                    {Array.from({length:1}).map((_,idx) => (
                        <Col>
                            <Link to={`/teacher/department/${dept.branchId}`}>
                                <ImgCard name={dept.branchName}  img={dept.img}/>
                            </Link>
                        </Col>    
                    ) )}
                    
                </div>               
                </Row>
                
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


        <>
           {branchList.map((dept) => (
                <div className="container" key={dept.branchId}>
                    <Link to={`/department/${dept.branchId}`}>
                        <BasicCard name={dept.branchName} address={dept.branchId} />
                    </Link>
                </div>
            ))}
        </>
    



export default BranchCard;