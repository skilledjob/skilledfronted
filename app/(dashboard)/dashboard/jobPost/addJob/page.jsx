import SubHeader from "@/app/(website)/components/Subheader/Subheader";
import JobPostForm from "./components/JobPostForm";

export default function addJob() {
  return (
    <div className="text-white p-5 w-full">
      <div className="bg-secondary w-full p-5 rounded-md">
        <SubHeader>Add Job</SubHeader>
        <JobPostForm />
      </div>
    </div>
  );
}
