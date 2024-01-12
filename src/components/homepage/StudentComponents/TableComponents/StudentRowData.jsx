export default function StudentTableData({ studentData, index }) {
  return (
    <>
      <td className="p-5 text-sm md:text-xl">{index + 1}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src="avatar.png"
            width="32"
            height="32"
            alt="John Smith"
          />
          <span className="whitespace-nowrap">{studentData.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">
        {studentData.scores}
      </td>
      <td className="p-5 text-sm md:text-xl text-center">
        {studentData.percentage}
      </td>
    </>
  );
}
