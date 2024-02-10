"use client";


import { useState } from "react";
import SubHeader from "../../components/Subheader/Subheader";

export default function SalaryRange() {
  const [value, setValue] = useState(280);

  const handleChange = e => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <div>
      <SubHeader>Salary Range</SubHeader>
      <div className="flex items-center justify-between gap-2">
        <input
          type="range"
          min={0}
          max={500}
          value={value}
          onChange={handleChange}
          className="w-full"
        />
        <div className="px-2 border border-white/70 rounded-md w-16 text-right">
          {value}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>0</span>
        <span>$500</span>
      </div>
    </div>
  );
}
