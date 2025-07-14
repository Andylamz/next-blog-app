"use client";
import Image from "next/image";

function BlogTableItem({
  authorImg = "",
  author,
  title,
  date,
  deleteBlog,
  mongoId,
}) {
  const blogDate = new Date(date);

  return (
    <>
      <tr className="border-b border-[#e9e9e9]">
        <th
          scope="row"
          className="items-center gap-3 hidden sm:flex px-6 py-4 font-bold whitespace-nowrap"
        >
          <Image
            src={authorImg ? authorImg : "/assets/profile1.png"}
            alt={`profile picture of ${author}`}
            width={40}
            height={40}
          />
          <p>{author ? author : "No Author"}</p>
        </th>
        <td className="px-6 py-4">{title ? title : "No Title"}</td>
        <td className="px-6 py-4 ">{blogDate.toDateString()}</td>
        <td className="px-6 py-4">
          <p
            className="ml-6 text-red-500 cursor-pointer  max-w-3 text-center "
            tabIndex={0}
            aria-label="delete button"
            onClick={() => deleteBlog(mongoId)}
          >
            x
          </p>
        </td>
      </tr>
    </>
  );
}

export default BlogTableItem;
