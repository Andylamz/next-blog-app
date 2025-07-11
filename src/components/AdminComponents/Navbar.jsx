"use client";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DarkModeSwitch from "../DarkModeSwitch";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function onClickHandler() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="md:hidden block">
      <div className="flex justify-center w-full bg-[#0f0f0f] py-10 mb-5">
        <Image
          src="/assets/logo.png"
          width={120}
          height={120}
          alt="Andy Blog logo"
        />
      </div>

      <div
        className={`px-10 text-white  ${
          isOpen ? "max-h-[500px]" : "max-h-[64px]"
        }`}
        onClick={onClickHandler}
      >
        <div className="relative flex flex-col w-full text-center ">
          <span className="py-5 bg-[#0f0f0f] hover:bg-black cursor-pointer">
            Menu <FontAwesomeIcon icon={faCaretDown} />
          </span>

          {isOpen && (
            <div className="flex flex-col text-center absolute top-[64px] w-full bg-[#0f0f0f] dark:hover  ">
              <Link
                className="py-5 cursor-pointer bg-[#0f0f0f] hover:bg-black"
                href="/admin/addProduct"
              >
                Add Product
              </Link>
              <Link
                className="py-5 cursor-pointer bg-[#0f0f0f] hover:bg-black"
                href="/admin/blogList"
              >
                Blog List
              </Link>
              <Link
                className="py-5 cursor-pointer bg-[#0f0f0f] hover:bg-black"
                href="/admin/subscriptions"
              >
                Subscriptions
              </Link>
              <div className="py-5 cursor-pointer bg-[#0f0f0f] hover:bg-[black]">
                <DarkModeSwitch />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
