const studentData = [
  {
    id: 1,
    name: "Pat"
  },
  {
    id: 2,
    name: "Raf"
  }
];

export const getStudent = (id: Number) => {
  return studentData.filter(student => student.id == id)[0];
};

export const getAllStudents = () => {
    return studentData;
}