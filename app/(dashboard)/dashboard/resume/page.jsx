import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import BrowseBtn from "../../../components/ui/form-elements/FileInput";
import Video from "./components/Video";
import FormElements from "@/app/components/ui/form-elements";
import Accordion from "./components/Accordion";
import TextArea from "./components/TextArea";

export default function Resume() {
  return (
    <div className="text-white pr-10 w-full">
      <div>
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          Edit Resume
        </h1>
      </div>
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

        <div className="border-b border-y-white/40 pb-4">
          <SubHeader className="text-white">Portfolio Photos</SubHeader>
          <BrowseBtn accept=".jpg, .jpeg, .png" htmlFor="cv">
            Browse
          </BrowseBtn>
          <p className="text-lg text-white/75 mt-2">
            Upload Photo .jpg, .jpeg, .png
          </p>
        </div>
        <div className="mb-16">
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
