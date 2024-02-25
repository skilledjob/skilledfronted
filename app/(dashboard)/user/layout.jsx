import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserLayout({ children }) {
  const token = await cookies().get("token");
  if (token) {
    if (user?.role === "user") {
      return children;
    } else {
      return redirect("/home");
    }
  } else {
    return redirect("/home");
  }
}
