import Image from "next/image";
import logo from "/public/assets/logo.png";
import DarkModeSwitch from "./DarkModeSwitch";
function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          width={120}
          alt="logo"
          className="w-[130px] sm:w-auto"
        />
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 font-extrabold py-1 px-3 sm:py-3 sm:px-6 border-solid border-4 border-[#fc5d0f] mr-5 ">
            Get Started
          </button>
          <DarkModeSwitch />
        </div>
      </div>
      <div className="text-center my-8">
        <form
          className="flex justify-between max-w-[500px] mx-auto mt-10 border border-black dark:border-white mb-15"
          action=""
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 outline-none w-full"
          />
          <button className="border-1 border-black dark:border-white py-4 px-4 sm:px-8  border-y-0 border-r-0 active:bg-[#fc5d0f] active:text-white">
            Subscribe
          </button>
        </form>

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
