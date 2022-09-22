const SemesterDetails = {
    ds: [
        { semId: 1, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 2, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png" },
        { semId: 3, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 4, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 5, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 6, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 7, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"},
        { semId: 8, branchName: "Data Science" ,img: "https://cdn-icons-png.flaticon.com/512/4918/4918243.png"}
    ],

    

    allSem: function () {
        return this.ds
    },

    getSemester: function (id) {
        const isSemester = sem => sem.semId === id
        return this.ds.find(isSemester)
    }
}

export default SemesterDetails;