import { TOKENTYPES } from "@/app/constants";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function ResetPassword({ searchParams }) {
  try {
    const token = jwtDecode(searchParams.token);
    if (token.exp < Date.now() / 1000) {
      return redirect("/not-found");
    }
    if (token?.type !== TOKENTYPES.RESET_PASSWORD) {
      return redirect("/not-found");
    }
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-[500px] mt-28">
          <ResetPasswordForm token={searchParams.token} />
        </div>
      </div>
    );
  } catch (error) {
    return redirect("/not-found");
  }
}
