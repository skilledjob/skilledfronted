import { SelectInput } from "@/app/components/ui/form-elements/Select";
import Card from "./components/Card";

export default function Task() {
  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
    { value: 3, label: "Three" },
    { value: 4, label: "Four" },
    { value: 5, label: "Five" },
    { value: 6, label: "Six" },
    { value: 7, label: "Seven" },
    { value: 8, label: "Eight" },
    { value: 9, label: "Nine" },
    { value: 10, label: "Ten" },
  ];
  return (
    <div className="text-white pr-10 w-full">
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center">
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          My Tasks
        </h1>
        <div className="flex items-center gap-5 w-72">
          <SelectInput options={options}/>
          <SelectInput options={options}/>
        </div>
      </div>
      <div className="w-full bg-secondary rounded p-5 mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card />
        <Card />
      </div>
    </div>
  );
}
