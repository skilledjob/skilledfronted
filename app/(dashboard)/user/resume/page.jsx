import { getJobSeekerProfileById } from "@/app/lib/jobSeeker";
import Info from "./components/Info";
import ResumeUploader from "./components/ResumeUploader";
import VideoResume from "./components/VideoResume";

export default async function Resume() {
  const { data: profile } = await getJobSeekerProfileById();
  return (
    <div className="text-white pr-10 w-full container">
      <div>
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          Edit Resume
        </h1>
      </div>
      {/* Resume Uploader -->   */}
      <div className="flex items-center justify-center md:block">
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
    </div>
  );
}
