import BranchDetails from './BranchDetails'
import { useParams } from 'react-router'
import BranchCard from './BranchCard'
import SemesterCard from './SemCard';

export let branchID;
function BranchInfo() {

    let params = useParams();
    console.log("devyani", params)
    let bid = params.bid;// did-Branch id
    console.log(bid)
    let branchId = parseInt(bid);
    branchID = branchId
    const DeptDetails = BranchDetails.getBranch(branchId);

    return (
        <div className='branchcard'>
            <center><h2>{DeptDetails.branchName}</h2></center>

            <SemesterCard branchId={branchId} />
        </div>
    )
}

export default BranchInfo;