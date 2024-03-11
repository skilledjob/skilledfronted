import FormElements from "@/app/components/ui/form-elements";
import AdvanceFilter from "./components/AdvanceFilter";
import SearchResult from "./components/SearchResult";
import { Button } from "@/app/components/ui/button";

export default function JobSearch() {
  return (
    <div className="mt-20 text-white container">
      <div className="text-center flex flex-col items-center justify-center h-auto md:h-64">
        <h1 className="text-3xl font-semibold mb-4">Jobs Available Now</h1>
        <p className="text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          repellendus magni,
          <br /> atque delectus molestias quis?
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center bg-white rounded-md px-2 mt-10 text-black/75">
          <select
            name="industry"
            id="industry"
            className="border-none w-full bg-transparent py-3.5 px-2 rounded focus:outline-none text-black"
          >
            <option value="Industry">Industry</option>
            <option value="Software">Software</option>
            <option value="Finance">Finance</option>
            <option value="Recruting">Recruting</option>
            <option value="Management">Management</option>
            <option value="Advertising">Advertising</option>
            <option value="Development">Development</option>
          </select>

          <select
            name="industry"
            id="industry"
            className="border-none w-full bg-transparent py-3.5 px-2 rounded focus:outline-none text-black"
          >
            <option value="Industry">Industry</option>
            <option value="Software">Software</option>
            <option value="Finance">Finance</option>
            <option value="Recruting">Recruting</option>
            <option value="Management">Management</option>
            <option value="Advertising">Advertising</option>
            <option value="Development">Development</option>
          </select>
          <input
            type="text"
            className="border-none w-full bg-transparent py-3.5 px-5 rounded focus:outline-none text-black"
            placeholder="Your Keyword..."
          />
          <Button customClass="ml-auto md:ml-0">Search</Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <AdvanceFilter />
        <SearchResult />
      </div>
    </div>
  );
}
