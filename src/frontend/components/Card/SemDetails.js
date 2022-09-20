const SemesterDetails = {
    ds: [

        { semId: 1, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 2, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg" },
        { semId: 3, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 4, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 5, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 6, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 7, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"},
        { semId: 8, branchName: "Data Science" ,img: "https://i.pinimg.com/736x/6b/2c/27/6b2c279eeb7a25918523baaa4202e4d0.jpg"}

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