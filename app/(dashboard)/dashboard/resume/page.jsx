import { getJobSeekerProfileById } from "@/app/lib/jobSeeker";
import Accordion from "./components/Accordion";
import Info from "./components/Info";
import ResumeUploader from "./components/ResumeUploader";
import VideoResume from "./components/VideoResume";

export default async function Resume() {
  const { data: profile } = await getJobSeekerProfileById();
  console.log(profile?.skills);
  return (
    <div className="text-white pr-10 w-full container">
      <div>
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          Edit Resume
        </h1>
      </div>
      {/* Resume Uploader -->   */}
      <div>
        <ResumeUploader resume={profile?.resume || null} />
      </div>

      <div>
        <VideoResume
          videos={
            profile?.videoResume?.length > 0 ? profile?.videoResume : null
          }
        />
      </div>

      <div className="py-10">
        <Info profile={profile} />
      </div>

      <div className="w-full bg-secondary rounded p-5 mt-5">
        {/* <div>
          <SubHeader className="">Intro & Overview</SubHeader>
          <p className="text-lg font-semibold">Overview*</p>
          <TextArea />
        </div> */}

        <div>
          <Accordion title="Education" />
          <Accordion title="Skills" />
        </div>
      </div>
    </div>
  );
}
