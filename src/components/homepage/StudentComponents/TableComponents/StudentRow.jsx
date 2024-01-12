import StudentTableData from "./StudentRowData";

export default function StudentRow({ students }) {
  return (
    <>
      {students.map((student, index) => {
        return (
          <tr className="border-b border-[#7ECEB529]" key={student.id}>
            <StudentTableData studentData={student} index={index} />
          </tr>
        );
      })}
    </>
  );
}
