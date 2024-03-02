import plumber from "@/public/assets/plumber.jpg";
import Link from "next/link";
import { Avatar } from "@/app/components/ui/avatar";

export default function SidebarDashBoard({ hideSide }) {
  const navItem = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Profile",
      path: "/dashboard/admin-profile",
    },
    {
      name: "Resume",
      path: "/user/resume",
    },
    {
      name: "User Profile",
      path: "/dashboard/task-list",
    },
    {
      name: "Home Slider",
      path: "/dashboard/homeSlider",
    },
    {
      name: "Job Post",
      path: "/dashboard/jobPost",
    },
    {
      name: "Job Category",
      path: "/dashboard/jobCategory",
    },
  ];

  return (
    <aside
      className={`${hideSide ? "flex" : "hidden"} sticky top-0 flex-col min-w-64 h-screen px-4 py-8 overflow-y-auto bg-secondary border-r rtl:border-r-0 rtl:border-l`}
    >
      <h2 className="text-center text-white text-3xl font-semibold">
        Skill Frontend
      </h2>
      <div className="flex flex-col items-center mt-6 -mx-2 text-white">
        <Avatar image={plumber} size="large" name={"Avatar"} />
        <h4 className="mx-2 mt-2 font-medium">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium">john@example.com</p>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6 text-white">
        <nav>
          {navItem.map(namePath => (
            <Link
              className="flex items-center px-4 py-2 rounded-lg"
              href={namePath.path}
              key={namePath.path}
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">{namePath.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
