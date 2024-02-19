"use client";
import FormElements from "@/app/components/ui/form-elements";
import { useState } from "react";

export default function Accordion({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4 p-2 md:p-6">
      <div>
        {/* header / Title */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 md:px-8 py-6 bg-primary cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            <span>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  fill="white"
                  className={`transform origin-center transition duration-200 ease-out ${isOpen && "!rotate-180"}`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  fill="white"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "!rotate-180"}`}
                />
              </svg>
            </span>
            <h4 className="text-white">{title}</h4>
          </div>
        </div>
        {/* body / content  */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div
              className={`pb-6 pr-4 pl-14 md:pl-16 space-y-2 text-sm bg-primary text-white/70`}
            >
              <div className="flex items-center gap-10 w-full">
                <label>Title</label>
                <FormElements.Input
                  type="text"
                  name="Title"
                  placeholder="Title"
                  width="full"
                />
              </div>
              <div className="flex items-center gap-10 w-full">
                <label>Year</label>
                <FormElements.Input
                  type="text"
                  name="Year"
                  placeholder="Year"
                  width="full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
