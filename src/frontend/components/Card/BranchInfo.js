import BranchDetails from './BranchDetails'
import { useParams } from 'react-router'
import BranchCard from './BranchCard'
import SemesterCard from './SemCard';

function BranchInfo(){
    let params = useParams();
    let bid = params.id ;// did-Branch id
    let branchId = parseInt(bid);

    const DeptDetails = BranchDetails.getBranch(branchId);

    return(
        <div className='branchcard'>
            <h1>Department : {DeptDetails.branchName}</h1>

            <SemesterCard branchId={branchId}/>
        </div>
    )
}

export default BranchInfo;