import { id } from "ethers/lib/utils"

const BranchDetails = {
    branch:[
        {branchId: 1 , branchName:"Computer Science and Engineering" ,img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/42fd3825815139.5634b2e60ab82.png"},
        {branchId: 2 , branchName:"Cyber Security" ,img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNhA5pY-YWwFOeAtntzJ-nAk4e-PJYNRVMg3aNAX9&s"},
        {branchId: 3 , branchName:"Data Science" , img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        {branchId: 4 , branchName:"AIML", img:"https://img.freepik.com/premium-vector/artificial-intelligence-logo-icon-concept_230610-568.jpg?w=2000"}
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