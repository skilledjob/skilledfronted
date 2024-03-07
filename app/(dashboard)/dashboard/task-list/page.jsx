"use client";

import FormElements from "@/app/components/ui/form-elements";
import { getAllCategories } from "@/app/lib/jobCategories";
import { getSearchResults } from "@/app/lib/search";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";

export default function Task() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const getCategories = async () => {
    const categories = await getAllCategories();
    setCategories(categories);
  };

  const getSearchedResults = async selectedCategory => {
    const searchResults = await getSearchResults({
      jobCategory: selectedCategory,
    });
    if (searchResults) {
      setSearchResults(searchResults);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getSearchedResults(selectedCategory);
    } else {
      getSearchedResults("");
    }
  }, [selectedCategory]);

  useEffect(() => {
    getSearchedResults("");
  }, []);

  console.log(searchResults, "searchResults");

  return (
    <>
      <div className="text-white pr-10 w-full">
        <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-center">
          <h1 className="text-2xl w-full font-bold mt-10 ml-2 before:w-1 before:h-[80%] relative before:absolute before:bg-[#9ca1b0] before:rounded-full before:top-1 before:-left-2">
            My Tasks
          </h1>

          <div className="flex items-center gap-5 w-1/2">
            <FormElements.SelectV2
              options={categories?.map(category => ({
                value: category.id,
                label: category.name,
              }))}
              value={selectedCategory}
              onChange={e => {
                console.log(e.target.value);
                setSelectedCategory(e.target.value);
              }}
            />
            <FormElements.SelectV2
              options={[
                {
                  value: "all",
                  label: "All",
                },
                {
                  value: "pending",
                  label: "Pending",
                },
                {
                  value: "approved",
                  label: "Approved",
                },
              ]}
              value={selectedStatus}
              onChange={e => {
                console.log(e.target.value);
                selectedStatus(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <TaskList />
    </>
  );
}
