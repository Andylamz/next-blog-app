"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

function page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "JavaScript",
    author: "Alex",
    authorImg: "/assets/profile1.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const res = await axios.post("/api/blog", formData);

    if (res.data.success) {
      toast.success(res.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "JavaScript",
        author: "Alex",
        authorImg: "/assets/profile1.png",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col pt-5 px-5 sm:pt-12 md:pl-16 "
      >
        <p className="text-xl font-bold">Upload Thumbnail</p>
        <label
          htmlFor="image"
          className="cursor-pointer inline-block max-w-[140px]"
        >
          <Image
            src={!image ? "/assets/download.png" : URL.createObjectURL(image)}
            className="mt-4"
            width={140}
            height={70}
            alt="upload image"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4 font-bold">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          className="w-full md:w-[400px] mt-4 px-4 py-3 border"
          placeholder="Blog Title"
          required
        />
        <p className="text-xl mt-4 font-bold">Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          type="text"
          value={data.description}
          className="w-full md:w-[400px] mt-4 px-4 py-3 border resize-none"
          placeholder="Description"
          required
          rows={10}
        />
        <p className="text-xl mt-4 font-bold">Category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="px-4 py-2 mt-3 border w-40"
        >
          <option value="JavaScript" className="text-black">
            JavaScript
          </option>
          <option value="React" className="text-black">
            React
          </option>
          <option value="Next.js" className="text-black">
            Next.js
          </option>
        </select>
        <button
          type="submit"
          className="mt-8 w-40 h-12 text-white bg-black dark:bg-[#fc5d0f]  transition-colors duration-500 cursor-pointer"
        >
          + ADD
        </button>
      </form>
    </>
  );
}

export default page;
