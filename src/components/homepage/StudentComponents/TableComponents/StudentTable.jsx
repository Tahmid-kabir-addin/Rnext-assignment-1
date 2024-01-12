import { Fragment } from "react";
import classData from "../../../../data/classData.js";
import ClassRow from "./ClassRow";
import StudentRow from "./StudentRow";
import TableHeader from "./TableHeader";

export default function StudentTable() {
  return (
    <div className="max-w-[848px] mx-auto overflow-auto">
      <table className="w-full">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {classData.map((cls) => {
            return (
              <Fragment key={cls.id}>
                <ClassRow className={cls.className} />
                <StudentRow students={cls.students} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
