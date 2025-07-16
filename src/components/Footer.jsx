"use client";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const res = await axios.post("/api/email", formData);

    if (res.data.success) {
      toast.success(res.data.msg);
      setEmail("");
    } else {
      toast.error("Error occurred");
    }
  }
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 min-w-screen bg-black  pt-5 pb-15 items-center px-5">
      <Image
        src="/assets/logo.png"
        width={120}
        alt="logo"
        height={1}
        className="mb-2 mt-6"
      />
      <form
        className="flex justify-between w-full mx-auto mt-10 border border-white text-white mb-9 sm:max-w-[500px]"
        action=""
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email"
          className="px-4 outline-none w-full"
        />
        <button className="border-1 border-white dark:border-white py-4 px-4 sm:px-8  border-y-0 border-r-0 cursor-pointer active:bg-[#fc5d0f] active:text-white">
          Subscribe
        </button>
      </form>

      <div className="flex gap-12 my-5 text-xl">
        <FontAwesomeIcon
          className="cursor-pointer py-2 px-3 hover:text-[#fc5d0f] transition-colors duration-600 focus:outline-1 focus:outline-[#fc5d0f] focus:text-[#fc5d0f]"
          tabIndex={0}
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="cursor-pointer p-2 hover:text-[#fc5d0f] transition-colors duration-600 focus:outline-1 focus:outline-[#fc5d0f] focus:text-[#fc5d0f]"
          tabIndex={0}
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="cursor-pointer p-2 hover:text-[#fc5d0f] transition-colors duration-600 focus:outline-1 focus:outline-[#fc5d0f] focus:text-[#fc5d0f]"
          tabIndex={0}
          icon={faInstagram}
        />
      </div>
      <p className="text-sm">© All Rights Reserved | Andy YT Lam </p>
    </div>
  );
}

export default Footer;
