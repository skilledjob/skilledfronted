"use client";

import { Button } from "@/app/components/ui/button";
import FormElements from "@/app/components/ui/form-elements";
import { getAllCategories } from "@/app/lib/jobCategories";
import { getSearchedJobSeekers } from "@/app/lib/search";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Card from "./components/Card";
import Loader from "./components/Loader";

// status options
const statusOptions = [
  { value: "all", label: "All" },
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
];

export default function Task() {
  // Local state
  const [selectedOption, setSelectedOption] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState([]);
  const [jobSeekers, setJobSeekers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("all");

  /**
   * HANDLERS
   */
  const getAllJobCategories = async () => {
    setIsLoading(true);
    const res = await getAllCategories();
    let categoryOptions = res?.map(category => ({
      value: category.id,
      label: category.name,
    }));

    categoryOptions = [
      { value: "", label: "Select category" },
      ...categoryOptions,
    ];
    setCategories(categoryOptions);
    setIsLoading(false);
  };

  const handleSelectCategory = e => {
    setSelectedOption(e.target.value);
  };

  const resetFilters = () => {
    setSelectedOption(null);
    setKeyword("");
    setStatus("all");
  };

  const handleChangeStatus = e => {
    setStatus(e.target.value);
  };

  const handleGetAllJobSeekers = async (category, keyword) => {
    setIsLoading(true);
    const res = await getSearchedJobSeekers(category, keyword);

    setJobSeekers(res?.searchResult?.results);
    setIsLoading(false);
  };

  // Render job seeker lists
  const renderJobSeekers = () => {
    if (jobSeekers?.length > 0) {
      return status === "all"
        ? jobSeekers.map((jobSeeker, index) => (
            <Card key={index} jobSeeker={jobSeeker} />
          ))
        : jobSeekers.map(
            (jobSeeker, index) =>
              jobSeeker.status === status && (
                <Card key={index} jobSeeker={jobSeeker} />
              )
          );
    }
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    setIsLoading(true);
    getAllJobCategories();
    handleGetAllJobSeekers();
  }, []);

  useEffect(() => {
    handleGetAllJobSeekers(selectedOption, keyword);
  }, [selectedOption, keyword]);

  return (
    <div className="text-white pr-10 w-full">
      <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center">
        <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
          My Tasks
        </h1>
        <div className="flex items-center gap-5 w-full">
          <FormElements.Input
            placeholder="Search by category"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <FormElements.SelectV2
            options={categories}
            value={selectedOption}
            onChange={handleSelectCategory}
            placeholder="Select category"
          />
          <FormElements.SelectV2
            options={statusOptions}
            value={status}
            onChange={handleChangeStatus}
          />
          <Button
            variant="denger"
            disabled={!selectedOption && !keyword && status === "all"}
            onClick={resetFilters}
          >
            <RxCross2 />
          </Button>
        </div>
      </div>

      <div>{/* <Loader /> */}</div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full bg-secondary rounded p-5 mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {renderJobSeekers()}
        </div>
      )}
    </div>
  );
}
