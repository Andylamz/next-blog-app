import axios from "axios";
import { toast } from "react-toastify";

function SubsTableItem({ email, date, mongoId, deleteEmail }) {
  return (
    <tr className="border-b border-[#e9e9e9] text-left">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {email ? email : "No Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">
        {new Date(date).toDateString()}
      </td>
      <td>
        <button
          className="ml-12 text-red-500 cursor-pointer max-w-1"
          onClick={() => deleteEmail(mongoId)}
        >
          x
        </button>
      </td>
    </tr>
  );
}

export default SubsTableItem;
