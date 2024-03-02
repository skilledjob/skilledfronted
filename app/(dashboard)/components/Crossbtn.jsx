"use client"
import { GiHamburgerMenu } from "react-icons/gi";

export default function CrossBtn({ handleSidebar }) {
  return (
    <div className="block text-white p-3 bg-secondary w-full" onClick={handleSidebar}>
      <GiHamburgerMenu className="text-2xl" />
    </div>
  );
}
