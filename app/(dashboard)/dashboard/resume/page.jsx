import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import FormElements from "@/app/components/ui/form-elements";
import { getJobSeekerProfileById } from "@/app/lib/jobSeeker";
import Accordion from "./components/Accordion";
import ResumeUploader from "./components/ResumeUploader";
import TextArea from "./components/TextArea";
import Video from "./components/Video";

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
      <ResumeUploader resume={profile?.resume || null} />

      <div className="w-full bg-secondary rounded p-5 mt-5">
        <div className="border-y border-y-white/40 pb-4">
          <SubHeader className="text-white">CV File</SubHeader>
          <FormElements.FileInput accept=".pdf,.doc,.docx">
            Browse
          </FormElements.FileInput>
          <p className="text-lg text-white/75 mt-2">
            Upload file .pdf, .doc, .docx
          </p>
        </div>

        <div>
          <SubHeader className="">Intro & Overview</SubHeader>
          <p className="text-lg font-semibold">Overview*</p>
          <TextArea />
        </div>
        <div>
          <Video />
        </div>
        <div>
          <Accordion title="Education" />
          <Accordion title="Skills" />
        </div>
      </div>
    </div>
  );
}
