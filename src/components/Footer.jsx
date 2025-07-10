import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black  py-5 items-center">
      <Image src="/assets/logo.png" width={120} alt="logo" height={1} />
      <p className="text-sm">© All Rights Reserved | Andy YT Lam </p>
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
    </div>
  );
}

export default Footer;
