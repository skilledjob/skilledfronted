// This is Dashboard Sidebar 
import SidebarDashBoard from "../components/sidebar";

export default function DashboardRootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <SidebarDashBoard />
      {children}
    </div>
  );
}
