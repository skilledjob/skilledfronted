import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import profile from "@/public/assets/plumber.jpg";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="text-white h-80 mt-20 flex flex-col items-center justify-center bg-secondary">
        <h1 className="text-4xl font-bold mb-3">Candidate Profile</h1>
        <p className="flex items-center justify-center gap-2 text-lg">
          Home <FaAngleRight /> Candidate Profile
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-28 mb-8 flex gap-20">
        <div className="w-3/4">
          <div className="p-5 border border-white/30 rounded-2xl">
            <h1 className="text-2xl font-bold mb-5 text-white">Overview</h1>
            <p className="leading-[2em] text-base text-white">
              Hello my name is Ariana Gande Connor and I’m a Financial
              Supervisor from Netherlands, Rotterdam. In pharetra orci
              dignissim, blandit mi semper, ultricies diam. Suspendisse
              malesuada suscipit nunc non volutpat. Sed porta nulla id orci
              laoreet tempor non consequat enim. Sed vitae aliquam velit.
              Aliquam Integer vehicula rhoncus molestie. Morbi ornare ipsum sed
              sem condimentum, et pulvinar tortor luctus. Suspendisse
              condimentum lorem ut elementum aliquam.
              <br />
              <br />
              Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
              blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
              molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar
              tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.
              Mauris nec.
            </p>
          </div>
          <div className="mt-20">
            <h1 className="text-4xl font-semibold mb-8 text-white">Intro</h1>
            <video
              src="https://www.youtube.com/embed/YxJl3Xd4KsM?si=xPcuzcYfd3vsjL3n"
              className="w-full h-96 rounded-2xl"
              autoPlay
              controls
            />
          </div>
          <div className="rounded-2xl mt-20 p-10 border border-black/30 relative">
            <h1 className="text-2xl font-semibold text-white absolute px-2 -top-4">
              Education
            </h1>
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 border border-btnColor rounded-full text-lg text-white">
                      1
                    </div>
                  </div>
                  <div className="w-px h-full bg-btnColor" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-base font-semibold text-white/60">
                    University of Boston
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    Bachelor Degree of Design
                  </p>
                  <p className="text-white/40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum primis
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 border border-btnColor text-white rounded-full text-lg">
                      2
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-base font-semibold text-white/60">
                    Design Collage
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    UI/UX Design Course
                  </p>
                  <p className="text-white/40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl mt-20 p-10 border border-black/30 relative">
            <h1 className="text-2xl font-semibold text-white absolute px-2 -top-4">
              Skills
            </h1>
            <ul className="flex flex-wrap">
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                Figma
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                HTML5
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                Illustrator
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                Adobe Photoshop
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                WordPress
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                jQuery
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                Web Design
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                Adobe XD
              </li>
              <li className="bg-btnColor text-base leading-[45px] px-[30px] rounded-[30px] mx-2 mt-[18px] text-primary">
                CSS
              </li>
            </ul>
          </div>
          <div className="rounded-2xl mt-20 p-10 border border-black/30 relative">
            <h1 className="text-2xl font-semibold text-white absolute px-2 -top-4">
              Work Experience
            </h1>
            <div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 text-white border border-btnColor rounded-full text-lg">
                      1
                    </div>
                  </div>
                  <div className="w-px h-full bg-btnColor" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-base font-semibold text-white/60">
                    02/03/18 - 13/05/20
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    Product Designer (Google)
                  </p>
                  <p className="text-white/40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 text-white border border-btnColor rounded-full text-lg">
                      2
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-base font-semibold text-white/60">
                    02/07/20 - 13/09/22
                  </p>
                  <p className="mb-2 text-lg font-bold text-white">
                    UI/UX Engineer (Adobe)
                  </p>
                  <p className="text-white/40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum primis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-secondary flex flex-col items-center justify-center py-10 px-5 rounded-2xl">
            <Avatar image={profile} size="large" />
            <h1 className="text-xl mt-3 font-semibold text-white">
              James Brower
            </h1>
            <div className="border-t border-t-white/30 w-full mt-5 pt-3">
              <span className="text-white/60 font-extralight">Age:</span>
              <p className="font-semibold text-white">28</p>
            </div>

            {/* <button className="py-3 bg-black text-lg text-white w-full rounded-2xl font-semibold tracking-wider mt-5">
              Contact Us
            </button> */}
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
