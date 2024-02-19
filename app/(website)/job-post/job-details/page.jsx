import Image from "next/image";
import logo from "@/public/assets/e1.png";
import SubHeader from "../../components/Subheader/Subheader";
import { CiLocationOn, CiShare2, CiHeart } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Button } from "@/app/components/ui/button";
import { FiSend } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import Overview from "./components/Overview";
import Information from "./components/Information";

export default function JobDetails() {
  return (
    <div>
      <div className="h-80 bgImage"></div>
      <div className="max-w-7xl mx-auto">
        <div className="-mt-20 bg-secondary rounded-md p-8 flex items-center justify-between">
          <div className="flex gap-5">
            <div>
              <Image src={logo} alt="logo" className="rounded-lg" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white/50">Mermedia Ltd</p>
              <SubHeader className="my-0 text-xl text-white">
                Sales Specialist
              </SubHeader>
              <div className="flex items-center gap-10 text-white/60">
                <div className="flex items-center text-xs gap-1">
                  <CiLocationOn /> <span>433 Graham Ave</span>
                </div>
                <div className="flex items-center text-xs gap-1">
                  <SlCalender />
                  <span>June 20, 2023</span>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-secondary border border-gray-800 text-white/50 px-2 py-1 rounded-full text-xs">
                  Full Time
                </button>
                <button className="bg-secondary border border-gray-800 text-white/50 px-2 py-1 rounded-full text-xs">
                  Urgent
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-3 flex flex-col items-end">
            <div className="flex items-center gap-3">
              <div className="text-btnColor hover:bg-btnColor hover:text-primary transition-colors duration-300 border border-white/10 p-3 rounded-full cursor-pointer">
                <CiShare2 />
              </div>
              <div className="text-btnColor hover:bg-btnColor hover:text-primary transition-colors duration-300 border border-white/10 p-3 rounded-full cursor-pointer">
                <CiHeart />
              </div>
              <Button>
                <FiSend /> Apply Now
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm font-light text-white/35">Deadline date:</p>
              <p className="font-semibold text-white/45 text-sm">
                June 5, 2031
              </p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineDollar className="text-2xl text-white/35" />
              <p className="font-semibold text-white">$750 - $800</p>
              <p className="text-sm text-white/35">/ month</p>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-10 gap-10">
          <Overview />
          <Information />
        </div>
      </div>
    </div>
  );
}
