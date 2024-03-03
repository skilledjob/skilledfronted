import SubHeader from "@/app/(website)/components/Subheader/Subheader";

export default function Overview({singleJob}) {
  return (
    <div className="w-4/6">
      <SubHeader className="text-white">Job Description</SubHeader>
      <p className="text-white/70">
    {singleJob?.description}
        <br />
        <br />
     
      </p>
    </div>
  );
}
