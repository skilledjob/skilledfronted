"use client";
import { useEffect, useState } from "react";
import SidebarDashBoard from "./components/sidebar";

export default function DashboardRootLayout({ children }) {
  const [hideSide, setHideSide] = useState(true);

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

  const handleSidebar = () => {
    setHideSide(!hideSide);
  };
  return (
    <div className="flex gap-5">
      <SidebarDashBoard hideSide={hideSide} setHideSide={setHideSide} />
      <div className="w-full">{children}</div>
    </div>
  );
}
