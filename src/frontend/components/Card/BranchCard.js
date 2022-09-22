import BranchDetails from './BranchDetails';

import { Link } from 'react-router-dom';
import "./format.css";
import Col from 'react-bootstrap/Col';
import BasicCard from './card';
import ImgCard from './card';
import Row from 'react-bootstrap/Row';


function BranchCard() {
    let branchList = BranchDetails.allBranch();
    return (
        <row className='row'>
            {branchList.map((dept) => (
                <div className='column'>
                    <Row>
                        <div className="container" key={dept.branchId} >
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col>
                                    <Link to={`/teacher/department/${dept.branchId}`}>
                                        <ImgCard name={dept.branchName} img={dept.img} />
                                    </Link>
                                </Col>
                            ))}
                        </div>
                    </Row>
                </div>
            ))}
        </row>
    )
}




export default BranchCard;