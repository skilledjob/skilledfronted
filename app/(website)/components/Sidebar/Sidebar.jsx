import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex z-10 md:hidden absolute h-screen ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <div
        className={`w-64 bg-black/90 p-4 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full w-0"
        }`}
      >
        <ul
          className={`text-[#bed6f3] text-center space-y-5 text-lg lg:ml-32 md:ml-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:text-[#FF3988] cursor-pointer">
            <Link
              className={`link ${pathname === "/home" ? "text-[#ffffff]" : ""}`}
              href="/home"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-[#FF3988] cursor-pointer">
            <Link
              className={`link ${pathname === "/job-post" ? "text-[#ffffff]" : ""}`}
              href="/job-post"
            >
              Job Post
            </Link>
          </li>
          <li className="hover:text-[#FF3988] cursor-pointer">
            <Link
              className={`link ${pathname === "/job-search" ? "text-[#ffffff]" : ""}`}
              href="/job-search"
            >
              Candidate Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
