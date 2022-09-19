const SemesterDetails = {
    ds: [
        { semId: 1, branchName: "Data Science" },
        { semId: 2, branchName: "Data Science"  },
        { semId: 3, branchName: "Data Science" },
        { semId: 4, branchName: "Data Science" },
        { semId: 5, branchName: "Data Science" },
        { semId: 6, branchName: "Data Science" },
        { semId: 7, branchName: "Data Science" },
        { semId: 8, branchName: "Data Science" }
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