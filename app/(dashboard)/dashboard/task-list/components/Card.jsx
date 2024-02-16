import Image from "next/image";
import logo from "@/public/assets/e1.png";

export default function Card() {
  return (
    <div className="border border-white/70 p-5 rounded-md">
      <div className="flex items-start gap-4 justify-between">
        <div className="min-w-16 min-h-16">
          <Image src={logo} alt="logo" className="h-16 w-16 rounded-lg" />
        </div>
        <div>
          <h3 className="text-xl font-bold">
            Senior Full Stack Engineer, Creator Success
          </h3>
          <p className="text-sm">
            <span className="text-white/70">Start: </span>1 days ago
          </p>
        </div>
      </div>

      <video
        src=""
        controls
        autoPlay
        poster="../../../../../public/assets/banner-detail.jpg"
      ></video>

      <div className="space-x-2">
        <button className="bg-btnColor text-primary inline-block px-4 py-1 rounded-md mt-2">
          pending
        </button>
        <button className="bg-btnColor text-primary inline-block px-4 py-1 rounded-md mt-2">
          Complete: <span className="font-semibold">80%</span>
        </button>
      </div>
    </div>
  );
}
