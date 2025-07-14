"use client";

import { useEffect, useState } from "react";
import { blog_data } from "../../public/assets/assets";
import BlogItem from "./BlogItem";
import axios from "axios";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState("All");

  async function fetchBlogs() {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
    console.log(res.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  function handleOnClick(element) {
    setMenu(element);
    setSelected(element);
  }
  console.log(menu);
  return (
    <div className="transition-all duration-500 min-h-[180px]">
      <div className="flex justify-center gap-6 my-10 px-3 sm:px-0  ">
        <button
          className={`py-1 px-2 sm:px-6 rounded-sm transition-colors duration-200 cursor-pointer hover:bg-[#fc5d0f] hover:text-white dark:hover:bg-white dark:hover:text-black ${
            selected === "All"
              ? `bg-[#fc5d0f] text-white dark:bg-white dark:text-black`
              : ""
          }`}
          onClick={() => handleOnClick("All")}
        >
          All
        </button>
        <button
          onClick={() => handleOnClick("JavaScript")}
          className={`py-1 px-2 sm:px-6 rounded-sm transition-colors duration-200 cursor-pointer hover:bg-[#fc5d0f] hover:text-white dark:hover:bg-white dark:hover:text-black ${
            selected === "JavaScript"
              ? `bg-[#fc5d0f] text-white dark:bg-white dark:text-black`
              : ""
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleOnClick("React")}
          className={`py-1 px-2 sm:px-6 rounded-sm transition-colors duration-200 cursor-pointer hover:bg-[#fc5d0f] hover:text-white dark:hover:bg-white dark:hover:text-black ${
            selected === "React"
              ? `bg-[#fc5d0f] text-white dark:bg-white dark:text-black`
              : ""
          }`}
        >
          React
        </button>
        <button
          onClick={() => handleOnClick("Next.js")}
          className={`py-1 px-2 sm:px-6 rounded-sm transition-colors duration-200 cursor-pointer hover:bg-[#fc5d0f] hover:text-white dark:hover:bg-white dark:hover:text-black ${
            selected === "Next.js"
              ? `bg-[#fc5d0f] text-white dark:bg-white dark:text-black`
              : ""
          }`}
        >
          Next.js
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 sm:mx-24 px-3 sm:px-0 transition-all duration-700">
        {!blogs.length && <p>No Posts</p>}
        {menu === "All" &&
          blogs.length > 0 &&
          blogs.map((blog) => (
            <BlogItem
              key={blog._id}
              id={blog._id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              category={blog.category}
            />
          ))}
        {menu === "JavaScript" &&
          blogs.length > 0 &&
          blogs
            .filter((blog) => {
              return blog.category === "JavaScript";
            })
            .map((blog) => (
              <BlogItem
                key={blog._id}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                category={blog.category}
              />
            ))}
        {menu === "React" &&
          blogs.length > 0 &&
          blogs
            .filter((blog) => {
              return blog.category === "React";
            })
            .map((blog) => (
              <BlogItem
                key={blog._id}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                category={blog.category}
              />
            ))}
        {menu === "Next.js" &&
          blogs.length > 0 &&
          blogs
            .filter((blog) => {
              return blog.category === "Next.js";
            })
            .map((blog) => (
              <BlogItem
                key={blog._id}
                id={blog._id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                category={blog.category}
              />
            ))}
      </div>
    </div>
  );
}

export default BlogList;
