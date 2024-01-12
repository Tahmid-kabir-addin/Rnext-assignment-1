export default function ClassRow({id, className}) {
  return (
    <tr className="bg-white/5" key={id}>
      <td className="p-5 text-sm md:text-xl" colSpan="4">
        {className}
      </td>
    </tr>
  );
}
