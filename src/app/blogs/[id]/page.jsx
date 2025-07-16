"use client";
import { Suspense, use, useEffect, useState } from "react";
import Image from "next/image";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import Link from "next/link";
import axios from "axios";

function page({ params }) {
  const { id } = use(params);
  const [data, setdata] = useState([]);

  async function fetchBlogData() {
    const res = await axios.get("/api/blog", {
      params: {
        id,
      },
    });
    setdata(res.data.blog);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    data && (
      <>
        <div className="py-5 px-5 md:px-12 lg:px-28 border-b-4 border-[#e9e9e9] transition-colors duration-500">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Suspense fallback={<p>Loading...</p>}>
                <Image
                  src="/assets/logo.png"
                  height={0}
                  width={130}
                  alt="logo"
                  className="w-[130px] sm:w-auto"
                  tabIndex={0}
                  aria-label="Andy Blog logo"
                />
              </Suspense>
            </Link>
            <div className="flex justify-between items-center">
              <Link href="/admin">
                <button className="flex items-center gap-2 font-extrabold py-1 px-3 sm:py-3 sm:px-6 border-solid border-4 cursor-pointer border-[#fc5d0f] mr-5 hover:bg-[#fc5d0f] transition-colors duration-500 hover:text-white">
                  Dashboard
                </button>
              </Link>
              <DarkModeSwitch />
            </div>
          </div>
          <div className="text-center my-24">
            {data.authorImg ? (
              <Image
                src={data.authorImg}
                width={60}
                height={60}
                alt={`${data.author} profile picture`}
                className="mx-auto  border border-black dark:border-white rounded-full"
              />
            ) : null}
            <p className="mt-3 mb-4 pb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
            <h1 className="text-2xl sm:text-5xl mb-12 font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-60px] mb-30 sm:p-5">
          {data.image ? (
            <Image
              className="border-4 border-[#e9e9e9]"
              src={data.image}
              width={1280}
              height={720}
              alt=""
            />
          ) : null}
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
