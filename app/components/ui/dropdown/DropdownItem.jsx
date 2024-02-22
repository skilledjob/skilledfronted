import Link from "next/link";

/**
 * @name DropdownItem
 * @description This component represents an item within a dropdown menu.
 * It can be a button or a link.
 *
 * @param {string} type - The type of item. Options: "button", "link".
 * @param {string} to - The URL to navigate when the item is clicked (for links).
 * @param {function} onClick - The function to execute when the item is clicked (for buttons).
 * @param {JSX.Element} children - The content of the dropdown item.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the dropdown item.
 */

export const DropdownItem = ({ type, to, onClick, children }) => {
  switch (type) {
    case "button":
      return (
        <button
          onClick={onClick}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </button>
      );
    case "link":
      return (
        <Link
          href={to}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </Link>
      );

    default:
      return (
        <button
          onClick={onClick}
          className="w-full px-4 flex items-center  gap-2 py-2 text-sm text-gray-700 hover:bg-[#EEEEEE] hover:text-gray-900"
          role="menuitem"
        >
          {children}
        </button>
      );
  }
};
