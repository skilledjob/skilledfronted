// This is Dashboard Sidebar
import SidebarDashBoard from "../components/Sidebar";

export default function DashboardRootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <SidebarDashBoard />
      {children}
    </div>
  );
}
