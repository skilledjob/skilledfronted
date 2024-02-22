"use client";

import Link from "next/link";
import { Loader } from "../loader/Loader";

export const Button = ({
  children,
  loading,
  disabled,
  variant = "btnColor",
  type = "button",
  size = "md",
  to = "/",
  onClick,
  linkButton = false,
  fullWidth = false,
  weight = "normal",
  customClass = "",
}) => {
  let classess = `
    rounded
    transition
    duration-200
    ease-in-out
    flex items-center gap-2
    cursor-pointer
    ${
      variant === "primary"
        ? "bg-primary text-btnColor"
        : variant === "secondary"
          ? "bg-secondary text-btnColor"
          : variant === "btnColor"
            ? "bg-btnColor text-primary"
            : variant === "text"
              ? "text-sky-500"
              : variant === "outline"
                ? "border"
                : "bg-primary text-btnColor"
    }
    ${
      weight === "bold"
        ? "font-bold"
        : weight === "normal"
          ? "font-light"
          : weight === "light"
            ? "font-extraLight"
            : "font-normal"
    }
    ${
      size === "xs"
        ? "px-2 py-1 text-xs"
        : size === "sm"
          ? "px-3 py-2 text-sm"
          : size === "md"
            ? "px-4 py-2 text-base"
            : size === "lg"
              ? "px-6 py-3 text-lg"
              : size === "xl"
                ? "px-8 py-4 text-xl"
                : "px-6 py-3.5"
    }
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${customClass}
    ${fullWidth ? "w-full" : ""}
  `;
  return !linkButton ? (
    <button className={classess} onClick={onClick} disabled={disabled}>
      {loading && <Loader />}
      {children}
    </button>
  ) : (
    <Link href={to ? to : "/"} className={classess}>
      {children}
    </Link>
  );
};
