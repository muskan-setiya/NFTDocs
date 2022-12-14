const StudentDetails = {
    students: [
        { studentId: 1, studentName: "Muskan Setiya", studentAddress: "0xcd3b766ccdd6ae721141f452c550ca635964ce71", img: "https://cdn-icons-png.flaticon.com/512/2837/2837567.png" },
        { studentId: 2, studentName: "Devyani Kalamkar", studentAddress: "0xcd3b766ccdd6ae721141f452c550ca635964ce71", img: "https://cdn-icons-png.flaticon.com/512/2837/2837567.png" },
        { studentId: 3, studentName: "Vanshita Lalwani", studentAddress: "0xcd3b766ccdd6ae721141f452c550ca635964ce71", img: "https://cdn-icons-png.flaticon.com/512/2837/2837567.png" },
        { studentId: 4, studentName: "Sunishka Malviya", studentAddress: "0xcd3b766ccdd6ae721141f452c550ca635964ce71", img: "https://cdn-icons-png.flaticon.com/512/2837/2837567.png" },
    ],

    teachers: [
        { teacherId: 1, teacherName: "Raipurkar Sir", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { teacherId: 2, teacherName: "Borikar Sir", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { teacherId: 3, teacherName: "Chandak Sir", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { teacherId: 4, teacherName: "Pardhi Sir", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
    ],

    allStudents: function () {
        return this.students
    },

    getStudent: function (id) {
        const isStudent = student => student.studentId === id
        return this.students.find(isStudent)
    }
}

export default StudentDetails;