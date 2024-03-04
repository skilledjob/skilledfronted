import plumber from "@/public/assets/plumber.jpg";
import { Avatar } from "@/app/components/ui/avatar";
import Link from "next/link";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
export default function SidebarDashBoard({ hideSide, setHideSide }) {
  const handleCollapse = () => {
    setHideSide(!hideSide);
  };
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#191919",
          paddingTop: "30px",
          height: "100vh",
        },
      }}
      collapsed={hideSide ? true : false}
    >
      <div
        className={`text-white flex items-start pr-2 -mt-6 ${!hideSide ? "justify-end" : "justify-center"} bg-secondary w-full`}
        onClick={handleCollapse}
      >
        <GiHamburgerMenu className="text-2xl" />
      </div>
      <Link href="/home">
        <h2
          className={`${hideSide ? "hidden" : "block"} text-center text-white text-3xl font-semibold`}
        >
          Skill Frontend
        </h2>
      </Link>
      <div className="flex flex-col items-center my-6 -mx-2 text-white">
        <Avatar
          image={plumber}
          size={`${hideSide ? "medium" : "large"}`}
          name={"Avatar"}
        />
        <h4
          className={`${hideSide ? "hidden" : "block"} mx-2 mt-2 font-medium`}
        >
          John Doe
        </h4>
        <p
          className={`${hideSide ? "hidden" : "block"} mx-2 mt-1 text-sm font-medium`}
        >
          john@example.com
        </p>
      </div>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "#ffffff",
                backgroundColor: active ? "#eecef9" : undefined,
                "&:hover": {
                  backgroundColor: "#141414",
                  color: "#ffffff",
                },
              };
          },
        }}
      >
        <MenuItem component={<Link href={"/dashboard"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>
              Dashboard
            </span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/dashboard/admin-profile"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>Profile</span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/user/resume"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>Resume</span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/dashboard/task-list"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>
              User Profile
            </span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/dashboard/homeSlider"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>
              Home Slider
            </span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/dashboard/jobPost"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>Job Post</span>
          </div>
        </MenuItem>
        <MenuItem component={<Link href={"/dashboard/jobCategory"} />}>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>
              Job Category
            </span>
          </div>
        </MenuItem>
        <MenuItem>
          <div
            className={`flex items-center ${hideSide ? "justify-center" : "justify-start"} gap-2`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={`${hideSide ? "hidden" : "block"}`}>Log Out</span>
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
