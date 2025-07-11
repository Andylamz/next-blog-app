import Navbar from "@/components/AdminComponents/Navbar";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
function Layout({ children }) {
  return (
    <>
      <div className="flex dark:bg-[#272727] transition-colors duration-500 ">
        <ToastContainer />
        <Sidebar />
        <div className="flex flex-col w-full min-h-[1000px] mb-50 md:mb-0">
          <Navbar />
          <div className="flex items-center justify-between w-full py-12 max-h-[60px] sm:px-12 px-5  ">
            <h3 className="font-bold text-[#fc5d0f] sm:text-xl text-lg">
              Admin Dashboard
            </h3>
            <Image
              src="/assets/profile1.png"
              width={50}
              height={0}
              alt="profile picture"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
