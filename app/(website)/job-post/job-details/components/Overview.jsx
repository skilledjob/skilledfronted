import SubHeader from "@/app/(website)/components/Subheader/Subheader";

export default function Overview({singleJob}) {
  return (
    <div className="w-full px-5 lg:px-0 lg:w-4/6">
      <SubHeader className="text-white">Job Description</SubHeader>
      <p className="text-white/70">
    {singleJob?.description}
        <br />
        <br />
     
      </p>
    </div>
  );
}
