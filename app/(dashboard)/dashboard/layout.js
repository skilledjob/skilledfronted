import { getCurrentUser } from "@/app/lib/user";
import { redirect } from "next/navigation";

export default async function DashboardRootLayout({ children }) {
  const user = await getCurrentUser();

  if (user?.role !== "admin") {
    return redirect("/home");
  }
  return children;
}
