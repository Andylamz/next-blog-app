import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";

function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-12 max-h-[60px] px-12  ">
            <h3 className="font-bold text-[#fc5d0f] text-xl">
              Admin Dashboard
            </h3>
            <Image src="/assets/profile1.png" width={50} height={0} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
