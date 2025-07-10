"use client";
import { use, useEffect, useState } from "react";
import { blog_data } from "../../../../public/assets/assets";
import Image from "next/image";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import Footer from "@/components/Footer";
import Link from "next/link";

function page({ params }) {
  const { id } = use(params);
  const [data, setdata] = useState(null);
  function fetchBlogData() {
    for (let blog of blog_data) {
      if (Number(id) === blog.id) {
        setdata(blog);
        break;
      }
    }
  }
  console.log(data);
  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    data && (
      <>
        <div className="py-5 px-5 md:px-12 lg:px-28 border-b-4 border-[#e9e9e9] transition-colors duration-500">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                height={0}
                width={130}
                alt="logo"
                className="w-[130px] sm:w-auto"
                tabIndex={0}
                aria-label="Andy Blog logo"
              />
            </Link>
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-2 font-extrabold py-1 px-3 sm:py-3 sm:px-6 border-solid border-4 border-[#fc5d0f] mr-5 ">
                Get Started
              </button>
              <DarkModeSwitch />
            </div>
          </div>
          <div className="text-center my-24">
            <Image
              src={data.profile}
              width={60}
              height={60}
              alt={`${data.author} profile picture`}
              className="mx-auto  border border-black dark:border-white rounded-full"
            />
            <p className="mt-3 mb-4 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
            <h1 className="text-2xl sm:text-5xl mb-12 font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-60px] mb-30">
          <Image
            className="border-4 border-[#e9e9e9]"
            src={data.image}
            width={1280}
            height={720}
            alt=""
          />
          <h1 className="my-8 text-[26px] font-semibold">Overview</h1>
          <p>{data.description}</p>
          <h3 className="my-5 text-[18px] font-semibold">Features</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* <Footer /> */}
      </>
    )
  );
}

export default page;
