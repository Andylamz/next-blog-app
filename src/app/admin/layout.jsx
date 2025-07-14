import Navbar from "@/components/AdminComponents/Navbar";
import Sidebar from "@/components/AdminComponents/Sidebar";
import LoadingCom from "@/components/LoadingCom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Admin Dashboard",
  icons: { icon: "/favicon-96x96.png" },
  description:
    "The page is the admin dashboard, where admin can add blogs, view blog list and manage subscriptions",
};

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
          <Suspense fallback={<LoadingCom />}>{children}</Suspense>
        </div>
      </div>
    </>
  );
}

export default Layout;
