import BranchDetails from './BranchDetails';
import BasicCard from './card';
import {Link} from 'react-router-dom';

function BranchCard(){
    let branchList = BranchDetails.allBranch();
    return(
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

export default BranchCard;