import { id } from "ethers/lib/utils"

const BranchDetails = {
    branch:[
        {branchId: 1 , branchName:"Computer Science and Engineering"},
        {branchId: 2 , branchName:"Cyber Security"},
        {branchId: 3 , branchName:"Data Science"},
        {branchId: 4 , branchName:"Artificial Intelligence and Machine Learning"}
    ],


allBranch: function(){
    return this.branch
},

getBranch: function(){
    const isBranch = b => b.branchId ===id
    return this.branch.find(isBranch)
}
}

export default BranchDetails;