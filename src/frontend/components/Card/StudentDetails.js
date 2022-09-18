const StudentDetails = {
    students: [
        { studentId: 1, studentName: "Muskan", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 2, studentName: "Devyani", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 3, studentName: "Vanshita", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
        { studentId: 4, studentName: "Sunishka", studentAddress: "0x0d048eED5c935C783E2A4D8803bF425A2Db87B57" },
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