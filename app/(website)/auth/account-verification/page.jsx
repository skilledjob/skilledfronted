import { TOKENTYPES } from "@/app/constants";
import { verifyAccount } from "@/app/lib/auth";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";

export default async function AccountVerification({ searchParams }) {
  let { token } = searchParams;
  const decodedToken = jwtDecode(searchParams.token);
  if (decodedToken.exp < Date.now() / 1000) {
    return redirect("/not-found");
  }
  if (decodedToken?.type !== TOKENTYPES.VERIFY_EMAIL) {
    return redirect("/not-found");
  }

  const response = await verifyAccount(token);
  if (response?.success) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-[500px] mt-28">
          <div className="bg-[rgb(3 7 18)] shadow border border-slate-800 rounded p-8">
            <h2 className="text-slate-200 text-xl">Account has verified!</h2>
            <p className="text-slate-400 text-sm">
              Your account is being verified. Click{" "}
              <Link href="/home" className="text-blue-600">
                here
              </Link>{" "}
              to home page
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Something went wrong. Please try again.</div>;
  }
}
