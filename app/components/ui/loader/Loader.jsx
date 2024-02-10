"use client";

import { TbLoader2 } from "react-icons/tb";

export const Loader = ({ size, color }) => {
  return (
    <TbLoader2
      className={`animate-spin text-[${color || "#ddd"}]`}
      size={size || 17}
    />
  );
};
