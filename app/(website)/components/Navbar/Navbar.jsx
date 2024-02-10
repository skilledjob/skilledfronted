"use client";
import { Button } from "@/app/components/ui/button";
import { useIsAuthenticated } from "@/app/hooks/useIsAuthenticated";
import { logout } from "@/app/lib/auth";
import logo from "@/public/assets/logo.jpeg";
import toast from "cogo-toast";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "../Sidebar/Sidebar";
import Onboarding from "../auth/Onboarding";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isAuthenticated = useIsAuthenticated();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = async () => {
    const isLoggedOut = await logout();
    if (isLoggedOut) {
      toast.success("Logout successful");
    }
  };

  return (
    <div className="">
      <nav className="w-full fixed top-0 right-0 z-10 min-h-20 flex justify-between bg-black items-center border-b border-slate-800 lg:px-10 md:px-4">
        <div className="md:w-1/2 flex items-center">
          <Image
            height="100"
            width="100"
            src={logo}
            alt="logo"
            className="h-20 w-20"
          />
          <ul className="md:flex items-center text-[#bed6f3] gap-5 text-lg lg:ml-32 md:ml-10 hidden">
            <li className="hover:text-[#FF3988] cursor-pointer">
              <Link
                className={`link ${pathname === "/home" ? "text-[#FF3988]" : ""}`}
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="hover:text-[#FF3988] cursor-pointer">
              <Link
                className={`link ${pathname === "/job" ? "text-[#FF3988]" : ""}`}
                href="/"
              >
                Job Post
              </Link>
            </li>
          </ul>
          {isOpen ? (
            <RxCross2
              onClick={toggleSidebar}
              className="text-white text-3xl block md:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={toggleSidebar}
              className="text-white text-3xl block md:hidden"
            />
          )}
        </div>
        <div className="flex items-center gap-3 md:gap-0 justify-between md:w-1/2 w-2/3">
          <div className="flex items-center justify-between bg-[#1B2E46] text-[#6A7482] w-full text-lg h-10 px-3 rounded-2xl">
            <input
              type="text"
              name=""
              id=""
              className="border-none outline-none bg-transparent placeholder:text-[#6A7482] w-full"
              placeholder="Search"
            />
            <CiSearch className="" />
          </div>

          <div className="flex items-center lg:ml-24 md:ml-10 gap-5">
            {!isAuthenticated && <Onboarding />}
            {isAuthenticated && (
              <Button variant="primary" onClick={logoutHandler}>
                Logout
              </Button>
            )}
            <CgProfile className="text-[#7B91AD] text-3xl" />
          </div>
        </div>
      </nav>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
