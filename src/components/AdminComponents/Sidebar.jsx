import Image from "next/image";
import DarkModeSwitch from "../DarkModeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faListUl, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col justify-between min-h-[1000px]  bg-[#0f0f0f] pb-50 sm:pb-0">
        <div className="px-2 sm:pl-12 py-6">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width={120}
              height={1}
              alt="Andy Blog"
            />
          </Link>
          <div className="w-36  sm:w-60 h-[100vh] relative py-12 pr-0 sm:pr-12">
            <Link
              href="/admin/addProduct"
              className="flex items-center justify-start gap-3 font-medium px-3 py-5 text-white hover:bg-[#272727] rounded-2xl cursor-pointer"
            >
              <span className="hidden md:inline">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              Add Blogs
            </Link>
            <Link
              href="/admin/blogList"
              className="flex mt-5 items-center justify-start  gap-3 font-medium px-3 py-5 text-white hover:bg-[#272727] rounded-2xl cursor-pointer"
            >
              <span className="hidden sm:inline">
                <FontAwesomeIcon icon={faListUl} />
              </span>
              Blog list
            </Link>
            <Link
              href="/admin/subscriptions"
              className="flex mt-5 items-center justify-start gap-3 font-medium px-3 py-5 text-white hover:bg-[#272727] rounded-2xl cursor-pointer sm:text-sm "
            >
              <span className="hidden sm:inline">
                <FontAwesomeIcon icon={faInbox} />
              </span>
              Subscriptions
            </Link>
            <div className="flex justify-center sm:mt-100 gap-3 font-medium  text-white hover:bg-[#272727] rounded-2xl  cursor-pointer mt-5">
              <div className="w-full px-3 py-5 text-center box-border">
                <DarkModeSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Sidebar;
