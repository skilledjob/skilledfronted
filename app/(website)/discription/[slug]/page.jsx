import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import profile from "@/public/assets/plumber.jpg";
import { Avatar } from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import { jobSeekerBySlug } from "@/app/lib/jobSeeker";

const Page = async ({ params }) => {
  const { slug } = params;

  const result = await jobSeekerBySlug(slug);
  console.log(result?.data?.firstName);

  const { data } = result;

  return (
    <div>
      <div className="text-white h-80 mt-20 flex flex-col items-center justify-center bg-secondary">
        <h1 className="text-4xl font-bold mb-3">Candidate Profile</h1>
        <p className="flex items-center justify-center gap-2 text-lg">
          Home <FaAngleRight /> Candidate Profile
        </p>
      </div>
      <div className="px-5 max-w-7xl mx-auto mt-28 mb-8 flex flex-col-reverse lg:flex-row gap-20">
        <div className="w-full lg:w-3/4">
          <div className="p-5 border border-white/30 rounded-2xl">
            <h1 className="text-2xl font-bold mb-5 text-white">Overview</h1>
            <p className="leading-[2em] text-base text-white">{data?.intro}</p>
          </div>
          {data?.videoResume.map((video, index) => (
            <div className="mt-20" key={video?.id}>
              <h1 className="text-4xl font-semibold mb-8 text-white">
                Video {index + 1}
              </h1>
              <video
                src={video?.file}
                className="w-full h-96 rounded-2xl"
                controls
              />
            </div>
          ))}
          <div className="rounded-2xl mt-20 p-3 md:p-10 border border-black/30 relative">
            <h1 className="text-2xl font-semibold text-white absolute px-2 -top-4">
              Education
            </h1>
            <div className="lg:py-6 mt-5 md:mt-0 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 border border-btnColor rounded-full text-lg text-white">
                      1
                    </div>
                  </div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-white">
                    {data?.education?.title}
                  </p>
                  <p className="text-white/40">{data?.education?.year}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="rounded-2xl mt-20 p-5 md:p-10 border border-black/30 relative">
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
          </div> */}
          <div className="rounded-2xl mt-20 p-5 md:p-10 border border-black/30 relative">
            <h1 className="text-2xl font-semibold text-white absolute px-2 -top-4">
              Work Experience
            </h1>
            <div>
              {data?.skills?.map((skill, index) => (
                <div className="flex mt-5 md:mt-0" key={skill.id}>
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 text-white border border-btnColor rounded-full text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="w-px h-full bg-btnColor" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold text-white">
                      {skill?.name} {`(${skill?.yearsOfExperience}+ years)`}
                    </p>
                    <p className="text-white/40">{skill?.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="bg-secondary flex flex-col items-center justify-center py-10 px-5 rounded-2xl">
            <Avatar
              image={
                data?.profilePicture ? data?.profilePicture : null
              }
              size="large"
            />
            <h1 className="text-xl mt-3 font-semibold text-white">
              {data?.firstName + " " + data?.lastName}
            </h1>
            <div className="border-t border-t-white/30 w-full mt-5 pt-3">
              <span className="text-white/60 font-extralight">Age:</span>
              <p className="font-semibold text-white">28</p>
            </div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
