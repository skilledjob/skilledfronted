import { redirect } from "next/navigation";

export const metadata = {
  title: "Skilled Up",
  description: "Skilled Up is a website for finding best employees",
};

export default async function Page() {
  return redirect("/home");
}
