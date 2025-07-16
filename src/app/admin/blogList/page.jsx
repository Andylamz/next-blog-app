"use client";
import BlogTableItem from "@/components/AdminComponents/BlogTableItem";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function page() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBlogs() {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/blog");
      setBlogs(res.data.blogs);
      return;
    } catch (err) {
      return false;
    } finally {
      return setIsLoading(false);
    }
  }

  async function deleteBlog(mongoId) {
    const res = await axios.delete("/api/blog", {
      params: {
        id: mongoId,
      },
    });
    toast.success(res.data.msg);
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl font-bold"> ALL BLOGS</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-[#e9e9e9] scrollbar-hide">
        <table className="w-full text-sm ">
          <thead className="text-sm text-left uppercase bg-[#e9e9e9] dark:bg-gray-600 transition-colors duration-500 ">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className=" px-6 py-3">
                Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td className="text-center pt-8" colSpan="4">
                  <FontAwesomeIcon icon={faSpinner} spinPulse />
                </td>
              </tr>
            )}
            {!isLoading &&
              blogs.map((blog) => (
                <BlogTableItem
                  key={blog._id}
                  mongoId={blog._id}
                  date={blog.date}
                  authorImg={blog.authorImg}
                  author={blog.author}
                  title={blog.title}
                  deleteBlog={deleteBlog}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
