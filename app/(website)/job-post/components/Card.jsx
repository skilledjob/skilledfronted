import img1 from "@/public/assets/img1.jpg";
import Image from "next/image";
import SubHeader from "../../components/Subheader/Subheader";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href="/job-post/job-details"
      className="p-2 rounded-md border border-white/70"
    >
      <div>
        <Image src={img1} alt="main card Photo" className="rounded-md" />
      </div>
      <div className="mt-5">
        <span className="bg-btnColor text-primary px-2 py-1 rounded-full text-xs">
          News
        </span>
        <SubHeader className="text-2xl text-white">
          21 Job Interview Tips: How To Make a Great Impression
        </SubHeader>
        <p className="text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
          perferendis nemo sint qui sequi harum quisquam ut voluptatibus culpa
          amet vero iusto
        </p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            <div>
              <Avatar image={img1} size="small" />
            </div>
            <div>
              <h5 className="text-white font-semibold leading-2">
                Razibul Islam Raj
              </h5>
              <span className="text-white/70 text-sm">25 April 2024</span>
            </div>
          </div>
          <div>
            {/* <button className="">Contact Us</button> */}
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
