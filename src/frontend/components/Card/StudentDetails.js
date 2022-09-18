const StudentDetails = {
    students: [
<<<<<<< HEAD
        { studentId: 1, studentName: "Muskan", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" ,img:"https://cdn-icons-png.flaticon.com/512/2837/2837567.png"},
        { studentId: 2, studentName: "Devyani", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" ,img:"https://cdn-icons-png.flaticon.com/512/2837/2837567.png"},
        { studentId: 3, studentName: "Vanshita", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" ,img:"https://cdn-icons-png.flaticon.com/512/2837/2837567.png"},
        { studentId: 4, studentName: "Sunishka", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" ,img:"https://cdn-icons-png.flaticon.com/512/2837/2837567.png"},
=======
        { studentId: 1, studentName: "Muskan", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 2, studentName: "Devyani", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 3, studentName: "Vanshita", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 4, studentName: "Sunishka", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
>>>>>>> 8d01154 (added card components : sen & students)
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