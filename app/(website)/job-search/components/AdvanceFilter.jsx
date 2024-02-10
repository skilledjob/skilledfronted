import SubHeader from "../../components/Subheader/Subheader";
import SalaryRange from "./SalaryRange";
import SelectOption from "./SelectOption";

export default function AdvanceFilter() {
  const industrialType = [
    {
      _id: 1,
      name: "All",
      availableJob: 180,
    },
    {
      _id: 2,
      name: "Software",
      availableJob: 18,
    },
    {
      _id: 3,
      name: "Finance",
      availableJob: 10,
    },
    {
      _id: 4,
      name: "Recruting",
      availableJob: 80,
    },
    {
      _id: 5,
      name: "Management",
      availableJob: 50,
    },
    {
      _id: 6,
      name: "Advertising",
      availableJob: 15,
    },
  ];

  return (
    <div className="px-5 w-[370px]">
      <div className="flex justify-between items-center border-b border-b-white/75 mb-5">
        <SubHeader className="mb-2">Advance Filter</SubHeader>
        <div className="text-white/70 cursor-pointer -mb-3">Reset</div>
      </div>
      <div>
        <SelectOption />
        <div>
          {/* <h3 className="text-3xl font-semibold">Industry</h3> */}
          <SubHeader>Industry</SubHeader>
          <div className="flex flex-col gap-3">
            {industrialType.map(job => (
              <label
                key={job._id}
                htmlFor={job.name}
                className="flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  id={job.name}
                  name={job.name}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between w-full">
                  <span>{job.name}</span>
                  <span>{job.availableJob}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        <SalaryRange />
      </div>
    </div>
  );
}
