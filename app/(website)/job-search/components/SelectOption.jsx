"use client";
import Select from "react-select";

export default function SelectOption() {
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
    <Select
      options={options}
      isSearchable
      className="text-black"
      placeholder="Indestry"
    />
  );
}
