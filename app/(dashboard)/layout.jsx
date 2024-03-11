"use client";
import { getCurrentUser } from "@/app/lib/user";
import { useEffect, useState } from "react";
import SidebarDashBoard from "./components/sidebar";

export default function DashboardRootLayout({ children }) {
  const [hideSide, setHideSide] = useState(false);
  const [user, setUser] = useState(null);

  /**
   * HANDLERS
   */
  const getCurrentUserDetails = async () => {
    const user = await getCurrentUser();
    setUser(user);
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    getCurrentUserDetails();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setHideSide(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex gap-5">
      <SidebarDashBoard
        user={user}
        hideSide={hideSide}
        setHideSide={setHideSide}
      />
      <div className="w-full">{children}</div>
    </div>
  );
}
