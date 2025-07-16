import Image from "next/image";
import logo from "/public/assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            width={130}
            alt="logo"
            className="w-[130px] sm:w-auto"
          />
        </Link>
        <div className="flex justify-between items-center">
          <Link href="/admin" target="_blank">
            <button className="flex items-center gap-2 font-extrabold py-1 px-3 sm:py-3 sm:px-6 border-solid border-4 cursor-pointer border-[#fc5d0f] mr-5 ">
              Dashboard
            </button>
          </Link>
          <DarkModeSwitch />
        </div>
      </div>
      <div className="text-center mb-5 mt-35">
        <h1 className="text-3xl sm:text-5xl font-bold">Recent Posts</h1>
        <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base ">
          This is a self-built blog project made to practice Nexjt.js, Tailwind
          CSS and mongoDB, by YT Lam (Andy)
        </p>
      </div>
    </div>
  );
}

export default Header;
