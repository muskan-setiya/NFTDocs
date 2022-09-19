import BranchDetails from './BranchDetails';
import BasicCard from './card';
import {Link} from 'react-router-dom';
import Palette from './Palette';
import "./format.css";

function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(
        <> 
           {branchList.map((dept) => (
                <div className="container" key={dept.branchId} >
                    <Link to={`/department/${dept.branchId}`}>
                        <BasicCard name={dept.branchName} address={dept.branchId} palette={<Palette/>} />
                    </Link>
                    <theme/>
                </div>
                
            ))}
            
        </>
    )
}

export default BranchCard;