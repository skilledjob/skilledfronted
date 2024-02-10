import Link from "next/link";

export default function AccountVerification() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[500px] mt-28">
        <div className="bg-[rgb(3 7 18)] shadow border border-slate-800 rounded p-8">
          <h2 className="text-slate-200 text-xl">Wait few seconds</h2>
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
}
