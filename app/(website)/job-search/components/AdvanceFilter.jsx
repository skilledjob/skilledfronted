import { SelectInput } from "@/app/components/ui/form-elements/Select";
import SubHeader from "../../components/Subheader/Subheader";
import SalaryRange from "./SalaryRange";
import SelectOption from "./SelectOption";
import FormElements from "@/app/components/ui/form-elements";

export default function AdvanceFilter() {
  const industrialType = [
    {
      _id: 1,
      label: "All",
      availableJob: 180,
    },
    {
      _id: 2,
      label: "Software",
      availableJob: 18,
    },
    {
      _id: 3,
      label: "Finance",
      availableJob: 10,
    },
    {
      _id: 4,
      label: "Recruting",
      availableJob: 80,
    },
    {
      _id: 5,
      label: "Management",
      availableJob: 50,
    },
    {
      _id: 6,
      label: "Advertising",
      availableJob: 15,
    },
  ];

  return (
    <div className="px-5 w-full lg:w-[370px]">
      <div className="flex justify-between items-center border-b border-b-white/75 mb-5">
        <SubHeader className="mb-2">Advance Filter</SubHeader>
        <div className="text-white/70 cursor-pointer -mb-3">Reset</div>
      </div>
      <div>
        {/* <SelectOption /> */}
        <div>
          {/* <SelectInput options={industrialType} /> */}
          <FormElements.Select
            defaultValue={industrialType[0]}
            options={industrialType}
          />
        </div>
        <div>
          {/* <h3 className="text-3xl font-semibold">Industry</h3> */}
          <SubHeader>Industry</SubHeader>
          <div className="flex flex-col gap-3">
            {industrialType.map(job => (
              <label
                key={job._id}
                htmlFor={job.label}
                className="flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  id={job.label}
                  name={job.label}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between w-full">
                  <span>{job.label}</span>
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
