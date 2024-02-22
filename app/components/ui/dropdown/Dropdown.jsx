"use client";

import { useOutsideClick } from "@/app/hooks";
import { useRef, useState } from "react";

/**
 * @name Dropdown
 * @description This component represents a dropdown menu.
 * It handles toggling the visibility of the dropdown menu and closing it when clicked outside.
 *
 * @param {JSX.Element} children - The content of the dropdown menu.
 * @param {JSX.Element} actionElement - The element that triggers the dropdown menu.
 * @param {string} width - The width of the dropdown menu. Options: "sm", "md", "lg", "xl".
 *
 * @returns {JSX.Element} - Returns the JSX element representing the dropdown menu.
 */

export const Dropdown = ({ children, actionElement, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideRef = useRef(null);

  useOutsideClick(outsideRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleDropdown = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div ref={outsideRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {actionElement}
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }
        ${
          width === "sm"
            ? "w-36"
            : width === "md"
              ? "w-48"
              : width === "lg"
                ? "w-60"
                : width === "xl"
                  ? "w-72"
                  : "w-48"
        }
        `}
      >
        <div
          className="py-2 px-2 rounded-sm bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onClick={toggleDropdown}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
